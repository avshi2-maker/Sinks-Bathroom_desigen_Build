import Link from "next/link";
import { LiveClock } from "./LiveClock";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[var(--color-cream)]/85 backdrop-blur-md border-b border-[var(--color-cream-darker)]">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center" aria-label="ARVO — דף הבית">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/arvo-logo.svg" alt="ARVO — בניה תשתיות פיתוח" width={240} height={220} className="h-16 md:h-20 w-auto" />
        </Link>
        <LiveClock />
        <div className="w-10 md:w-32" aria-hidden="true"></div>
      </div>
    </header>
  );
}
