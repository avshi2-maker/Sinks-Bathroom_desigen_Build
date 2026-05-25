import Image from "next/image";
import { existsSync } from "node:fs";
import { join } from "node:path";
export function Hero() {
  const heroImagePath = join(process.cwd(), "public", "hero-render.jpg");
  const hasHeroImage = existsSync(heroImagePath);
  return (
    <section className="relative min-h-[88vh] flex items-center overflow-hidden bg-[var(--color-charcoal)]">
      <div className="absolute inset-0 z-0" style={{ background: "radial-gradient(ellipse at 30% 40%, #B89968 0%, #5a3a1a 25%, #1a1612 60%, #0F0F0F 100%)" }} aria-hidden="true" />
      {hasHeroImage && (
        <Image src="/hero-render.jpg" alt="כיור שיש אומנותי" fill priority quality={90} sizes="100vw" className="object-cover z-0" />
      )}
      <div className="absolute inset-0 z-10" style={{ background: "linear-gradient(270deg, rgba(15,15,15,0.92) 0%, rgba(15,15,15,0.65) 50%, rgba(15,15,15,0.25) 100%)" }} aria-hidden="true" />
      <div className="relative z-20 max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="max-w-2xl animate-fade-up">
          <p className="text-[var(--color-brass)] text-xs md:text-sm font-medium tracking-[0.3em] uppercase mb-6">כיורי שיש איטלקי יוקרתי בעבודת יד</p>
          <h1 className="text-[var(--color-cream)] text-4xl md:text-6xl lg:text-7xl font-black leading-[1.05] mb-8">אל תסתפקו בשיפוץ.<br /><span className="text-[var(--color-brass)]">צרו יצירת מופת.</span></h1>
          <p className="text-[var(--color-cream)]/85 text-lg md:text-xl leading-relaxed max-w-xl">כל כיור הוא יצירה בודדת. שיש איטלקי מובחר, חיתוך מדויק, גימור ידני יוקרתי. תצוגה מקדימה של הכיור שלכם — לפני שחתכנו אבן אחת.</p>
        </div>
      </div>
    </section>
  );
}
