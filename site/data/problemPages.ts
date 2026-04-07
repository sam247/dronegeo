import type { ProblemData } from "engine";

export interface SurveyProblemPage extends ProblemData {
  primaryServiceSlug: string;
  primaryServiceLabel: string;
}

export const surveyProblemPages: SurveyProblemPage[] = [
  {
    slug: "roof-inspections",
    title: "Roof inspections by drone",
    contextualOpening:
      "Roof inspections are one of the most efficient drone use cases, especially where safe access is difficult or disruptive. Drone capture gives you clear roof condition evidence without scaffold-first mobilisation.",
    causes:
      "Inspections are typically triggered by leaks, storm damage concerns, aging roof coverings, blocked gutters, or planned maintenance where high-level visibility is required.",
    howFixed:
      "We capture high-resolution imagery and video across all roof elevations, annotate defects, and provide an inspection report so contractors can price and prioritise remedial works accurately.",
    whenToCall:
      "Call when there are visible internal damp signs, post-storm concerns, planned roofing works, or when a landlord or facilities team needs condition evidence before contractor engagement.",
    relatedServiceSlugs: ["drone-inspections", "thermal-drone-imaging"],
    ctaMessage: "Need a roof condition check? Book a drone roof inspection and get evidence-led findings.",
    quickChecks:
      "List known leak points, gather recent maintenance history, and flag any inaccessible roof zones that need close-up review.",
    seriousSigns:
      "Treat as urgent when water ingress is active, roof elements appear displaced, or deterioration could affect occupant safety.",
    primaryServiceSlug: "drone-inspections",
    primaryServiceLabel: "Drone inspections",
  },
  {
    slug: "building-inspections",
    title: "Building inspections by drone",
    contextualOpening:
      "Building inspections often involve facades and high-level details that are costly or slow to access traditionally. Drone inspection provides rapid external condition visibility across the full structure.",
    causes:
      "Typical triggers include visible cracking, cladding concerns, loose elements, weather damage, cyclical compliance checks, and pre-works condition reporting needs.",
    howFixed:
      "We run a structured aerial inspection pass, capture asset-specific imagery, and provide organised findings so surveyors, engineers and contractors can scope next steps accurately.",
    whenToCall:
      "Call before planned maintenance, after severe weather, when access is constrained, or where external defects may create safety or liability risk.",
    relatedServiceSlugs: ["drone-inspections", "drone-surveys"],
    ctaMessage: "Need safer high-level building checks? Arrange a drone building inspection today.",
    quickChecks:
      "Identify critical elevations, note previous repairs, and confirm any no-fly or restricted access constraints for the site.",
    seriousSigns:
      "Escalate urgently when facade elements are loose, material failure is visible, or there is risk to adjacent public areas.",
    primaryServiceSlug: "drone-inspections",
    primaryServiceLabel: "Drone inspections",
  },
  {
    slug: "estate-agent-photography",
    title: "Estate agent aerial photography",
    contextualOpening:
      "Estate listings benefit from strong visual context, especially for larger homes, unique plots and premium developments. Aerial photography helps buyers understand setting, scale and surroundings immediately.",
    causes:
      "Ground-level photos often fail to show plot depth, boundary context, access routes and nearby amenities, which can reduce listing impact and enquiry quality.",
    howFixed:
      "We capture polished aerial stills and video clips tailored for listings and campaigns, giving agents a complete visual pack for portals, social and brochures.",
    whenToCall:
      "Call before launching premium listings, when a development phase completes, or when refreshed marketing imagery is required for stale listings.",
    relatedServiceSlugs: ["aerial-photography", "drone-surveys"],
    ctaMessage: "Need standout property visuals? Book an estate agent aerial photography package.",
    quickChecks:
      "Provide your preferred shot list, listing timeline, and any must-show property features or surrounding landmarks.",
    seriousSigns:
      "Escalate when listing dates are fixed and current media does not represent the property accurately enough to support campaign goals.",
    primaryServiceSlug: "aerial-photography",
    primaryServiceLabel: "Aerial photography",
  },
  {
    slug: "solar-panel-inspection",
    title: "Solar panel thermal inspection",
    contextualOpening:
      "Solar performance issues are often difficult to diagnose from ground level. Thermal drone imaging provides a rapid way to identify hotspots and underperforming areas across full panel arrays.",
    causes:
      "Panel faults, connector issues, soiling patterns and shading impacts can cause uneven output that is not obvious through routine visual checks alone.",
    howFixed:
      "We capture calibrated thermal imagery and supporting RGB context, then report anomaly zones so maintenance teams can focus diagnostics and repairs efficiently.",
    whenToCall:
      "Call during periodic maintenance cycles, after noticeable output drops, or when commissioning new systems and validating performance baselines.",
    relatedServiceSlugs: ["thermal-drone-imaging", "drone-inspections"],
    ctaMessage:
      "Need thermal insight on panel performance? Book a solar thermal drone inspection.",
    quickChecks:
      "Share system layout, recent performance data, and any known issue strings so we can target the flight and reporting scope.",
    seriousSigns:
      "Escalate when output drops are significant, faults are spreading, or warranty/compliance timelines require rapid evidence.",
    primaryServiceSlug: "thermal-drone-imaging",
    primaryServiceLabel: "Thermal drone imaging",
  },
];

export function getSurveyProblemPageBySlug(slug: string): SurveyProblemPage | undefined {
  return surveyProblemPages.find((p) => p.slug === slug);
}
