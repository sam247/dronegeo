import { ServiceAreasHub } from "engine";
import { locations } from "@/lib/data";
import type { Metadata } from "next";

export const dynamic = "force-static";
export const revalidate = false;

const PRIMARY_SERVICE_SLUG = "drone-surveys";

export const metadata: Metadata = {
  title: "Service Areas | DroneGeo",
  description:
    "DroneGeo service areas across Hertfordshire, London, Buckinghamshire and Bedfordshire.",
  alternates: { canonical: "https://dronegeo.co.uk/service-areas" },
};

export default function ServiceAreasPage() {
  return (
    <ServiceAreasHub
      primaryServiceSlug={PRIMARY_SERVICE_SLUG}
      locations={locations}
      heroTitle="Drone Services Across Core Coverage Areas"
      heroSubtitle="Drone surveys, inspections, thermal imaging and aerial photography in Hertfordshire, London, Buckinghamshire and Bedfordshire."
      introTitle="Coverage by region"
      introBody="Explore our core coverage areas. Each link leads to local context and next steps for your project."
      browseMoreHref="/services"
      browseMoreLabel="Browse drone services"
    />
  );
}
