const reasons = [
  {
    badge: "01",
    title: "שיש איטלקי מובחר",
    text: "Calacatta, Statuario, Saint Laurent, ועוד אבנים אקזוטיות מקרארה ועד מדגסקר. כל לוח נבחר ידנית עם תעודת מקור.",
  },
  {
    badge: "02",
    title: "עבודת יד אומנותית",
    text: "אלס, אומן השיש שלנו, חותך, מלטש ומרכיב כל כיור באופן ידני בסדנה בישראל. אין שני כיורים זהים.",
  },
  {
    badge: "03",
    title: "תצוגה מקדימה ב-AI",
    text: "לפני שחותכים אבן יקרה — אתם רואים בדיוק איך הכיור ייראה. ברזית האבן שלכם, במרחב שלכם.",
  },
];

export function WhyUs() {
  return (
    <section className="py-20 md:py-32 bg-[var(--color-cream)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 md:mb-20">
          <p className="text-[var(--color-brass-dark)] text-xs font-medium tracking-[0.3em] uppercase mb-4">
            למה אנחנו
          </p>
          <h2 className="text-[var(--color-charcoal)] text-3xl md:text-5xl font-black max-w-2xl mx-auto leading-tight">
            שלושה דברים שמייחדים אותנו
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10 md:gap-12">
          {reasons.map((r) => (
            <div key={r.badge} className="text-right">
              <div className="text-[var(--color-brass)] text-5xl font-black mb-6 leading-none">
                {r.badge}
              </div>
              <h3 className="text-[var(--color-charcoal)] text-2xl font-bold mb-4 leading-tight">
                {r.title}
              </h3>
              <p className="text-[var(--color-charcoal)]/70 text-base leading-relaxed">
                {r.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
