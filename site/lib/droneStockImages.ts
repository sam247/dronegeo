type StockImage = { src: string; alt: string };

const FALLBACK_IMAGES: Record<string, StockImage[]> = {
  "drone-surveys": [
    { src: "/images/services/drone-survey.jpg", alt: "Drone survey over a site" },
    { src: "/images/projects/project-surveys-1.jpg", alt: "Aerial site survey image" },
  ],
  "drone-inspections": [
    { src: "/images/services/drone-survey.jpg", alt: "Drone inspection capture" },
    { src: "/images/projects/project-surveys-2.jpg", alt: "Building inspection from drone view" },
  ],
  "thermal-drone-imaging": [
    { src: "/images/services/drone-survey.jpg", alt: "Thermal drone imaging in progress" },
    { src: "/images/projects/project-surveys-3.jpg", alt: "Aerial thermal survey visual" },
  ],
  "aerial-photography": [
    { src: "/images/services/drone-survey.jpg", alt: "Aerial photography capture" },
    { src: "/images/projects/project-surveys-4.jpg", alt: "Aerial photography over property" },
  ],
};

function serviceQuery(serviceSlug: string): string {
  const map: Record<string, string> = {
    "drone-surveys": "drone surveying construction site uk",
    "drone-inspections": "drone roof inspection building facade",
    "thermal-drone-imaging": "thermal drone inspection solar panels",
    "aerial-photography": "aerial drone photography real estate",
  };
  return map[serviceSlug] ?? "drone inspection";
}

async function fetchUnsplashImage(query: string): Promise<StockImage | null> {
  const key = process.env.UNSPLASH_API_KEY;
  if (!key) return null;
  const res = await fetch(
    `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=1&orientation=landscape&content_filter=high`,
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
  return { src, alt: first?.alt_description?.trim() || "Drone service image" };
}

async function fetchPexelsImage(query: string): Promise<StockImage | null> {
  const key = process.env.PEXELS_API_KEY;
  if (!key) return null;
  const res = await fetch(
    `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=1&orientation=landscape`,
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
  return { src, alt: first?.alt?.trim() || "Drone service image" };
}

export async function getDroneGalleryImages(serviceSlug: string, count = 2): Promise<StockImage[]> {
  const query = serviceQuery(serviceSlug);
  const [unsplash, pexels] = await Promise.all([fetchUnsplashImage(query), fetchPexelsImage(query)]);
  const picked = [unsplash, pexels].filter((v): v is StockImage => Boolean(v));
  if (picked.length >= count) return picked.slice(0, count);

  const fallback = FALLBACK_IMAGES[serviceSlug] ?? FALLBACK_IMAGES["drone-surveys"];
  const missing = count - picked.length;
  return [...picked, ...fallback.slice(0, missing)];
}
