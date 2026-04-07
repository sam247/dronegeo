import { companyInfo } from "@/lib/data";
import type { VerticalConfig, HomepageTrustPointsSix } from "engine";

const homepageTrustPoints: HomepageTrustPointsSix = [
  { icon: "Shield", title: "CAA-compliant operations", description: "Qualified pilots and safe method statements for every mission." },
  { icon: "Users", title: "Inspection-first reporting", description: "Actionable visuals and findings for property and asset decisions." },
  { icon: "BadgeCheck", title: "Consistent capture quality", description: "Repeatable flight plans and calibrated workflows for reliable output." },
  { icon: "Clock", title: "Rapid mobilisation", description: "Fast scheduling for urgent inspection and survey requirements." },
  { icon: "Wrench", title: "Practical deliverables", description: "Imagery, thermal outputs, orthomosaics and concise reports in one pack." },
  { icon: "Headphones", title: "Regional focus", description: "Dedicated support across London, Hertfordshire, Bedfordshire and Buckinghamshire." },
];

// Kept for compatibility with existing service detail component wiring.
export const partnerBaseUrl = "https://dronegeo.co.uk";
export const partnerDrainSurveyPath = "/services/drone-surveys";

const serviceTypesBySlug: Record<string, string[]> = {
  "drone-surveys": ["Orthomosaic capture", "Elevation mapping", "Progress monitoring", "Asset overview flights"],
  "drone-inspections": ["Roof inspections", "Building inspections", "Defect mapping", "High-level access capture"],
  "thermal-drone-imaging": ["Solar panel thermal checks", "Heat-loss scans", "Moisture and leak detection", "Electrical hotspot detection"],
  "aerial-photography": ["Estate agent photography", "Development marketing visuals", "Construction progress imagery", "Promotional stills and video"],
};

export const verticalConfig: VerticalConfig = {
  verticalId: "dronegeo",
  siteName: "DroneGeo",
  imageAltNoLocationSuffix: "drone service",
  baseUrl: "https://dronegeo.co.uk",
  primaryService: "Drone Surveys & Inspections",
  industry: "drone services",
  ctaVariants: [
    "Get a drone quote",
    "Speak to a drone specialist",
    "Check drone availability",
  ] as const,
  problemLabel: "Drone Use Cases",
  relatedServicesLabel: "Drone service",
  serviceTypesBySlug,
  companyInfo: {
    name: companyInfo.name,
    phone: companyInfo.phone,
    email: companyInfo.email,
    address: companyInfo.address,
    hours: companyInfo.hours,
    social: companyInfo.social,
    aggregateRating: {
      ratingValue: 4.9,
      reviewCount: 120,
      bestRating: 5,
    },
  },
  sectionIntros: {
    types: "DroneGeo provides four core services: drone surveys, drone inspections, thermal drone imaging, and aerial photography. Every job is scoped around your output needs, site constraints and timescales.",
    process: "We start with your brief, run pre-flight checks and airspace planning, then capture and process imagery into clear deliverables your team can act on quickly.",
    industries: "We support property managers, contractors, estate agents, facilities teams and homeowners with practical drone outputs for inspection, reporting and marketing.",
    benefits: "Using drone capture reduces risk, improves access to hard-to-reach areas, and delivers visual evidence quickly without disruptive access equipment.",
  },
  relatedServicesIntro:
    "Drone requirements vary by project and asset type. In addition to the service above, we offer the following options to match your inspection, thermal, survey or media brief.",
  relatedLocationsIntro:
    "We cover London, Hertfordshire, Bedfordshire and Buckinghamshire. Select an area below for local information and contact options.",
  crossVerticalLinks: [],
  locationContextTemplate:
    "{locationName} and the wider {area} region have regular demand for roof inspections, building inspections, thermal diagnostics and aerial property imagery. DroneGeo delivers clear visual outputs across the area, including in {nearbyTowns}. Contact us for a free no-obligation quote for your project in or around {locationName}.",
  homepageTrustPoints,
  projectPageSidebar: {
    ctaHeading: "Get a drone quote",
    ctaSupportText: "Tell us your property, asset, and output needs and we will scope the right drone service.",
    trustLine: "Trusted by property teams, contractors and estate agents",
  },
  blogPageSidebar: {
    ctaHeading: "Get a drone quote",
    ctaSupportText: "Share your use case and we will recommend the right drone survey or inspection route.",
    trustLine: "Trusted by property teams, contractors and estate agents",
  },
};
