import type { InfoPageData } from "./types";

export const guidesPages: InfoPageData[] = [
  {
    slug: "drone-roof-inspection-checklist",
    title: "Drone Roof Inspection Checklist",
    metaDescription:
      "A practical checklist for planning a drone roof inspection, from access and safety to deliverables and contractor handover.",
    intro:
      "Drone roof inspections are fastest when the scope is clear before flight. This checklist helps you define outputs, reduce rework and get actionable findings first time.",
    signs: [
      "You need roof condition evidence before appointing a contractor",
      "Scaffolding-first inspection would add delay or cost",
      "You need high-level imagery for maintenance planning",
    ],
    diagnosis:
      "Most delays come from unclear inspection priorities. Define roof zones, known defects, output format and turnaround before booking the survey.",
    resolution:
      "Use a structured brief with required elevations, close-up defect capture and report format. Ask for annotated imagery and a prioritised defect summary.",
    ctaText: "Need a roof inspection this week? Request a DroneGeo quote.",
    relatedServices: ["drone-inspections", "thermal-drone-imaging"],
  },
  {
    slug: "thermal-drone-imaging-for-solar-panels",
    title: "Thermal Drone Imaging for Solar Panel Inspections",
    metaDescription:
      "How thermal drone imaging identifies solar panel hotspots, underperforming strings and maintenance priorities.",
    intro:
      "Thermal drone imaging is one of the most efficient ways to diagnose panel performance at scale. It highlights anomaly zones that are not visible in standard RGB photos.",
    signs: [
      "Your generation output has dropped unexpectedly",
      "You need evidence for maintenance or warranty claims",
      "You manage multiple panel arrays and need fast diagnostics",
    ],
    diagnosis:
      "Thermal surveys work best with calibrated capture windows, supporting RGB imagery and layout context so anomalies can be mapped precisely to panels and strings.",
    resolution:
      "Schedule a thermal flight in suitable conditions, map anomaly clusters, and pair findings with electrical checks for targeted remediation.",
    ctaText: "Book a thermal drone inspection for your solar system.",
    relatedServices: ["thermal-drone-imaging", "drone-inspections"],
  },
  {
    slug: "aerial-photography-for-estate-agents",
    title: "Aerial Photography for Estate Agent Listings",
    metaDescription:
      "Use aerial imagery to improve listing quality, show context and increase qualified property enquiries.",
    intro:
      "Aerial property visuals help buyers understand scale, setting and layout instantly. For premium listings, this often improves enquiry quality and speed to offer.",
    signs: [
      "Ground-level photos do not show plot context clearly",
      "You are marketing larger homes or unique sites",
      "You need fresh campaign media for stale listings",
    ],
    diagnosis:
      "The key is not just flying a drone; it is capturing the right angles and sequences for portals, social, brochures and web.",
    resolution:
      "Define a shot list before flight, capture hero and context angles, and request delivery in channel-ready formats.",
    ctaText: "Get an aerial photography package for your next listing.",
    relatedServices: ["aerial-photography", "drone-surveys"],
  },
  {
    slug: "drone-surveys-for-building-inspections",
    title: "Drone Surveys for Building Inspections",
    metaDescription:
      "When to use drone surveys for facade and building inspections, and what deliverables to request for engineering and maintenance teams.",
    intro:
      "Drone building inspections provide rapid condition visibility across facades, rooflines and hard-to-access areas without disruptive access equipment.",
    signs: [
      "You need safer high-level inspection evidence",
      "You manage assets with recurring external defects",
      "You need baseline visuals before planned works",
    ],
    diagnosis:
      "Inspection value depends on capture coverage, image clarity and report structure. A clear brief improves usable findings.",
    resolution:
      "Request elevation-by-elevation capture, defect tags, and a concise summary of priorities to support scope and budget decisions.",
    ctaText: "Need a building drone inspection? Speak to DroneGeo.",
    relatedServices: ["drone-inspections", "drone-surveys"],
  },
];
