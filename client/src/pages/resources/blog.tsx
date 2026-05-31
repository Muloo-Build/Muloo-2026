import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { SEO } from "@/components/layout/SEO";
import { defaultResourcePosts } from "@shared/website-content";
import { useWebsiteContent } from "@/hooks/use-website-content";

export function Blog() {
  const { data } = useWebsiteContent();
  const posts = data?.resourcePosts ?? defaultResourcePosts;

  return (
    <div className="flex flex-col">
      <SEO
        title="Insights | Muloo"
        description="Muloo insights."
        robots="noindex,nofollow"
      />
      <Section className="pt-20 pb-16 md:pt-28 md:pb-20">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-8">Insights.</h1>
        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
          Thoughts on engineering, design, and growth from the Muloo team.
        </p>
      </Section>

      <Section className="bg-white/5 py-20">
        <div className="max-w-4xl mx-auto space-y-8">
          {posts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`}>
              <div className="group cursor-pointer border-b border-white/10 pb-8 hover:border-brand-teal/50 transition-colors">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3 font-mono">
                    <span>{post.date}</span>
                    <span>-</span>
                    <span>{post.readTime}</span>
                </div>
                <h2 className="text-3xl font-bold mb-4 group-hover:text-brand-teal transition-colors">{post.title}</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">{post.excerpt}</p>
                <div className="flex items-center text-brand-teal font-medium opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0">
                    Read article <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </div>
  );
}
