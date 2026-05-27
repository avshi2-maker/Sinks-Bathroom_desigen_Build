/**
 * Cloudinary Video Fetcher (Server-side, Search API)
 * Mirrors lib/cloudinaryGallery.ts but for VIDEO assets.
 * Serves /video/upload/ + an auto-generated poster (first-frame) image.
 * MUST run server-side only. Same env vars as the image gallery.
 */

const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || "dqdku88vv";
const API_KEY = process.env.CLOUDINARY_API_KEY || "";
const API_SECRET = process.env.CLOUDINARY_API_SECRET || "";

export type GalleryVideo = {
  public_id: string;
  video_url: string;
  poster_url: string;
  width: number;
  height: number;
  format: string;
  filename: string;
};

export async function fetchVideoFolder(
  folderPath: string,
  maxItems: number = 12
): Promise<GalleryVideo[]> {
  if (!API_KEY || !API_SECRET) {
    console.warn(`[VideoGallery] Cloudinary API credentials missing - cannot fetch ${folderPath}.`);
    return [];
  }

  const cleanFolder = folderPath.replace(/^\/+|\/+$/g, "");
  const searchUrl = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/resources/search`;
  const expression = `(folder="${cleanFolder}" OR asset_folder="${cleanFolder}") AND resource_type:video`;
  const auth = Buffer.from(`${API_KEY}:${API_SECRET}`).toString("base64");

  try {
    const res = await fetch(searchUrl, {
      method: "POST",
      headers: {
        Authorization: `Basic ${auth}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        expression,
        max_results: maxItems,
        sort_by: [{ public_id: "asc" }],
      }),
      next: { revalidate: 300 },
    });

    if (!res.ok) {
      const body = await res.text().catch(() => "<unreadable>");
      console.warn(`[VideoGallery] Search API failed for "${cleanFolder}": ${res.status} ${res.statusText} - ${body.slice(0, 300)}`);
      return [];
    }

    const data = await res.json();
    const resources = Array.isArray(data.resources) ? data.resources : [];
    console.info(`[VideoGallery] "${cleanFolder}" -> ${resources.length} videos (total_count=${data.total_count ?? "?"})`);

    return resources.map(
      (r: { public_id: string; width?: number; height?: number; format: string }): GalleryVideo => {
        const publicId = r.public_id;
        const base = `https://res.cloudinary.com/${CLOUD_NAME}/video/upload`;
        const filename = publicId.split("/").pop() || publicId;
        return {
          public_id: publicId,
          video_url: `${base}/q_auto/${publicId}.${r.format}`,
          poster_url: `${base}/so_0,q_auto/${publicId}.jpg`,
          width: r.width || 1080,
          height: r.height || 1920,
          format: r.format,
          filename,
        };
      }
    );
  } catch (e) {
    console.error(`[VideoGallery] Failed to fetch ${cleanFolder}:`, e);
    return [];
  }
}
