export type StockImage = { src: string; alt: string };

/** Last resort only if both APIs fail (build without keys, rate limits, etc.). */
const FALLBACK_SRC = "/images/services/drone-survey.jpg";

function serviceQuery(serviceSlug: string): string {
  const map: Record<string, string> = {
    "drone-surveys": "drone surveying construction site uk",
    "drone-inspections": "drone roof inspection building facade",
    "thermal-drone-imaging": "thermal drone inspection solar panels",
    "aerial-photography": "aerial drone photography real estate",
  };
  return map[serviceSlug] ?? "drone inspection aerial";
}

async function fetchUnsplashImage(query: string, page = 1): Promise<StockImage | null> {
  const key = process.env.UNSPLASH_API_KEY;
  if (!key) return null;
  const res = await fetch(
    `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=1&page=${page}&orientation=landscape&content_filter=high`,
    {
      headers: { Authorization: `Client-ID ${key}` },
      next: { revalidate: 86400 },
    }
  );
  if (!res.ok) return null;
  const data = (await res.json()) as {
    results?: Array<{ alt_description?: string | null; urls?: { regular?: string } }>;
  };
  const first = data.results?.[0];
  const src = first?.urls?.regular;
  if (!src) return null;
  return { src, alt: first?.alt_description?.trim() || "Drone aerial image" };
}

async function fetchPexelsImage(query: string, page = 1): Promise<StockImage | null> {
  const key = process.env.PEXELS_API_KEY;
  if (!key) return null;
  const res = await fetch(
    `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=1&page=${page}&orientation=landscape`,
    {
      headers: { Authorization: key },
      next: { revalidate: 86400 },
    }
  );
  if (!res.ok) return null;
  const data = (await res.json()) as {
    photos?: Array<{ alt?: string; src?: { large?: string } }>;
  };
  const first = data.photos?.[0];
  const src = first?.src?.large;
  if (!src) return null;
  return { src, alt: first?.alt?.trim() || "Drone aerial image" };
}

/** Prefer Unsplash, then Pexels; optional page for variety. */
export async function firstStockImage(query: string, page = 1): Promise<StockImage | null> {
  return (await fetchUnsplashImage(query, page)) ?? (await fetchPexelsImage(query, page));
}

function withFallback(img: StockImage | null, alt: string): StockImage {
  if (img?.src) return img;
  return { src: FALLBACK_SRC, alt };
}

export async function getHeroStockImage(serviceSlug: string): Promise<StockImage> {
  const query = serviceQuery(serviceSlug);
  const img = await firstStockImage(query, 1);
  return withFallback(img, `${serviceSlug.replace(/-/g, " ")} — aerial capture`);
}

export async function getDroneGalleryImages(serviceSlug: string, count = 2): Promise<StockImage[]> {
  const query = serviceQuery(serviceSlug);
  const [u, p] = await Promise.all([fetchUnsplashImage(query, 1), fetchPexelsImage(query, 1)]);
  const picked = [u, p].filter((v): v is StockImage => Boolean(v));
  if (picked.length >= count) return picked.slice(0, count);
  const extra = await firstStockImage(query, 2);
  if (extra && picked.every((x) => x.src !== extra.src)) picked.push(extra);
  while (picked.length < count) {
    picked.push({ src: FALLBACK_SRC, alt: "Drone project image" });
    if (picked.length >= count) break;
  }
  return picked.slice(0, count);
}

const HOME_PROJECT_QUERIES = [
  "drone roof inspection residential uk",
  "drone building facade inspection",
  "thermal imaging drone solar panels",
];

export async function getHomeProjectStockImages(): Promise<StockImage[]> {
  const out: StockImage[] = [];
  for (let i = 0; i < HOME_PROJECT_QUERIES.length; i++) {
    const img = await firstStockImage(HOME_PROJECT_QUERIES[i]!, i + 1);
    out.push(withFallback(img, "Recent drone project"));
  }
  return out;
}

export async function getBlogListStockImages(postCount: number): Promise<StockImage[]> {
  const base = "drone aerial photography inspection uk";
  const out: StockImage[] = [];
  for (let i = 0; i < postCount; i++) {
    const img = await firstStockImage(base, (i % 3) + 1);
    out.push(withFallback(img, "Blog image"));
  }
  return out;
}

export async function getBlogArticleStockImage(slug: string): Promise<StockImage> {
  const query = `drone survey inspection ${slug.replace(/-/g, " ")}`;
  const img = await firstStockImage(query, 1);
  return withFallback(img, "Article image");
}

export async function getAboutPageStockImage(): Promise<StockImage> {
  const img = await firstStockImage("drone pilot aerial survey team", 1);
  return withFallback(img, "DroneGeo aerial operations");
}

export async function getServicesPageHeroImage(): Promise<StockImage> {
  const img = await firstStockImage("professional drone services aerial uk", 1);
  return withFallback(img, "Drone services");
}

export async function getContactPageHeroImage(): Promise<StockImage> {
  const img = await firstStockImage("drone contact aerial office uk", 1);
  return withFallback(img, "Contact DroneGeo");
}

/** Hub / info-style category heroes (guides, issues). */
export async function getCategoryHubHeroImage(category: string): Promise<StockImage> {
  const query =
    category === "guides"
      ? "drone mapping aerial survey tutorial"
      : category === "problems"
        ? "drone roof inspection problem"
        : "drone aerial survey professional";
  const img = await firstStockImage(query, 1);
  return withFallback(img, "Guide and resources");
}
