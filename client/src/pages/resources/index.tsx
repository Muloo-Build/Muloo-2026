import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, BookOpen, FileCode2, Settings, Smartphone } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SEO } from "@/components/layout/SEO";
import { defaultResourcePosts } from "@shared/website-content";
import { useWebsiteContent } from "@/hooks/use-website-content";
import { caseStudies } from "@/lib/content";

const siteUrl = "https://www.wearemuloo.com";

export function ResourcesIndex() {
  const { data } = useWebsiteContent();
  const posts = data?.resourcePosts ?? defaultResourcePosts;
  const featuredCaseStudy = (data?.caseStudies ?? caseStudies)[0];
  const categories = [
    { title: "HubSpot Foundations", icon: Settings, desc: "Setup guides and best practices." },
    { title: "Integration Patterns", icon: FileCode2, desc: "Connecting systems securely." },
    { title: "CRM Architecture", icon: BookOpen, desc: "Data modeling and hygiene." },
    { title: "Product Notes", icon: Smartphone, desc: "Updates on our apps." },
  ];

  return (
    <div className="flex flex-col">
      <SEO
        title="Resources | Muloo"
        description="Muloo resources, case studies, and practical insights on HubSpot architecture, CRM rescue, integrations, AI automation, and technical revenue systems."
        canonicalUrl={`${siteUrl}/resources`}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Muloo Resources",
          url: `${siteUrl}/resources`,
          description:
            "Resources and case studies from Muloo covering HubSpot architecture, CRM rescue, integrations, AI automation, and technical revenue systems.",
          mainEntity: posts.slice(0, 3).map((post) => ({
            "@type": "Article",
            headline: post.title,
            url: `${siteUrl}/blog/${post.slug}`,
            description: post.excerpt,
          })),
        }}
      />
      <Section className="pt-20 pb-16 md:pt-28 md:pb-20 bg-hero-gradient">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-8">Technical Insights.</h1>
        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
          No fluff. Just practical guides on engineering, design, and growth operations.
        </p>
      </Section>

      <Section className="bg-section-soft py-12 border-b border-white/5">
         <div className="grid md:grid-cols-4 gap-4">
            {categories.map((cat, i) => (
               <div key={i} className="flex items-center gap-3 p-4 rounded-lg bg-card/50 border border-white/5 hover:bg-white/5 cursor-pointer transition-colors">
                  <cat.icon className="h-5 w-5 text-brand-teal" />
                  <div>
                     <div className="font-bold text-sm">{cat.title}</div>
                     <div className="text-xs text-muted-foreground">{cat.desc}</div>
                  </div>
               </div>
            ))}
         </div>
      </Section>

      <Section className="py-20">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Recent Articles */}
          <div className="space-y-8">
             <h2 className="text-2xl font-bold mb-8">Latest Articles</h2>
             {posts.slice(0, 3).map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`}>
                   <div className="group cursor-pointer block">
                      <div className="flex items-center gap-3 mb-2 text-xs font-mono text-brand-teal">
                         <span>{post.date}</span>
                         <span className="w-1 h-1 rounded-full bg-brand-teal/50" />
                         <span>{post.category}</span>
                      </div>
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-brand-teal transition-colors">
                         {post.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                         {post.excerpt}
                      </p>
                      <div className="flex items-center text-sm font-bold text-white group-hover:translate-x-2 transition-transform">
                         Read Article <ArrowRight className="ml-2 h-4 w-4" />
                      </div>
                   </div>
                </Link>
             ))}
          </div>

          {/* Featured Case Study */}
          <div>
             <h2 className="text-2xl font-bold mb-8">Featured Work</h2>
             <div className="bg-card rounded-2xl border border-white/10 overflow-hidden group">
                <div className="aspect-video bg-gradient-to-br from-brand-navy to-brand-teal/20 p-8 flex items-center justify-center">
                   <div className="text-4xl font-extrabold text-white/10">CASE STUDY</div>
                </div>
                <div className="p-8">
                   <Badge className="mb-4">{featuredCaseStudy.tag}</Badge>
                   <h3 className="text-3xl font-bold mb-4">{featuredCaseStudy.title}</h3>
                   <p className="text-muted-foreground mb-8">
                      {featuredCaseStudy.summary}
                   </p>
                   <Link href={`/case-studies/${featuredCaseStudy.id}`}>
                      <Button variant="outline" className="w-full">Read Case Study</Button>
                   </Link>
                </div>
             </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
