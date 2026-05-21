/**
 * Cloudinary Gallery Fetcher (Server-side, Admin API)
 *
 * Fetches images by folder using Cloudinary's Admin API, which DOES NOT
 * require tagging — it lists resources by their actual folder location.
 *
 * IMPORTANT: This uses API credentials and MUST run server-side only.
 * Components calling this must be async Server Components (no "use client").
 *
 * Requires these env vars (added in Vercel + .env.local):
 *   CLOUDINARY_API_KEY       - from Cloudinary console → Settings → API Keys
 *   CLOUDINARY_API_SECRET    - same place
 *   NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME - already exists
 *
 * SECURITY: API_KEY and API_SECRET are SERVER-ONLY (no NEXT_PUBLIC_ prefix).
 * Never expose them to the browser.
 */

const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || "dqdku88vv";
const API_KEY = process.env.CLOUDINARY_API_KEY || "";
const API_SECRET = process.env.CLOUDINARY_API_SECRET || "";

export type GalleryImage = {
  public_id: string;
  url: string;
  thumbnail_url: string;
  width: number;
  height: number;
  format: string;
  filename: string;
};

/**
 * Fetch images from a Cloudinary folder.
 *
 * @param folderPath - e.g. "marble-art/sinks" (full path from root)
 * @param maxItems - max images to return
 */
export async function fetchGalleryFolder(
  folderPath: string,
  maxItems: number = 30
): Promise<GalleryImage[]> {
  // Without credentials, fall back gracefully (empty array)
  if (!API_KEY || !API_SECRET) {
    console.warn(
      `[Gallery] Cloudinary API credentials missing — cannot fetch ${folderPath}. ` +
        `Set CLOUDINARY_API_KEY and CLOUDINARY_API_SECRET in env vars.`
    );
    return [];
  }

  // Cloudinary Admin API: GET /resources/by_asset_folder
  // Docs: https://cloudinary.com/documentation/admin_api#get_resources_by_asset_folder
  const url = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/resources/by_asset_folder?asset_folder=${encodeURIComponent(folderPath)}&max_results=${maxItems}&resource_type=image`;

  // Basic auth: base64(api_key:api_secret)
  const auth = Buffer.from(`${API_KEY}:${API_SECRET}`).toString("base64");

  try {
    const res = await fetch(url, {
      headers: {
        Authorization: `Basic ${auth}`,
      },
      // Revalidate every 5 minutes — fresh enough, cache-friendly
      next: { revalidate: 300 },
    });

    if (!res.ok) {
      console.warn(
        `[Gallery] Cloudinary API failed for "${folderPath}": ${res.status} ${res.statusText}`
      );
      return [];
    }

    const data = await res.json();
    const resources = Array.isArray(data.resources) ? data.resources : [];

    return resources.map((r: {
      public_id: string;
      secure_url: string;
      width?: number;
      height?: number;
      format: string;
    }): GalleryImage => {
      const publicId = r.public_id;
      const baseUrl = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload`;
      const filename = publicId.split("/").pop() || publicId;

      return {
        public_id: publicId,
        url: `${baseUrl}/q_auto,f_auto/${publicId}.${r.format}`,
        thumbnail_url: `${baseUrl}/c_fill,w_800,h_800,q_auto,f_auto/${publicId}.${r.format}`,
        width: r.width || 1000,
        height: r.height || 1000,
        format: r.format,
        filename,
      };
    });
  } catch (e) {
    console.error(`[Gallery] Failed to fetch ${folderPath}:`, e);
    return [];
  }
}

/**
 * Convert a Cloudinary filename to a clean display title.
 * "sink_madagascar_01" -> "Madagascar"
 * "concept_dark_grey_01" -> "Dark Grey"
 * "sketch_corner" -> "Corner"
 */
export function filenameToDisplay(filename: string): string {
  const noExt = filename.replace(/\.(jpg|jpeg|png|webp|gif)$/i, "");
  const noPrefix = noExt.replace(/^(sink|concept|sketch|sample)[-_]/i, "");
  const noNumber = noPrefix.replace(/[-_]\d+$/, "");

  return noNumber
    .replace(/[_-]/g, " ")
    .split(" ")
    .map((w) => (w.length > 0 ? w[0].toUpperCase() + w.slice(1) : ""))
    .join(" ")
    .trim();
}
