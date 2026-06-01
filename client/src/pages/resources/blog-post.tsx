import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Link, useRoute } from "wouter";
import { ArrowLeft } from "lucide-react";
import { SEO } from "@/components/layout/SEO";
import { defaultResourcePosts } from "@shared/website-content";
import { useWebsiteContent } from "@/hooks/use-website-content";
import NotFound from "@/pages/not-found";

const siteUrl = "https://www.wearemuloo.com";

export function BlogPost() {
  const [, params] = useRoute("/blog/:id");
  const id = params?.id;
  const { data } = useWebsiteContent();
  const posts = data?.resourcePosts ?? defaultResourcePosts;
  const post = posts.find((item) => item.slug === id || item.id === id);

  if (!post) return <NotFound />;

  return (
    <div className="flex flex-col">
      <SEO
        title={`${post.title} | Muloo`}
        description={post.excerpt}
        canonicalUrl={`${siteUrl}/blog/${post.slug}`}
        ogType="article"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.excerpt,
          url: `${siteUrl}/blog/${post.slug}`,
          datePublished: post.date,
          articleSection: post.category,
          author: { "@type": "Organization", name: "Muloo", url: siteUrl },
          publisher: { "@type": "Organization", name: "Muloo", url: siteUrl },
          mainEntityOfPage: `${siteUrl}/blog/${post.slug}`,
        }}
      />
       <Section className="pt-20 pb-10 md:pt-24 md:pb-12 max-w-3xl mx-auto">
        <Link href="/blog">
            <Button variant="ghost" className="mb-8 pl-0 hover:pl-2 transition-all text-muted-foreground hover:text-brand-teal">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Insights
            </Button>
        </Link>
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6 font-mono">
             <span>{post.date}</span>
             <span>-</span>
             <span>{post.readTime}</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight">{post.title}</h1>
        
        <div className="prose prose-invert prose-lg max-w-none">
            <p className="lead text-xl text-muted-foreground">
                {post.excerpt}
            </p>
            {post.body.map((section, index) => (
              <div key={`${section.heading ?? "section"}-${index}`}>
                {section.heading && <h3>{section.heading}</h3>}
                <p>{section.body}</p>
              </div>
            ))}
        </div>
      </Section>
    </div>
  );
}
