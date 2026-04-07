import Link from "next/link";
import { CheckCircle, Users, Shield, CircleCheck } from "lucide-react";
import { services } from "@/lib/data";
import { verticalConfig } from "@/config";
import CTABanner from "@/components/sections/CTABanner";
import SchemaMarkup from "@/components/seo/SchemaMarkup";
import { getServiceUrl } from "engine";
import { getAboutPageStockImage, firstStockImage } from "@/lib/droneStockImages";
import type { Metadata } from "next";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata: Metadata = {
  title: "About Us | DroneGeo",
  description:
    "DroneGeo provides drone inspections, thermal imaging and aerial photography across London and the Home Counties.",
  alternates: { canonical: "https://dronegeo.co.uk/about" },
};

const servicePreview = services.slice(0, 6);

export default async function AboutPage() {
  const aboutImage = await getAboutPageStockImage();
  const heroBg = await firstStockImage("drone company aerial operations uk", 1);
  return (
    <>
      <SchemaMarkup
        type="BreadcrumbList"
        data={{ breadcrumbs: [{ name: "Home", url: "/" }, { name: "About Us", url: "/about" }] }}
      />
      <section className="relative overflow-hidden bg-primary py-16 md:py-24">
        <div className="absolute inset-0">
          {heroBg ? (
            <img src={heroBg.src} alt="" className="h-full w-full object-cover opacity-25" aria-hidden />
          ) : null}
          <div className="absolute inset-0 bg-primary/75" />
        </div>
        <div className="container relative">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 font-display text-4xl font-bold text-primary-foreground md:text-5xl">About DroneGeo</h1>
            <p className="text-lg text-primary-foreground/80">
              Topographical, measured building, utility and drone surveys for architects, developers and property owners. We focus on clear scope, reliable programmes and deliverables that drop into design and planning workflows.
            </p>
            <p className="mt-3 text-sm text-primary-foreground/70">Drone-first inspection and survey services.</p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-4 font-display text-3xl font-bold">Who we are</h2>
              <p className="mb-4 text-muted-foreground">
                DroneGeo helps clients inspect roofs, buildings and sites quickly using drone capture and clear reporting.
              </p>
              <p className="text-muted-foreground">
                <strong className="text-foreground">DroneGeo focuses on practical aerial inspections,</strong> giving property teams and contractors the visuals and data they need without slow access setups.
              </p>
            </div>
            <div className="aspect-[4/3] overflow-hidden rounded-lg bg-muted">
              <img src={aboutImage.src} alt={aboutImage.alt} className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary">
        <div className="container max-w-3xl">
          <h2 className="mb-4 font-display text-3xl font-bold">What we do</h2>
          <p className="mb-6 text-muted-foreground">
            Our survey services support planning, design and construction. Examples include:
          </p>
          <ul className="mb-6 grid gap-2 sm:grid-cols-2">
            {servicePreview.map((s) => (
              <li key={s.slug}>
                <Link href={getServiceUrl(s.slug)} className="text-sm text-primary hover:underline">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/services" className="text-sm font-medium text-primary hover:underline">
            View all services →
          </Link>
        </div>
      </section>

      <section className="section-padding">
        <div className="container max-w-3xl">
          <h2 className="mb-4 font-display text-3xl font-bold">How we work</h2>
          <ol className="list-decimal space-y-3 pl-5 text-muted-foreground">
            <li>
              <strong className="text-foreground">Scope and quote.</strong> We align on site constraints, outputs (CAD, PDF, point cloud, etc.) and programme before work starts.
            </li>
            <li>
              <strong className="text-foreground">Survey and capture.</strong> Field teams use GNSS, total stations, laser scanning and drones as appropriate, with quality checks on control and coverage.
            </li>
            <li>
              <strong className="text-foreground">Processing and issue.</strong> Data is processed, checked and issued in agreed formats with a concise report where required.
            </li>
          </ol>
        </div>
      </section>

      <section className="section-padding bg-secondary">
        <div className="container max-w-3xl">
          <h2 className="mb-4 font-display text-3xl font-bold">Where we operate</h2>
          <p className="text-muted-foreground">
            We work across London, the South East and the wider UK. Use our location pages for local context; contact us to confirm availability for your site.
          </p>
        </div>
      </section>

      <section className="section-padding bg-secondary">
        <div className="container">
          <h2 className="mb-12 text-center font-display text-3xl font-bold">What guides us</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: CheckCircle, title: "Reliability", desc: "Clear turnaround and deliverables" },
              { icon: Shield, title: "Honesty", desc: "Transparent pricing, no hidden costs" },
              { icon: Users, title: "Expertise", desc: "Qualified survey partners" },
              { icon: CircleCheck, title: "Quality", desc: "Planning-ready CAD and BIM outputs" },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <item.icon className="mx-auto mb-4 h-12 w-12 text-primary" />
                <h3 className="mb-2 font-display text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
