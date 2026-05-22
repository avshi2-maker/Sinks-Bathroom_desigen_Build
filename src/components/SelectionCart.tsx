"use client";

import { useSelection } from "@/context/SelectionContext";

export function SelectionCart() {
  const { items, remove, count } = useSelection();

  if (count === 0) return null;

  const scrollToForm = () => {
    const form = document.getElementById("lead-form");
    if (form) {
      form.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[var(--color-charcoal)] border-t-2 border-[var(--color-brass)] shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-4">
        <div className="flex items-center gap-2 shrink-0">
          <span className="text-[var(--color-brass)] font-black text-xl">{count}</span>
          <span className="text-[var(--color-cream)] text-sm hidden sm:inline">פריטים נבחרו</span>
        </div>

        <div className="flex-1 flex items-center gap-2 overflow-x-auto py-1">
          {items.map((item) => (
            <div key={item.id} className="relative shrink-0 group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={item.thumbnailUrl} alt={item.name} className="w-12 h-12 rounded object-cover border border-[var(--color-cream)]/20" />
              <button type="button" onClick={() => remove(item.id)} className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-[10px] leading-none hover:bg-red-600" aria-label="הסר">×</button>
            </div>
          ))}
        </div>

        <button type="button" onClick={scrollToForm} className="shrink-0 bg-[var(--color-brass)] text-[var(--color-charcoal)] px-5 py-3 rounded-full font-bold text-sm hover:bg-[var(--color-cream)] transition-colors duration-300 whitespace-nowrap">המשך לטופס ←</button>
      </div>
    </div>
  );
}
