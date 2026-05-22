"use client";

import { filenameToDisplay } from "@/lib/cloudinaryGallery";
import type { GalleryImage } from "@/lib/cloudinaryGallery";
import { useSelection } from "@/context/SelectionContext";

type GalleryCardProps = {
  item: GalleryImage;
  compact?: boolean;
  badge?: string;
  showLabel?: boolean;
  pickable?: boolean;
  section?: string;
};

export function GalleryCard({ item, compact, badge, showLabel, pickable, section }: GalleryCardProps) {
  const displayName = filenameToDisplay(item.filename);
  const { toggle, isSelected } = useSelection();
  const selected = isSelected(item.public_id);

  const handlePick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggle({ id: item.public_id, name: displayName || "פריט", thumbnailUrl: item.thumbnail_url, section: section || "" });
  };

  const cardCls = `relative block overflow-hidden rounded-lg group cursor-pointer bg-[var(--color-charcoal)]/5 ${compact ? "aspect-[3/4]" : "aspect-square"} ${selected ? "ring-4 ring-[var(--color-brass)]" : ""}`;

  return (
    <a href={item.url} target="_blank" rel="noopener noreferrer" className={cardCls}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={item.thumbnail_url} alt={displayName || "Marble Art"} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
      {badge && (<span className="absolute top-3 right-3 bg-[var(--color-charcoal)]/80 text-[var(--color-cream)] text-[10px] font-medium px-2.5 py-1 rounded-full backdrop-blur-sm tracking-wider uppercase">{badge}</span>)}
      {pickable && (
        <button type="button" onClick={handlePick} className={`absolute top-3 left-3 w-9 h-9 rounded-full flex items-center justify-center text-lg transition-all duration-200 ${selected ? "bg-[var(--color-brass)] text-[var(--color-charcoal)]" : "bg-white/80 text-[var(--color-charcoal)]/60 hover:bg-white"}`} aria-label={selected ? "הסר מהבחירה" : "הוסף לבחירה"}>{selected ? "✓" : "+"}</button>
      )}
      {showLabel && displayName && (
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[var(--color-charcoal)]/90 to-transparent p-4 pt-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-[var(--color-cream)] text-sm font-medium text-center">{displayName}</p>
        </div>
      )}
    </a>
  );
}
