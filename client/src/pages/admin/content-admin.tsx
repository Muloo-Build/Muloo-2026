import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import { BriefcaseBusiness, CalendarDays, FileText, LogOut, Plus, Save, Trash2 } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SEO } from "@/components/layout/SEO";
import type { ResourcePost, WebsiteContent } from "@shared/website-content";

type Status = "idle" | "loading" | "saving" | "error" | "saved";
type AdminView = "case-studies" | "resources" | "meetings";
type CaseStudyContent = WebsiteContent["caseStudies"][number];
type CaseMetric = CaseStudyContent["metrics"][number];
type BodySection = ResourcePost["body"][number];
type MeetingContent = WebsiteContent["meetings"][number];

const emptyMetric: CaseMetric = { value: "", label: "" };
const streamOptions: CaseStudyContent["stream"][] = ["hub", "build", "ai", "product"];

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

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function linesToList(value: string) {
  return value
    .split("\n")
    .map((item) => item.trim())
    .filter(Boolean);
}

function listToLines(value: string[]) {
  return value.join("\n");
}

function csvToList(value: string) {
  return value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function listToCsv(value: string[]) {
  return value.join(", ");
}

function makeId(prefix: string) {
  return `${prefix}-${Date.now().toString(36)}`;
}

function newCaseStudy(): CaseStudyContent {
  const id = makeId("case-study");
  return {
    id,
    stream: "hub",
    tag: "CRM Architecture",
    client: "New Client",
    logo: {
      text: "New Client",
      src: "",
      website: "",
      surface: "light",
    },
    title: "New case study",
    status: null,
    summary: "Short summary for the case study cards and resource feature.",
    metrics: [{ ...emptyMetric }],
    facts: {
      industry: "",
      region: "",
      timeline: "",
      services: [],
      stack: ["HubSpot"],
    },
    champion: {
      label: "",
      detail: "",
    },
    problemBullets: [""],
    solutionBullets: [""],
    challenge: "",
    approach: [""],
    built: [""],
    outcome: "",
    quote: null,
  };
}

function newResourcePost(): ResourcePost {
  const id = makeId("resource");
  return {
    id,
    title: "New resource post",
    slug: id,
    date: new Date().toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }),
    readTime: "5 min read",
    category: "Architecture",
    excerpt: "Short teaser used on resource listings.",
    body: [{ heading: "", body: "" }],
  };
}

function newMeetingProfile(): MeetingContent {
  const slug = makeId("meeting");
  return {
    slug,
    active: true,
    name: "New meeting profile",
    roleLine: "Role or focus area",
    image: "",
    meetingUrl: "",
    embedUrl: "",
    duration: "45 minutes",
    location: "Google Meet",
    timezoneNote: "Automatically detects your timezone",
    bullets: ["What the call should cover"],
    summary: "Short summary for this meeting profile.",
    smallNote: "Short reassurance note shown below the booking button.",
    accent: "rgba(0, 196, 204, 0.7)",
  };
}

export function ContentAdmin() {
  const [authenticated, setAuthenticated] = useState(false);
  const [email, setEmail] = useState("jarrud@muloo.co");
  const [password, setPassword] = useState("");
  const [content, setContent] = useState<WebsiteContent | null>(null);
  const [view, setView] = useState<AdminView>("case-studies");
  const [selectedCaseStudyId, setSelectedCaseStudyId] = useState("");
  const [selectedResourceId, setSelectedResourceId] = useState("");
  const [selectedMeetingSlug, setSelectedMeetingSlug] = useState("");
  const [status, setStatus] = useState<Status>("loading");
  const [message, setMessage] = useState("");

  const selectedCaseStudy = content?.caseStudies.find((study) => study.id === selectedCaseStudyId);
  const selectedResource = content?.resourcePosts.find((post) => post.id === selectedResourceId);
  const selectedMeeting = content?.meetings.find((meeting) => meeting.slug === selectedMeetingSlug);

  const loadContent = async () => {
    const loaded = await requestJson<WebsiteContent>("/api/website-content");
    setContent(loaded);
    setSelectedCaseStudyId((current) =>
      loaded.caseStudies.some((study) => study.id === current) ? current : loaded.caseStudies[0]?.id ?? "",
    );
    setSelectedResourceId((current) =>
      loaded.resourcePosts.some((post) => post.id === current) ? current : loaded.resourcePosts[0]?.id ?? "",
    );
    setSelectedMeetingSlug((current) =>
      loaded.meetings.some((meeting) => meeting.slug === current) ? current : loaded.meetings[0]?.slug ?? "",
    );
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

  const logout = async () => {
    await requestJson("/api/admin/logout", { method: "POST" });
    setAuthenticated(false);
    setContent(null);
    setPassword("");
  };

  const save = async () => {
    if (!content) return;

    setStatus("saving");
    setMessage("");

    try {
      const saved = await requestJson<WebsiteContent>("/api/admin/website-content", {
        method: "PUT",
        body: JSON.stringify(content),
      });

      setContent(saved);
      setStatus("saved");
      setMessage("Saved. Public pages now use this content.");
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Save failed");
    }
  };

  const updateCaseStudy = (id: string, update: (study: CaseStudyContent) => CaseStudyContent) => {
    setContent((current) =>
      current
        ? {
            ...current,
            caseStudies: current.caseStudies.map((study) => (study.id === id ? update(study) : study)),
          }
        : current,
    );
  };

  const updateResource = (id: string, update: (post: ResourcePost) => ResourcePost) => {
    setContent((current) =>
      current
        ? {
            ...current,
            resourcePosts: current.resourcePosts.map((post) => (post.id === id ? update(post) : post)),
          }
        : current,
    );
  };

  const updateMeeting = (slug: string, update: (meeting: MeetingContent) => MeetingContent) => {
    setContent((current) =>
      current
        ? {
            ...current,
            meetings: current.meetings.map((meeting) => (meeting.slug === slug ? update(meeting) : meeting)),
          }
        : current,
    );
  };

  const addCaseStudy = () => {
    const study = newCaseStudy();
    setContent((current) => (current ? { ...current, caseStudies: [...current.caseStudies, study] } : current));
    setSelectedCaseStudyId(study.id);
    setView("case-studies");
  };

  const addResourcePost = () => {
    const post = newResourcePost();
    setContent((current) => (current ? { ...current, resourcePosts: [...current.resourcePosts, post] } : current));
    setSelectedResourceId(post.id);
    setView("resources");
  };

  const addMeetingProfile = () => {
    const meeting = newMeetingProfile();
    setContent((current) => (current ? { ...current, meetings: [...current.meetings, meeting] } : current));
    setSelectedMeetingSlug(meeting.slug);
    setView("meetings");
  };

  const deleteCaseStudy = (id: string) => {
    if (!content || !window.confirm("Delete this case study?")) return;
    const next = content.caseStudies.filter((study) => study.id !== id);
    setContent({ ...content, caseStudies: next });
    setSelectedCaseStudyId(next[0]?.id ?? "");
  };

  const deleteResourcePost = (id: string) => {
    if (!content || !window.confirm("Delete this resource post?")) return;
    const next = content.resourcePosts.filter((post) => post.id !== id);
    setContent({ ...content, resourcePosts: next });
    setSelectedResourceId(next[0]?.id ?? "");
  };

  const deleteMeetingProfile = (slug: string) => {
    if (!content || !window.confirm("Delete this meeting profile?")) return;
    const next = content.meetings.filter((meeting) => meeting.slug !== slug);
    setContent({ ...content, meetings: next });
    setSelectedMeetingSlug(next[0]?.slug ?? "");
  };

  return (
    <div className="flex flex-col">
      <SEO title="Content Admin | Muloo" description="Muloo content admin." robots="noindex,nofollow" />

      <Section className="pt-20 pb-10 md:pt-28">
        <span className="text-sm font-mono text-gradient-muloo uppercase tracking-widest">// Admin</span>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mt-4 mb-5">Content editor.</h1>
        <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
          Edit case studies, resources, and meeting profiles without touching JSON.
        </p>
      </Section>

      <Section className="py-10 md:py-12">
        {!authenticated ? (
          <form onSubmit={login} className="max-w-md rounded-2xl border border-white/10 bg-white/[0.02] p-6">
            <Field label="Admin email" htmlFor="admin-email">
              <Input
                id="admin-email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                autoComplete="username"
                required
              />
            </Field>
            <Field label="Admin password" htmlFor="admin-password">
              <Input
                id="admin-password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                autoComplete="current-password"
              />
            </Field>
            <Button type="submit" disabled={status === "loading"} className="bg-gradient-muloo border-none text-white">
              {status === "loading" ? "Signing in..." : "Sign in"}
            </Button>
            {message && <p className="mt-4 text-sm text-stream-product">{message}</p>}
          </form>
        ) : (
          <div className="space-y-6">
            <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
              <div>
                <h2 className="text-2xl font-bold text-white">Editable content</h2>
                <p className="text-sm text-muted-foreground mt-1">Choose a module, edit the fields, then save.</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button variant="outline" onClick={logout}>
                  <LogOut className="h-4 w-4" />
                  Logout
                </Button>
                <Button onClick={save} disabled={status === "saving" || !content} className="bg-gradient-muloo border-none text-white">
                  <Save className="h-4 w-4" />
                  {status === "saving" ? "Saving..." : "Save content"}
                </Button>
              </div>
            </div>

            {message && (
              <div className={status === "error" ? "text-stream-product" : "text-brand-teal"}>
                {message}
              </div>
            )}

            <div className="flex flex-wrap gap-3">
              <ModuleButton active={view === "case-studies"} onClick={() => setView("case-studies")}>
                <BriefcaseBusiness className="h-4 w-4" />
                Case studies
              </ModuleButton>
              <ModuleButton active={view === "resources"} onClick={() => setView("resources")}>
                <FileText className="h-4 w-4" />
                Resources / blogs
              </ModuleButton>
              <ModuleButton active={view === "meetings"} onClick={() => setView("meetings")}>
                <CalendarDays className="h-4 w-4" />
                Meetings
              </ModuleButton>
            </div>

            {content && view === "case-studies" && (
              <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
                <ContentList
                  title="Case studies"
                  actionLabel="New case study"
                  onAdd={addCaseStudy}
                  items={content.caseStudies.map((study) => ({
                    id: study.id,
                    title: study.client || study.title,
                    meta: study.tag,
                  }))}
                  selectedId={selectedCaseStudyId}
                  onSelect={setSelectedCaseStudyId}
                />
                {selectedCaseStudy ? (
                  <CaseStudyEditor
                    study={selectedCaseStudy}
                    onChange={(next) => {
                      updateCaseStudy(selectedCaseStudy.id, () => next);
                      setSelectedCaseStudyId(next.id);
                    }}
                    onDelete={() => deleteCaseStudy(selectedCaseStudy.id)}
                  />
                ) : (
                  <EmptyState label="Create a case study to start editing." />
                )}
              </div>
            )}

            {content && view === "meetings" && (
              <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
                <ContentList
                  title="Meetings"
                  actionLabel="New meeting"
                  onAdd={addMeetingProfile}
                  items={content.meetings.map((meeting) => ({
                    id: meeting.slug,
                    title: meeting.name,
                    meta: meeting.active ? "Active" : "Hidden",
                  }))}
                  selectedId={selectedMeetingSlug}
                  onSelect={setSelectedMeetingSlug}
                />
                {selectedMeeting ? (
                  <MeetingEditor
                    meeting={selectedMeeting}
                    onChange={(next) => {
                      updateMeeting(selectedMeeting.slug, () => next);
                      setSelectedMeetingSlug(next.slug);
                    }}
                    onDelete={() => deleteMeetingProfile(selectedMeeting.slug)}
                  />
                ) : (
                  <EmptyState label="Create a meeting profile to start editing." />
                )}
              </div>
            )}

            {content && view === "resources" && (
              <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
                <ContentList
                  title="Resources"
                  actionLabel="New blog"
                  onAdd={addResourcePost}
                  items={content.resourcePosts.map((post) => ({
                    id: post.id,
                    title: post.title,
                    meta: post.category,
                  }))}
                  selectedId={selectedResourceId}
                  onSelect={setSelectedResourceId}
                />
                {selectedResource ? (
                  <ResourceEditor
                    post={selectedResource}
                    onChange={(next) => {
                      updateResource(selectedResource.id, () => next);
                      setSelectedResourceId(next.id);
                    }}
                    onDelete={() => deleteResourcePost(selectedResource.id)}
                  />
                ) : (
                  <EmptyState label="Create a resource post to start editing." />
                )}
              </div>
            )}
          </div>
        )}
      </Section>
    </div>
  );
}

function ModuleButton({ active, children, onClick }: { active: boolean; children: ReactNode; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={
        active
          ? "inline-flex items-center gap-2 rounded-lg border border-brand-teal/50 bg-brand-teal/10 px-4 py-2 text-sm font-semibold text-brand-teal"
          : "inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.02] px-4 py-2 text-sm font-semibold text-muted-foreground hover:text-white"
      }
    >
      {children}
    </button>
  );
}

function ContentList({
  title,
  actionLabel,
  items,
  selectedId,
  onAdd,
  onSelect,
}: {
  title: string;
  actionLabel: string;
  items: { id: string; title: string; meta: string }[];
  selectedId: string;
  onAdd: () => void;
  onSelect: (id: string) => void;
}) {
  return (
    <aside className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
      <div className="flex items-center justify-between gap-3 mb-4">
        <h3 className="font-bold text-white">{title}</h3>
        <Button size="sm" onClick={onAdd} className="bg-white text-[#050A2D]">
          <Plus className="h-4 w-4" />
          {actionLabel}
        </Button>
      </div>
      <div className="space-y-2">
        {items.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => onSelect(item.id)}
            className={
              selectedId === item.id
                ? "w-full rounded-lg border border-brand-teal/40 bg-brand-teal/10 p-3 text-left"
                : "w-full rounded-lg border border-white/10 bg-[#090E33] p-3 text-left hover:border-white/25"
            }
          >
            <span className="block truncate text-sm font-semibold text-white">{item.title}</span>
            <span className="mt-1 block truncate text-xs text-muted-foreground">{item.meta}</span>
          </button>
        ))}
      </div>
    </aside>
  );
}

function CaseStudyEditor({
  study,
  onChange,
  onDelete,
}: {
  study: CaseStudyContent;
  onChange: (study: CaseStudyContent) => void;
  onDelete: () => void;
}) {
  const set = (patch: Partial<CaseStudyContent>) => onChange({ ...study, ...patch });

  return (
    <div className="space-y-6">
      <EditorHeader title={study.client || "Case study"} meta={study.id} onDelete={onDelete} />

      <Panel title="Template and header">
        <div className="grid gap-4 md:grid-cols-2">
          <Field label="Client name">
            <Input value={study.client} onChange={(event) => set({ client: event.target.value })} />
          </Field>
          <Field label="URL slug / ID">
            <Input value={study.id} onChange={(event) => set({ id: slugify(event.target.value) })} />
          </Field>
          <Field label="Title">
            <Input value={study.title} onChange={(event) => set({ title: event.target.value })} />
          </Field>
          <Field label="Category tag">
            <Input value={study.tag} onChange={(event) => set({ tag: event.target.value })} />
          </Field>
          <Field label="Stream">
            <Select value={study.stream} onValueChange={(value) => set({ stream: value as CaseStudyContent["stream"] })}>
              <SelectTrigger className="bg-[#090E33] border-white/10">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-[#0A1236] border-white/15 text-white">
                {streamOptions.map((stream) => (
                  <SelectItem key={stream} value={stream}>
                    {stream}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </Field>
          <Field label="Status label">
            <Input value={study.status ?? ""} onChange={(event) => set({ status: event.target.value || null })} />
          </Field>
        </div>
        <Field label="Card and page summary">
          <Textarea value={study.summary} onChange={(event) => set({ summary: event.target.value })} className="min-h-28" />
        </Field>
      </Panel>

      <Panel title="Logo">
        <div className="grid gap-4 md:grid-cols-2">
          <Field label="Logo text fallback">
            <Input value={study.logo.text} onChange={(event) => set({ logo: { ...study.logo, text: event.target.value } })} />
          </Field>
          <Field label="Logo image URL">
            <Input value={study.logo.src ?? ""} onChange={(event) => set({ logo: { ...study.logo, src: event.target.value } })} />
          </Field>
          <Field label="Client website URL">
            <Input value={study.logo.website ?? ""} onChange={(event) => set({ logo: { ...study.logo, website: event.target.value } })} />
          </Field>
          <Field label="Logo background">
            <Select
              value={study.logo.surface ?? "light"}
              onValueChange={(value) => set({ logo: { ...study.logo, surface: value as "light" | "dark" } })}
            >
              <SelectTrigger className="bg-[#090E33] border-white/10">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-[#0A1236] border-white/15 text-white">
                <SelectItem value="light">Light logo box</SelectItem>
                <SelectItem value="dark">Dark logo box</SelectItem>
              </SelectContent>
            </Select>
          </Field>
        </div>
      </Panel>

      <Panel title="Facts and champions">
        <div className="grid gap-4 md:grid-cols-3">
          <Field label="Industry">
            <Input value={study.facts.industry} onChange={(event) => set({ facts: { ...study.facts, industry: event.target.value } })} />
          </Field>
          <Field label="Region">
            <Input value={study.facts.region} onChange={(event) => set({ facts: { ...study.facts, region: event.target.value } })} />
          </Field>
          <Field label="Timeline">
            <Input value={study.facts.timeline} onChange={(event) => set({ facts: { ...study.facts, timeline: event.target.value } })} />
          </Field>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <Field label="Services">
            <Input value={listToCsv(study.facts.services)} onChange={(event) => set({ facts: { ...study.facts, services: csvToList(event.target.value) } })} />
          </Field>
          <Field label="Stack">
            <Input value={listToCsv(study.facts.stack)} onChange={(event) => set({ facts: { ...study.facts, stack: csvToList(event.target.value) } })} />
          </Field>
          <Field label="Champion label">
            <Input value={study.champion.label} onChange={(event) => set({ champion: { ...study.champion, label: event.target.value } })} />
          </Field>
          <Field label="Champion detail">
            <Textarea value={study.champion.detail} onChange={(event) => set({ champion: { ...study.champion, detail: event.target.value } })} className="min-h-24" />
          </Field>
        </div>
      </Panel>

      <Panel title="Metrics">
        <div className="space-y-3">
          {study.metrics.map((metric, index) => (
            <div key={index} className="grid gap-3 md:grid-cols-[1fr_2fr_auto]">
              <Input
                value={metric.value}
                placeholder="Value"
                onChange={(event) => {
                  const metrics = [...study.metrics];
                  metrics[index] = { ...metric, value: event.target.value };
                  set({ metrics });
                }}
              />
              <Input
                value={metric.label}
                placeholder="Label"
                onChange={(event) => {
                  const metrics = [...study.metrics];
                  metrics[index] = { ...metric, label: event.target.value };
                  set({ metrics });
                }}
              />
              <IconButton label="Remove metric" onClick={() => set({ metrics: study.metrics.filter((_, itemIndex) => itemIndex !== index) })} />
            </div>
          ))}
          <Button variant="outline" onClick={() => set({ metrics: [...study.metrics, { ...emptyMetric }] })}>
            <Plus className="h-4 w-4" />
            Add metric
          </Button>
        </div>
      </Panel>

      <Panel title="Problem, solution and story">
        <div className="grid gap-4 md:grid-cols-2">
          <Field label="Problem bullets">
            <Textarea value={listToLines(study.problemBullets)} onChange={(event) => set({ problemBullets: linesToList(event.target.value) })} className="min-h-36" />
          </Field>
          <Field label="Solution bullets">
            <Textarea value={listToLines(study.solutionBullets)} onChange={(event) => set({ solutionBullets: linesToList(event.target.value) })} className="min-h-36" />
          </Field>
        </div>
        <Field label="Challenge">
          <Textarea value={study.challenge} onChange={(event) => set({ challenge: event.target.value })} className="min-h-32" />
        </Field>
        <div className="grid gap-4 md:grid-cols-2">
          <Field label="Approach">
            <Textarea value={listToLines(study.approach)} onChange={(event) => set({ approach: linesToList(event.target.value) })} className="min-h-40" />
          </Field>
          <Field label="Built">
            <Textarea value={listToLines(study.built)} onChange={(event) => set({ built: linesToList(event.target.value) })} className="min-h-40" />
          </Field>
        </div>
        <Field label="Outcome">
          <Textarea value={study.outcome} onChange={(event) => set({ outcome: event.target.value })} className="min-h-32" />
        </Field>
      </Panel>

      <Panel title="Quote">
        <div className="grid gap-4 md:grid-cols-2">
          <Field label="Quote text">
            <Textarea
              value={study.quote?.text ?? ""}
              onChange={(event) =>
                set({
                  quote: {
                    text: event.target.value,
                    name: study.quote?.name ?? "",
                    role: study.quote?.role ?? "",
                    company: study.quote?.company ?? study.client,
                  },
                })
              }
              className="min-h-28"
            />
          </Field>
          <div className="space-y-4">
            <Field label="Name">
              <Input value={study.quote?.name ?? ""} onChange={(event) => set({ quote: { text: study.quote?.text ?? "", name: event.target.value, role: study.quote?.role ?? "", company: study.quote?.company ?? study.client } })} />
            </Field>
            <Field label="Role">
              <Input value={study.quote?.role ?? ""} onChange={(event) => set({ quote: { text: study.quote?.text ?? "", name: study.quote?.name ?? "", role: event.target.value, company: study.quote?.company ?? study.client } })} />
            </Field>
            <Field label="Company">
              <Input value={study.quote?.company ?? ""} onChange={(event) => set({ quote: { text: study.quote?.text ?? "", name: study.quote?.name ?? "", role: study.quote?.role ?? "", company: event.target.value } })} />
            </Field>
          </div>
        </div>
        <Button variant="outline" onClick={() => set({ quote: null })}>Clear quote</Button>
      </Panel>
    </div>
  );
}

function MeetingEditor({
  meeting,
  onChange,
  onDelete,
}: {
  meeting: MeetingContent;
  onChange: (meeting: MeetingContent) => void;
  onDelete: () => void;
}) {
  const set = (patch: Partial<MeetingContent>) => onChange({ ...meeting, ...patch });

  return (
    <div className="space-y-6">
      <EditorHeader title={meeting.name || "Meeting profile"} meta={meeting.slug} onDelete={onDelete} />

      <Panel title="Profile">
        <div className="grid gap-4 md:grid-cols-2">
          <Field label="Name">
            <Input value={meeting.name} onChange={(event) => set({ name: event.target.value })} />
          </Field>
          <Field label="Slug">
            <Input value={meeting.slug} onChange={(event) => set({ slug: slugify(event.target.value) })} />
          </Field>
          <Field label="Status">
            <Select value={meeting.active ? "active" : "hidden"} onValueChange={(value) => set({ active: value === "active" })}>
              <SelectTrigger className="bg-[#090E33] border-white/10">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-[#0A1236] border-white/15 text-white">
                <SelectItem value="active">Active on site</SelectItem>
                <SelectItem value="hidden">Hidden from site</SelectItem>
              </SelectContent>
            </Select>
          </Field>
          <Field label="Image key or URL">
            <Input value={meeting.image ?? ""} onChange={(event) => set({ image: event.target.value })} />
          </Field>
          <Field label="Role line">
            <Input value={meeting.roleLine} onChange={(event) => set({ roleLine: event.target.value })} />
          </Field>
          <Field label="Accent CSS colour">
            <Input value={meeting.accent ?? ""} onChange={(event) => set({ accent: event.target.value })} />
          </Field>
        </div>
        <Field label="Summary">
          <Textarea value={meeting.summary} onChange={(event) => set({ summary: event.target.value })} className="min-h-28" />
        </Field>
      </Panel>

      <Panel title="Booking details">
        <div className="grid gap-4 md:grid-cols-2">
          <Field label="Meeting URL">
            <Input value={meeting.meetingUrl} onChange={(event) => set({ meetingUrl: event.target.value })} />
          </Field>
          <Field label="Embed URL">
            <Input value={meeting.embedUrl} onChange={(event) => set({ embedUrl: event.target.value })} />
          </Field>
          <Field label="Duration">
            <Input value={meeting.duration} onChange={(event) => set({ duration: event.target.value })} />
          </Field>
          <Field label="Location">
            <Input value={meeting.location} onChange={(event) => set({ location: event.target.value })} />
          </Field>
          <Field label="Timezone note">
            <Input value={meeting.timezoneNote} onChange={(event) => set({ timezoneNote: event.target.value })} />
          </Field>
        </div>
        <Field label="What we'll cover">
          <Textarea value={listToLines(meeting.bullets)} onChange={(event) => set({ bullets: linesToList(event.target.value) })} className="min-h-36" />
        </Field>
        <Field label="Small note">
          <Input value={meeting.smallNote} onChange={(event) => set({ smallNote: event.target.value })} />
        </Field>
      </Panel>
    </div>
  );
}

function ResourceEditor({
  post,
  onChange,
  onDelete,
}: {
  post: ResourcePost;
  onChange: (post: ResourcePost) => void;
  onDelete: () => void;
}) {
  const set = (patch: Partial<ResourcePost>) => onChange({ ...post, ...patch });

  const updateBodySection = (index: number, patch: Partial<BodySection>) => {
    const body = [...post.body];
    body[index] = { ...body[index], ...patch };
    set({ body });
  };

  return (
    <div className="space-y-6">
      <EditorHeader title={post.title || "Resource post"} meta={post.slug} onDelete={onDelete} />

      <Panel title="Header">
        <div className="grid gap-4 md:grid-cols-2">
          <Field label="Title">
            <Input
              value={post.title}
              onChange={(event) => {
                const title = event.target.value;
                set({ title, slug: post.slug || slugify(title), id: post.id || slugify(title) });
              }}
            />
          </Field>
          <Field label="Slug">
            <Input value={post.slug} onChange={(event) => set({ slug: slugify(event.target.value) })} />
          </Field>
          <Field label="ID">
            <Input value={post.id} onChange={(event) => set({ id: slugify(event.target.value) })} />
          </Field>
          <Field label="Category">
            <Input value={post.category} onChange={(event) => set({ category: event.target.value })} />
          </Field>
          <Field label="Date">
            <Input value={post.date} onChange={(event) => set({ date: event.target.value })} />
          </Field>
          <Field label="Read time">
            <Input value={post.readTime} onChange={(event) => set({ readTime: event.target.value })} />
          </Field>
        </div>
        <Field label="Excerpt">
          <Textarea value={post.excerpt} onChange={(event) => set({ excerpt: event.target.value })} className="min-h-28" />
        </Field>
      </Panel>

      <Panel title="Content sections">
        <div className="space-y-5">
          {post.body.map((section, index) => (
            <div key={index} className="rounded-xl border border-white/10 bg-[#090E33] p-4">
              <div className="mb-4 flex items-center justify-between gap-3">
                <h4 className="font-semibold text-white">Section {index + 1}</h4>
                <IconButton label="Remove section" onClick={() => set({ body: post.body.filter((_, itemIndex) => itemIndex !== index) })} />
              </div>
              <Field label="Heading">
                <Input value={section.heading ?? ""} onChange={(event) => updateBodySection(index, { heading: event.target.value })} />
              </Field>
              <Field label="Body">
                <Textarea value={section.body} onChange={(event) => updateBodySection(index, { body: event.target.value })} className="min-h-40" />
              </Field>
            </div>
          ))}
          <Button variant="outline" onClick={() => set({ body: [...post.body, { heading: "", body: "" }] })}>
            <Plus className="h-4 w-4" />
            Add content section
          </Button>
        </div>
      </Panel>
    </div>
  );
}

function EditorHeader({ title, meta, onDelete }: { title: string; meta: string; onDelete: () => void }) {
  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/[0.02] p-5 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h3 className="text-2xl font-bold text-white">{title}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{meta}</p>
      </div>
      <Button variant="destructive" onClick={onDelete}>
        <Trash2 className="h-4 w-4" />
        Delete
      </Button>
    </div>
  );
}

function Panel({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="space-y-4 rounded-2xl border border-white/10 bg-white/[0.02] p-5">
      <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-brand-teal">{title}</h3>
      {children}
    </section>
  );
}

function Field({ label, htmlFor, children }: { label: string; htmlFor?: string; children: ReactNode }) {
  return (
    <div className="block space-y-2">
      {htmlFor ? (
        <label className="block text-sm font-semibold text-white" htmlFor={htmlFor}>
          {label}
        </label>
      ) : (
        <span className="block text-sm font-semibold text-white">{label}</span>
      )}
      {children}
    </div>
  );
}

function IconButton({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <Button type="button" variant="outline" size="icon" onClick={onClick} aria-label={label} title={label}>
      <Trash2 className="h-4 w-4" />
    </Button>
  );
}

function EmptyState({ label }: { label: string }) {
  return (
    <div className="rounded-2xl border border-dashed border-white/15 bg-white/[0.02] p-8 text-center text-muted-foreground">
      {label}
    </div>
  );
}
