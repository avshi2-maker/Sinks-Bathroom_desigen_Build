import { supabase } from "@/lib/supabase";

type MediaItem = {
  id: string;
  cloudinary_url: string;
  caption_he: string | null;
  subject_type: string;
  marble_family: string | null;
};

export async function Gallery() {
  const { data, error } = await supabase
    .from("sink_media")
    .select("id, cloudinary_url, caption_he, subject_type, marble_family")
    .eq("is_published", true)
    .in("quality_tier", ["hero", "supporting"])
    .eq("is_archived", false)
    .order("quality_tier", { ascending: true })
    .order("created_at", { ascending: false })
    .limit(9);

  const items = (data as MediaItem[] | null) || [];

  return (
    <section className="py-20 md:py-32 bg-[var(--color-cream)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 md:mb-20">
          <p className="text-[var(--color-brass-dark)] text-xs font-medium tracking-[0.3em] uppercase mb-4">
            גלריה
          </p>
          <h2 className="text-[var(--color-charcoal)] text-3xl md:text-5xl font-black mb-4 leading-tight">
            יצירות נבחרות
          </h2>
          <p className="text-[var(--color-charcoal)]/60 max-w-2xl mx-auto">
            כל אחד מהכיורים הוא יצירה ייחודית בעבודת יד מאבן נבחרת.
          </p>
        </div>

        {error ? (
          <div className="text-center py-16">
            <p className="text-[var(--color-charcoal)]/50 text-sm">
              שגיאה זמנית בטעינת הגלריה. אנא רעננו את העמוד.
            </p>
          </div>
        ) : items.length === 0 ? (
          <div className="text-center py-16 max-w-2xl mx-auto">
            <div className="inline-block w-20 h-20 border-2 border-[var(--color-brass)]/30 rounded-full mb-8" />
            <h3 className="text-[var(--color-charcoal)] text-xl font-bold mb-3">
              הגלריה נפתחת בקרוב
            </h3>
            <p className="text-[var(--color-charcoal)]/60 text-base leading-relaxed">
              אנחנו מצלמים את היצירות החדשות. בינתיים מלאו את הטופס למטה
              ונשלח לכם תצוגות מקדימות מותאמות לטעם ולתקציב שלכם.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {items.map((item) => (
              <a
                key={item.id}
                href={item.cloudinary_url}
                target="_blank"
                rel="noopener noreferrer"
                className="aspect-square overflow-hidden rounded-lg group cursor-pointer block bg-[var(--color-cream-darker)]"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.cloudinary_url}
                  alt={item.caption_he || "Marble Art sink"}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
