import Link from "next/link";
import { blogPosts } from "@/lib/blogData";
import { getBlogListStockImages, firstStockImage } from "@/lib/droneStockImages";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";
import SchemaMarkup from "@/components/seo/SchemaMarkup";
import type { Metadata } from "next";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata: Metadata = {
  title: "Blog | DroneGeo",
  description: "DroneGeo insights on drone inspections, thermal imaging and aerial property capture.",
  alternates: { canonical: "https://dronegeo.co.uk/blog" },
};

export default async function BlogPage() {
  const cardImages = await getBlogListStockImages(blogPosts.length);
  const hero = await firstStockImage("drone aerial photography blog uk", 1);
  return (
    <>
      <SchemaMarkup type="BreadcrumbList" data={{ breadcrumbs: [{ name: "Home", url: "/" }, { name: "Blog", url: "/blog" }] }} />
      <section className="relative overflow-hidden bg-primary py-16 md:py-24">
        <div className="absolute inset-0">
          {hero ? (
            <img src={hero.src} alt="" className="h-full w-full object-cover opacity-25" aria-hidden />
          ) : null}
          <div className="absolute inset-0 bg-primary/75" />
        </div>
        <div className="container relative">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 font-display text-4xl font-bold text-primary-foreground md:text-5xl">Our Blog</h1>
            <p className="text-lg text-primary-foreground/80">Survey insights and expert advice for planning and development.</p>
          </div>
        </div>
      </section>
      <section className="section-padding">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <Card className="group overflow-hidden transition-all hover:shadow-lg">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={cardImages[index]?.src ?? "/images/services/drone-survey.jpg"}
                      alt={cardImages[index]?.alt ?? post.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">{post.category}</Badge>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        {new Date(post.date).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}
                      </span>
                    </div>
                    <CardTitle className="font-display text-lg group-hover:text-primary">{post.title}</CardTitle>
                    <CardDescription>{post.excerpt}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
