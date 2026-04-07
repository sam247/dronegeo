import { services, locations, relatedGuideLinksByService, serviceFaqsBySlug } from "@/lib/data";
import { getDroneGalleryImages, getHeroStockImage } from "@/lib/droneStockImages";
import { verticalConfig, partnerBaseUrl, partnerDrainSurveyPath } from "@/config";
import { ServiceDetailContent as EngineServiceDetailContent } from "engine";

interface ServiceDetailContentProps {
  service: (typeof services)[number];
}

export default async function ServiceDetailContent({ service }: ServiceDetailContentProps) {
  const symptomLinks = relatedGuideLinksByService[service.slug] ?? [];
  const faqs = serviceFaqsBySlug[service.slug] ?? [];
  const heroStock = await getHeroStockImage(service.slug);
  const heroImageSrc = heroStock.src;
  const galleryImages = await getDroneGalleryImages(service.slug, 2);
  const isDroneSurveys = service.slug === "drone-surveys";
  const pageConfig = isDroneSurveys
    ? {
        ...verticalConfig,
        sectionIntros: {
          ...verticalConfig.sectionIntros,
          types:
            "Drone surveys are often used alongside inspections, mapping and reporting to give a complete picture of a site. They are especially useful where speed, safety or access is a concern.",
          process: "A simple four-step workflow from brief to final delivery.",
          industries: "Practical support for teams that need clear site visuals and reliable aerial data.",
          benefits: "Clear outcomes focused on speed, minimal disruption and usable outputs.",
        },
        serviceTypesBySlug: {
          ...verticalConfig.serviceTypesBySlug,
          "drone-surveys": [
            "Checking land before planning or development",
            "Monitoring construction progress",
            "Reviewing large or hard-to-access areas",
            "Capturing site conditions for reports or decisions",
          ],
        },
        industries: [
          "Construction",
          "Property & development",
          "Commercial sites",
          "Land and infrastructure",
        ],
        relatedLocationsIntro:
          "Drone Surveys across London, Hertfordshire, Bedfordshire and Buckinghamshire.",
      }
    : verticalConfig;

  return (
    <EngineServiceDetailContent
      service={service}
      services={services}
      locations={locations}
      verticalConfig={pageConfig}
      heroImageSrc={heroImageSrc}
      contactPath="/contact"
      servicesPath="/services"
      servicePageHref={(slug) => `/${slug}`}
      locationLinkPath={(slug, id) => `/${slug}/${id}`}
      symptomLinks={symptomLinks}
      symptomLinksSectionTitle="Related guides"
      faqs={faqs}
      overviewImage={{
        src: heroStock.src,
        alt: isDroneSurveys ? "Aerial survey capture in progress" : heroStock.alt,
      }}
      firstCtaMessage={
        isDroneSurveys
          ? "Get a drone survey quote. Tell us about your site and we will come back quickly with options."
          : "Need a drone service for your project? Request a quote and we will scope the right inspection or capture route."
      }
      firstCtaButtonText={isDroneSurveys ? "Get a quote" : "Request a Drone Quote"}
      firstCtaButtonLink="/contact"
      secondCtaHeading={isDroneSurveys ? "Get a drone survey quote" : "Get a Drone Quote"}
      secondCtaBody={
        isDroneSurveys
          ? "Tell us about your site and we will come back quickly with options."
          : "Contact us for a no-obligation quote and we will advise the right drone service, deliverables and timeline."
      }
      secondCtaButtonText={isDroneSurveys ? "Get a quote" : "Request a Quote"}
      galleryImages={galleryImages}
      overviewExtra={
        <>
          <p className="mb-4 text-sm text-muted-foreground">
            DroneGeo specialises in aerial inspections and imaging for roofs, facades, solar systems and property marketing.{" "}
            <a
              href={`${partnerBaseUrl}${partnerDrainSurveyPath}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              View DroneGeo services
            </a>
            .
          </p>
        </>
      }
    />
  );
}
