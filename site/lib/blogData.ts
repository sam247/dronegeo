import { buildIntentArticle, type ScenarioArticleDefinition } from "engine";

const definitions: ScenarioArticleDefinition[] = [
  {
    slug: "drone-roof-inspection-vs-traditional-access",
    title: "Drone Roof Inspection vs Traditional Access: Which Is Better?",
    excerpt:
      "A practical comparison of drone roof inspections and scaffold-first surveys for speed, cost, safety and reporting quality.",
    date: "2026-04-07",
    image: "/images/blog/when-to-use-a-drone-survey.jpg",
    category: "Drone",
    intent: "decision-making",
    serviceSlug: "drone-inspections",
    serviceTitle: "Drone Inspections",
    locationId: "london",
    locationName: "London",
    propertyType: "multi-storey residential block",
    specificIssue: "roof condition uncertainty ahead of planned maintenance",
    constraints: ["occupied building", "tight project timeline"],
    issueSummary:
      "The core decision was whether to mobilise access equipment first or capture condition evidence quickly with drone inspection to scope works accurately.",
    handledSummary:
      "Drone capture provided high-resolution imagery across roof zones and elevations in a single visit, allowing the team to validate priority defects before appointing contractors.",
    resultSummary:
      "The client reduced inspection lead time and avoided unnecessary access costs while still getting actionable evidence for tendering and repair planning.",
    whenNeededSummary:
      "This approach is most useful when high-level condition visibility is needed quickly and safely before committing to scaffold-heavy inspection routes.",
    relatedServiceLinks: [
      { href: "/drone-inspections/london", label: "drone inspections in London" },
      { href: "/thermal-drone-imaging/london", label: "thermal drone imaging in London" },
    ],
    guideLink: {
      href: "/survey-guides/drone-roof-inspection-checklist",
      label: "drone roof inspection checklist",
    },
  },
];

export const blogPosts = definitions.map((definition) => buildIntentArticle(definition));

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug) ?? null;
}
