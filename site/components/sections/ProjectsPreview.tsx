import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import type { StockImage } from "@/lib/droneStockImages";

const projectMeta = [
  {
    id: "roof-inspection",
    title: "Roof condition inspection",
    service: "Drone inspection",
    location: "London",
    description: "A rapid roof check with clear imagery to support maintenance decisions.",
  },
  {
    id: "building-facade",
    title: "Building facade inspection",
    service: "Drone inspection",
    location: "Hertfordshire",
    description: "High-level external inspection without scaffold-first access.",
  },
  {
    id: "solar-thermal",
    title: "Solar thermal assessment",
    service: "Thermal drone imaging",
    location: "Buckinghamshire",
    description: "Thermal imagery used to flag anomaly areas for targeted follow-up.",
  },
];

interface ProjectsPreviewProps {
  images: StockImage[];
}

const ProjectsPreview = ({ images }: ProjectsPreviewProps) => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="mb-2 inline-block text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Our Work
          </span>
          <h2 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl">
            Recent Drone Projects
          </h2>
          <p className="text-muted-foreground">
            Examples of recent inspection and survey work across residential and commercial sites.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projectMeta.map((project, index) => {
            const img = images[index];
            return (
              <div
                key={project.id}
                className="group overflow-hidden rounded-lg bg-card animate-fade-in opacity-0"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Link href="/contact" className="block aspect-[4/3] overflow-hidden">
                  <img
                    src={img?.src ?? "/images/services/drone-survey.jpg"}
                    alt={img?.alt ?? project.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </Link>
                <div className="p-4">
                  <h3 className="font-display font-semibold text-foreground">
                    <Link href="/contact" className="hover:text-primary">
                      {project.title}
                    </Link>
                  </h3>
                  <p className="mt-1 text-xs text-muted-foreground line-clamp-1">
                    {project.service} · {project.location}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{project.description}</p>
                  <Link
                    href="/contact"
                    className="mt-3 inline-flex items-center text-xs font-medium text-primary transition-colors hover:underline"
                  >
                    Get a quote
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 text-center">
          <Button asChild>
            <Link href="/contact">Get a quote</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPreview;
