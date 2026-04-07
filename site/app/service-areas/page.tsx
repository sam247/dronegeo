import { ServiceAreasHub } from "engine";
import { locations } from "@/lib/data";
import { firstStockImage } from "@/lib/droneStockImages";
import type { Metadata } from "next";

export const dynamic = "force-static";
export const revalidate = false;

const PRIMARY_SERVICE_SLUG = "drone-surveys";
const CORE_AREA_IDS = new Set(["london", "hertfordshire", "bedfordshire", "buckinghamshire"]);

export const metadata: Metadata = {
  title: "Service Areas | DroneGeo",
  description:
    "DroneGeo service areas across Hertfordshire, London, Buckinghamshire and Bedfordshire.",
  alternates: { canonical: "https://dronegeo.co.uk/service-areas" },
};

export default async function ServiceAreasPage() {
  const hero = await firstStockImage("drone uk aerial survey regions", 1);
  const coreLocations = locations.filter((loc) => CORE_AREA_IDS.has(loc.id));
  return (
    <ServiceAreasHub
      primaryServiceSlug={PRIMARY_SERVICE_SLUG}
      locations={coreLocations}
      heroImageSrc={hero?.src}
      heroTitle="Drone Services Across Core Coverage Areas"
      heroSubtitle="Drone surveys, inspections, thermal imaging and aerial photography in Hertfordshire, London, Buckinghamshire and Bedfordshire."
      introTitle="Coverage by region"
      introBody="Explore our core coverage areas. Each link leads to local context and next steps for your project."
      browseMoreHref="/services"
      browseMoreLabel="Browse drone services"
    />
  );
}
