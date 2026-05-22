import { LiveClock } from "./LiveClock";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[var(--color-cream)]/85 backdrop-blur-md border-b border-[var(--color-cream-darker)]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[var(--color-charcoal)] flex items-center justify-center rounded-sm">
            <span className="text-[var(--color-cream)] text-xl font-black">M</span>
          </div>
          <span className="text-[var(--color-charcoal)] font-bold text-lg tracking-tight">Marble Art</span>
        </div>
        <LiveClock />
        <div className="w-10 md:w-32" aria-hidden="true"></div>
      </div>
    </header>
  );
}
