import { useEffect, useState, type FormEvent } from "react";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SEO } from "@/components/layout/SEO";
import type { WebsiteContent } from "@shared/website-content";

type Status = "idle" | "loading" | "saving" | "error" | "saved";

async function requestJson<T>(url: string, init?: RequestInit): Promise<T> {
  const res = await fetch(url, {
    credentials: "include",
    headers: init?.body ? { "Content-Type": "application/json" } : undefined,
    ...init,
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || res.statusText);
  }

  return res.json();
}

export function ContentAdmin() {
  const [authenticated, setAuthenticated] = useState(false);
  const [email, setEmail] = useState("jarrud@muloo.co");
  const [password, setPassword] = useState("");
  const [caseStudiesText, setCaseStudiesText] = useState("");
  const [resourcePostsText, setResourcePostsText] = useState("");
  const [status, setStatus] = useState<Status>("loading");
  const [message, setMessage] = useState("");

  const loadContent = async () => {
    const content = await requestJson<WebsiteContent>("/api/website-content");
    setCaseStudiesText(JSON.stringify(content.caseStudies, null, 2));
    setResourcePostsText(JSON.stringify(content.resourcePosts, null, 2));
  };

  useEffect(() => {
    requestJson<{ authenticated: boolean }>("/api/admin/session")
      .then(async () => {
        setAuthenticated(true);
        await loadContent();
        setStatus("idle");
      })
      .catch(() => {
        setAuthenticated(false);
        setStatus("idle");
      });
  }, []);

  const login = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      await requestJson("/api/admin/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
      });
      setAuthenticated(true);
      await loadContent();
      setStatus("idle");
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Login failed");
    }
  };

  const save = async () => {
    setStatus("saving");
    setMessage("");

    try {
      const payload: WebsiteContent = {
        caseStudies: JSON.parse(caseStudiesText),
        resourcePosts: JSON.parse(resourcePostsText),
      };

      const saved = await requestJson<WebsiteContent>("/api/admin/website-content", {
        method: "PUT",
        body: JSON.stringify(payload),
      });

      setCaseStudiesText(JSON.stringify(saved.caseStudies, null, 2));
      setResourcePostsText(JSON.stringify(saved.resourcePosts, null, 2));
      setStatus("saved");
      setMessage("Saved. Public pages now use this content.");
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Save failed");
    }
  };

  return (
    <div className="flex flex-col">
      <SEO title="Content Admin | Muloo" description="Muloo content admin." robots="noindex,nofollow" />

      <Section className="pt-20 pb-10 md:pt-28">
        <span className="text-sm font-mono text-gradient-muloo uppercase tracking-widest">// Admin</span>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mt-4 mb-5">Content editor.</h1>
        <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
          Edit case studies and resource posts as structured JSON. Keep IDs and slugs stable when possible.
        </p>
      </Section>

      <Section className="py-10 md:py-12">
        {!authenticated ? (
          <form onSubmit={login} className="max-w-md rounded-2xl border border-white/10 bg-white/[0.02] p-6">
            <label className="block text-sm font-semibold text-white mb-2" htmlFor="admin-email">
              Admin email
            </label>
            <Input
              id="admin-email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="mb-4"
              autoComplete="username"
              required
            />
            <label className="block text-sm font-semibold text-white mb-2" htmlFor="admin-password">
              Admin password
            </label>
            <Input
              id="admin-password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="mb-4"
              autoComplete="current-password"
            />
            <Button type="submit" disabled={status === "loading"} className="bg-gradient-muloo border-none text-white">
              {status === "loading" ? "Signing in..." : "Sign in"}
            </Button>
            {message && <p className="mt-4 text-sm text-stream-product">{message}</p>}
          </form>
        ) : (
          <div className="space-y-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-2xl font-bold text-white">Editable content</h2>
                <p className="text-sm text-muted-foreground mt-1">Invalid JSON will be rejected before it reaches the site.</p>
              </div>
              <Button onClick={save} disabled={status === "saving"} className="bg-gradient-muloo border-none text-white">
                {status === "saving" ? "Saving..." : "Save content"}
              </Button>
            </div>

            {message && (
              <div className={status === "error" ? "text-stream-product" : "text-brand-teal"}>
                {message}
              </div>
            )}

            <div className="grid gap-6 lg:grid-cols-2">
              <EditorPanel
                label="Case studies"
                value={caseStudiesText}
                onChange={setCaseStudiesText}
              />
              <EditorPanel
                label="Resource posts"
                value={resourcePostsText}
                onChange={setResourcePostsText}
              />
            </div>
          </div>
        )}
      </Section>
    </div>
  );
}

function EditorPanel({ label, value, onChange }: { label: string; value: string; onChange: (value: string) => void }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
      <label className="block font-mono text-[11px] uppercase tracking-[0.16em] text-brand-teal mb-3">
        {label}
      </label>
      <Textarea
        value={value}
        onChange={(event) => onChange(event.target.value)}
        spellCheck={false}
        className="min-h-[560px] resize-y font-mono text-xs leading-relaxed"
      />
    </div>
  );
}
