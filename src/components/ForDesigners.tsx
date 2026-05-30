const pillars = [
  {
    badge: "01",
    title: "שיתוף פעולה מלא",
    text: "אנחנו עובדים יד ביד עם מעצבי פנים ואדריכלים — מהסקיצה ועד ההתקנה — כדי לממש במדויק את החזון שעיצבתם עבור הלקוח.",
  },
  {
    badge: "02",
    title: "ייצור לפי מפרט מדויק",
    text: "כל כיור נחתך לפי המידות, הזוויות והפרופורציות שאתם מגדירים. שלחו שרטוט או מידות, האומנים בונים בהתאמה מושלמת.",
  },
  {
    badge: "03",
    title: "תיעוד מלא לכל חומר",
    text: "שיש איטלקי, גרניט פורצלן ואריחים מדוקקים מובחרים — עם תיעוד מלא לכל חומר, שתוכלו להציג בגאווה בפני הלקוחות שלכם.",
  },
  {
    badge: "04",
    title: "הדמיית AI להצגה ללקוח",
    text: "תצוגה מקדימה של הכיור בתוך החלל — כלי מכירה שמאפשר לכם לאשר עיצוב מול הלקוח עוד לפני שנחתכה אבן.",
  },
];

export function ForDesigners() {
  return (
    <section className="py-20 md:py-32 bg-[var(--color-charcoal)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10 md:mb-12">
          <p className="text-[var(--color-brass)] text-xs font-medium tracking-[0.3em] uppercase mb-4">למעצבי פנים ואדריכלים</p>
          <h2 className="text-[var(--color-cream)] text-3xl md:text-5xl font-black max-w-3xl mx-auto leading-tight mb-6">השותף שלכם ליצירות שיש — עבור הלקוחות שלכם</h2>
          <p className="text-[var(--color-cream)]/70 text-lg max-w-2xl mx-auto leading-relaxed">הגלריה שלמעלה היא תיק העבודות שלכם. הציגו אותה ללקוחות, ואנחנו נבנה בדיוק לפי המפרט — בדיסקרטיות, באיכות אומנותית ובלוח זמנים שתוכלו לסמוך עליו.</p>
        </div>

        <a href="/marble-sinks-for-designers" className="group block max-w-2xl mx-auto mb-16 md:mb-20 rounded-lg border border-[var(--color-brass)]/60 bg-[var(--color-brass)]/10 px-8 py-7 text-center hover:bg-[var(--color-brass)]/20 hover:border-[var(--color-brass)] transition-colors">
          <p className="text-[var(--color-brass)] text-xl md:text-2xl font-black mb-2">מעצבים ואדריכלים?</p>
          <p className="text-[var(--color-cream)]/85 text-base md:text-lg">יש לנו עמוד ייעודי עם כל מה שצריך לדעת על שיתוף פעולה <span className="text-[var(--color-brass)] font-bold inline-block group-hover:-translate-x-1 transition-transform">←</span></p>
        </a>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-16">
          {pillars.map((p) => (
            <div key={p.badge} className="text-right">
              <div className="text-[var(--color-brass)] text-5xl font-black mb-6 leading-none">{p.badge}</div>
              <h3 className="text-[var(--color-cream)] text-xl font-bold mb-4 leading-tight">{p.title}</h3>
              <p className="text-[var(--color-cream)]/60 text-base leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a href="#lead-form" className="inline-block bg-[var(--color-brass)] text-[var(--color-charcoal)] font-bold text-lg px-10 py-4 rounded-sm hover:bg-[var(--color-cream)] transition-colors">בואו נשתף פעולה</a>
          <p className="text-[var(--color-cream)]/50 text-sm mt-5">מעדיפים לדבר ישירות? <a href="https://wa.me/972505231042" className="text-[var(--color-brass)] underline hover:text-[var(--color-cream)]">וואטסאפ לאבשי</a></p>
        </div>
      </div>
    </section>
  );
}
