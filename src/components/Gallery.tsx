import { fetchGalleryFolder, filenameToDisplay } from "@/lib/cloudinaryGallery";
import type { GalleryImage } from "@/lib/cloudinaryGallery";

/**
 * Marble Art Gallery — renders 4 themed sections.
 *
 * - Sinks (REAL finished work by Ales) — hero
 * - Samples (AI-generated marble simulations, clearly labeled "הדמיה") — material library
 * - Concepts (AI previews, clearly labeled) — honest framing
 * - Sketches (Ales's hand drawings) — process storytelling
 *
 * Empty sections render an empty-state OR get hidden entirely (controlled
 * via emptyState string — empty string = hide section if no items).
 */
export async function Gallery() {
  // Fetch all 4 folders in parallel
  const [sinks, samples, concepts, sketches] = await Promise.all([
    fetchGalleryFolder("marble-art/sinks", 12),
    fetchGalleryFolder("marble-art/samples", 16),
    fetchGalleryFolder("marble-art/concepts", 12),
    fetchGalleryFolder("marble-art/sketches", 8),
  ]);

  return (
    <>
      {/* ── SECTION 1: REAL SINKS (hero gallery) ── */}
      <GallerySection
        id="sinks-gallery"
        eyebrow="העבודה שלנו"
        title="כיורים שבנינו"
        subtitle="כל כיור הוא יצירה ייחודית. כל אחד מהם נחתך, עוצב ולוטש ידנית על ידי אלס."
        items={sinks}
        columns={3}
        bgClass="bg-[var(--color-cream)]"
        emptyState="גלריית הכיורים נפתחת בקרוב — נוסיף תמונות חדשות בכל שבוע."
      />

      {/* ── SECTION 2: MARBLE SAMPLES (AI simulations - honest labeling) ── */}
      <GallerySection
        id="samples-gallery"
        eyebrow="חומרי גלם"
        title="אבני שיש לבחירה"
        subtitle="התמונות הן הדמיות בלבד. לאחר שתבחרו את אבן השיש המועדפת עליכם — נפנה אתכם ישירות לסלון תצוגה של ספק אבני שיש מקצועי לרכישה."
        items={samples}
        columns={4}
        bgClass="bg-[var(--color-cream-darker)]"
        compactCard
        showLabel
        badge="הדמיה"
        emptyState=""
      />

      {/* ── SECTION 3: AI CONCEPTS ── */}
      <GallerySection
        id="concepts-gallery"
        eyebrow="הדמיות"
        title="תצוגות מקדימות מותאמות אישית"
        subtitle="כל לקוח מקבל 3 תצוגות מקדימות שנוצרות בעזרת בינה מלאכותית — לפני שחותכים אבן אחת."
        items={concepts}
        columns={3}
        bgClass="bg-[var(--color-cream)]"
        badge="הדמיה"
        emptyState=""
      />

      {/* ── SECTION 4: SKETCHES ── */}
      <GallerySection
        id="sketches-gallery"
        eyebrow="התהליך"
        title="כל כיור מתחיל בסקיצה"
        subtitle="לפני האבן, לפני ההדמיה — יש קו. רעיון על נייר. שיחה ראשונה."
        items={sketches}
        columns={4}
        bgClass="bg-[var(--color-cream-darker)]"
        compactCard
        emptyState=""
      />
    </>
  );
}

type GallerySectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  items: GalleryImage[];
  columns: 2 | 3 | 4;
  bgClass: string;
  compactCard?: boolean;
  badge?: string;
  showLabel?: boolean;
  emptyState: string;
};

function GallerySection({
  id,
  eyebrow,
  title,
  subtitle,
  items,
  columns,
  bgClass,
  compactCard,
  badge,
  showLabel,
  emptyState,
}: GallerySectionProps) {
  // Hide section completely if empty AND no custom empty state
  if (items.length === 0 && !emptyState) {
    return null;
  }

  const gridCols = {
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
  }[columns];

  return (
    <section id={id} className={`py-20 md:py-28 ${bgClass}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[var(--color-brass-dark)] text-xs font-medium tracking-[0.3em] uppercase mb-4">
            {eyebrow}
          </p>
          <h2 className="text-[var(--color-charcoal)] text-3xl md:text-5xl font-black mb-4 leading-tight">
            {title}
          </h2>
          <p className="text-[var(--color-charcoal)]/60 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        {items.length === 0 ? (
          <div className="text-center py-12 max-w-xl mx-auto">
            <div className="inline-block w-16 h-16 border-2 border-[var(--color-brass)]/30 rounded-full mb-6" />
            <p className="text-[var(--color-charcoal)]/60 text-base leading-relaxed">
              {emptyState}
            </p>
          </div>
        ) : (
          <div className={`grid ${gridCols} gap-4 md:gap-6`}>
            {items.map((item) => (
              <GalleryCard
                key={item.public_id}
                item={item}
                compact={compactCard}
                badge={badge}
                showLabel={showLabel}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

type GalleryCardProps = {
  item: GalleryImage;
  compact?: boolean;
  badge?: string;
  showLabel?: boolean;
};

function GalleryCard({ item, compact, badge, showLabel }: GalleryCardProps) {
  const displayName = filenameToDisplay(item.filename);

  return (
    <a href={item.url} target="_blank" rel="noopener noreferrer" className={`relative block overflow-hidden rounded-lg group cursor-pointer bg-[var(--color-charcoal)]/5 ${compact ? "aspect-[3/4]" : "aspect-square"}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={item.thumbnail_url} alt={displayName || "Marble Art"} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
      {badge && (
        <span className="absolute top-3 right-3 bg-[var(--color-charcoal)]/80 text-[var(--color-cream)] text-[10px] font-medium px-2.5 py-1 rounded-full backdrop-blur-sm tracking-wider uppercase">{badge}</span>
      )}
      {showLabel && displayName && (
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[var(--color-charcoal)]/90 to-transparent p-4 pt-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-[var(--color-cream)] text-sm font-medium text-center">{displayName}</p>
        </div>
      )}
    </a>
  );
}
