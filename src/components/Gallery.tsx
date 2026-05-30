import { fetchGalleryFolder } from "@/lib/cloudinaryGallery";
import type { GalleryImage } from "@/lib/cloudinaryGallery";
import { GalleryCard } from "./GalleryCard";
import { VideoGallery } from "./VideoGallery";

/**
 * Marble Art Gallery — 4 themed sections. VideoGallery renders right
 * after the "כיורים שבנינו" section.
 */
export async function Gallery() {
  const [sinks, samples, concepts, sketches] = await Promise.all([
    fetchGalleryFolder("marble-art/sinks", 50),
    fetchGalleryFolder("marble-art/samples", 50),
    fetchGalleryFolder("marble-art/concepts", 50),
    fetchGalleryFolder("marble-art/sketches", 50),
  ]);

  return (
    <>
      <GallerySection
        id="sinks-gallery"
        eyebrow="העבודה שלנו"
        title="כיורים שבנינו"
        subtitle="כל כיור הוא יצירה ייחודית. סמנו את הכיורים שמדברים אליכם (לחצו על +) ונבנה משהו דומה עבורכם."
        items={sinks}
        columns={3}
        bgClass="bg-[var(--color-cream)]"
        pickable
        emptyState="גלריית הכיורים נפתחת בקרוב — נוסיף תמונות חדשות בכל שבוע."
      />

      <VideoGallery />

      <GallerySection
        id="samples-gallery"
        eyebrow="חומרי גלם"
        title="אבני שיש לבחירה"
        subtitle="התמונות הן הדמיות בלבד. סמנו את האבנים שאהבתם (לחצו על +) ונמשיך יחד בטופס. לאחר שתבחרו — נפנה אתכם לסלון תצוגה של ספק אבני שיש מקצועי לרכישה."
        items={samples}
        columns={4}
        bgClass="bg-[var(--color-cream-darker)]"
        compactCard
        showLabel
        badge="הדמיה"
        pickable
        emptyState=""
      />

      <GallerySection
        id="concepts-gallery"
        eyebrow="הדמיות"
        title="תצוגות מקדימות מותאמות אישית"
        subtitle="לפני שחותכים אבן יקרה — סמנו את הסגנונות שאהבתם (לחצו על +), ונציג לכם הדמייה הכוללת את הפרטים ששלחתם בטופס."
        items={concepts}
        columns={3}
        bgClass="bg-[var(--color-cream)]"
        badge="הדמיה"
        pickable
        emptyState=""
      />

      <GallerySection
        id="sketches-gallery"
        eyebrow="התהליך"
        title="כל כיור מתחיל בסקיצה"
        subtitle="לפני האבן, לפני ההדמיה — יש קו. סמנו סקיצות שמעניינות אתכם (לחצו על +)."
        items={sketches}
        columns={4}
        bgClass="bg-[var(--color-cream-darker)]"
        compactCard
        pickable
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
  pickable?: boolean;
  emptyState: string;
};

function GallerySection({ id, eyebrow, title, subtitle, items, columns, bgClass, compactCard, badge, showLabel, pickable, emptyState }: GallerySectionProps) {
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
          <p className="text-[var(--color-brass-dark)] text-xs font-medium tracking-[0.3em] uppercase mb-4">{eyebrow}</p>
          <h2 className="text-[var(--color-charcoal)] text-3xl md:text-5xl font-black mb-4 leading-tight">{title}</h2>
          <p className="text-[var(--color-charcoal)]/60 max-w-2xl mx-auto leading-relaxed">{subtitle}</p>
        </div>
        {items.length === 0 ? (
          <div className="text-center py-12 max-w-xl mx-auto">
            <div className="inline-block w-16 h-16 border-2 border-[var(--color-brass)]/30 rounded-full mb-6" />
            <p className="text-[var(--color-charcoal)]/60 text-base leading-relaxed">{emptyState}</p>
          </div>
        ) : (
          <div className={`grid ${gridCols} gap-4 md:gap-6`}>
            {items.map((item) => (<GalleryCard key={item.public_id} item={item} compact={compactCard} badge={badge} showLabel={showLabel} pickable={pickable} section={title} />))}
          </div>
        )}
      </div>
    </section>
  );
}
