// lib/enrichment.ts
// 🌍 REAL-TIME ENRICHMENT SERVICE
// Fetches verified images and context from Open Source APIs (Wikimedia).

interface ImageResult {
    url: string;
    title: string;
    source: string;
}

export async function fetchContextImages(query: string): Promise<ImageResult[]> {
    try {
        // 1. Clean query for search (remove "details", "about", etc)
        const cleanQuery = query.replace(/what is|who is|where is|tell me about|explain|best/gi, "").trim();
        if (cleanQuery.length < 3) return [];

        // 2. Wikimedia Commons Search API
        const wikiUrl = `https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=${encodeURIComponent(cleanQuery)}&gsrlimit=3&prop=imageinfo&iiprop=url|extmetadata&format=json`;

        const res = await fetch(wikiUrl);
        const data = await res.json();

        if (!data.query || !data.query.pages) return [];

        const images: ImageResult[] = [];
        Object.values(data.query.pages).forEach((page: any) => {
            if (page.imageinfo && page.imageinfo[0]) {
                const info = page.imageinfo[0];
                images.push({
                    url: info.url,
                    title: page.title.replace("File:", "").replace(/\.\w+$/, ""),
                    source: "Wikimedia Commons"
                });
            }
        });

        return images;
    } catch (error) {
        console.error("Enrichment Error:", error);
        return []; // Graceful degradation
    }
}
