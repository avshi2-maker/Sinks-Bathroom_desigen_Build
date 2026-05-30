import { fetchVideoFolder } from "@/lib/cloudinaryVideo";

/**
 * Video gallery section — MP4s from Cloudinary "marble-art/videos" with
 * native HTML5 players + poster frames. Click-to-play. Server component.
 * To add a video later: just upload it to marble-art/videos. No code change.
 */
export async function VideoGallery() {
  const videos = await fetchVideoFolder("marble-art/videos", 50);

  if (videos.length === 0) {
    return null;
  }

  return (
    <section id="videos-gallery" className="py-20 md:py-28 bg-[var(--color-charcoal)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[var(--color-brass)] text-xs font-medium tracking-[0.3em] uppercase mb-4">בתנועה</p>
          <h2 className="text-[var(--color-cream)] text-3xl md:text-5xl font-black mb-4 leading-tight">הכיורים שלנו בווידאו</h2>
          <p className="text-[var(--color-cream)]/60 max-w-2xl mx-auto leading-relaxed">סרטונים קצרים של הכיורים — מהאבן ועד הגימור. לחצו להפעלה.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-items-center">
          {videos.map((v) => (
            <div key={v.public_id} className="w-full max-w-sm rounded-lg overflow-hidden bg-black shadow-lg">
              <video className="w-full h-auto max-h-[640px] object-contain bg-black" controls preload="metadata" playsInline poster={v.poster_url}>
                <source src={v.video_url} type="video/mp4" />
              </video>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
