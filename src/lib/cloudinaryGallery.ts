/**
 * Cloudinary Gallery Fetcher (Server-side, Search API)
 *
 * Fetches images by folder using Cloudinary's Search API, which works in
 * BOTH dynamic folder mode (default for accounts created after June 2024)
 * AND legacy fixed folder mode. The expression matches assets whose
 * `folder` field OR `asset_folder` field equals the requested path —
 * whichever is populated on the asset.
 *
 * Replaces the earlier /resources/by_asset_folder approach (Session 28
 * commit 3f8f03d) which returned empty arrays silently when the account's
 * folder-field population didn't match the endpoint's expectations.
 *
 * IMPORTANT: This uses API credentials and MUST run server-side only.
 * Components calling this must be async Server Components (no "use client").
 *
 * Requires these env vars (added in Vercel + .env.local):
 *   CLOUDINARY_API_KEY                - from Cloudinary console -> Settings -> API Keys
 *   CLOUDINARY_API_SECRET             - same place
 *   NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME - already exists
 *
 * SECURITY: API_KEY and API_SECRET are SERVER-ONLY (no NEXT_PUBLIC_ prefix).
 *
 * DIAGNOSTICS: Every call logs to console under [Gallery] prefix.
 * View live in Vercel: Dashboard -> Project -> Logs -> Filter "Function".
 * Logged per call: folder requested, total_count returned, and first
 * asset's folder/asset_folder fields (for verification).
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
 * @param folderPath - e.g. "marble-art/sinks" (no leading/trailing slash needed)
 * @param maxItems - max images to return (default 30)
 */
export async function fetchGalleryFolder(
  folderPath: string,
  maxItems: number = 30
): Promise<GalleryImage[]> {
  if (!API_KEY || !API_SECRET) {
    console.warn(
      `[Gallery] Cloudinary API credentials missing - cannot fetch ${folderPath}. ` +
        `Set CLOUDINARY_API_KEY and CLOUDINARY_API_SECRET in env vars.`
    );
    return [];
  }

  // Normalize: strip any leading/trailing slashes
  const cleanFolder = folderPath.replace(/^\/+|\/+$/g, "");

  // Cloudinary Search API - works in both dynamic + fixed folder mode.
  // Docs: https://cloudinary.com/documentation/search_api
  const searchUrl = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/resources/search`;
  const expression = `folder="${cleanFolder}" OR asset_folder="${cleanFolder}"`;

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
      console.warn(
        `[Gallery] Cloudinary Search API failed for "${cleanFolder}": ` +
          `${res.status} ${res.statusText} - body: ${body.slice(0, 300)}`
      );
      return [];
    }

    const data = await res.json();
    const resources = Array.isArray(data.resources) ? data.resources : [];

    console.info(
      `[Gallery] "${cleanFolder}" -> ${resources.length} assets ` +
        `(total_count=${data.total_count ?? "?"})`
    );

    if (resources.length === 0) {
      console.info(
        `[Gallery] Empty result. Expression: ${expression}. ` +
          `Verify in Cloudinary Media Library that folder "${cleanFolder}" ` +
          `exists and contains image assets directly (not just sub-folders).`
      );
    } else {
      const first = resources[0];
      console.info(
        `[Gallery] First asset fields -> ` +
          `folder="${first.folder ?? ""}" ` +
          `asset_folder="${first.asset_folder ?? ""}" ` +
          `public_id="${first.public_id}"`
      );
    }

    return resources.map(
      (r: {
        public_id: string;
        secure_url?: string;
        width?: number;
        height?: number;
        format: string;
        folder?: string;
        asset_folder?: string;
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
      }
    );
  } catch (e) {
    console.error(`[Gallery] Failed to fetch ${cleanFolder}:`, e);
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
