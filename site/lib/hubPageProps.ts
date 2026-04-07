import {
  getCategoryPages,
  getHubData,
  hubPages,
  services,
  locations,
  categoryImages,
  categoryAltText,
} from "@/lib/data";
import { getHeroImage } from "@/lib/images";
import { verticalConfig } from "@/config";
import type { CrossSection } from "engine";

function categorisePages(category: string): CrossSection[] {
  const symptomCategories = ["problems"];
  const allCategories = [
    { label: "Symptom Guides", cats: symptomCategories },
    { label: "Drone Guides", cats: ["guides"] },
  ];
  return allCategories
    .filter((section) => !section.cats.includes(category))
    .map((section) => ({
      label: section.label,
      pages: section.cats.flatMap((cat) => {
        const hub = hubPages.find((h) => h.category === cat);
        return getCategoryPages(cat).slice(0, 3).map((p) => ({
          slug: p.slug,
          title: p.title,
          intro: p.intro,
          basePath: hub?.basePath ?? "",
        }));
      }),
    }))
    .filter((s) => s.pages.length > 0);
}

export function getHubPageProps(category: string) {
  const hub = getHubData(category);
  const pages = getCategoryPages(category);
  if (!hub || pages.length === 0) return null;
  const keyServices = services.filter((s) =>
    ["drone-surveys", "drone-inspections", "thermal-drone-imaging", "aerial-photography"].includes(
      s.slug
    )
  ).slice(0, 3);
  const heroImage = getHeroImage({
    category,
    categoryImagesMap: categoryImages,
  });
  const heroAlt =
    categoryAltText[category] || `${hub.title} - professional survey services`;
  const crossSections = categorisePages(category);
  const pillarGuides = [
    { title: "When you need a survey", href: "/survey-issues" },
    { title: "Survey guides hub", href: "/survey-guides" },
  ];
  return {
    hub,
    pages,
    heroImage,
    heroAlt,
    crossSections,
    keyServices,
    featuredLocations: locations,
    companyInfo: verticalConfig.companyInfo,
    baseUrl: verticalConfig.baseUrl,
    pillarGuides,
    callTrackVertical: verticalConfig.verticalId,
    ctaVariants: verticalConfig.ctaVariants,
    ctaBannerSeed: `${hub.category}-${hub.basePath}`,
  };
}
