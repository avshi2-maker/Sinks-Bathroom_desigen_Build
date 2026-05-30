const reasons = [
  {
    badge: "01",
    title: "שיש איטלקי, גרניט פורצלן ואריחים מדוקקים",
    text: "Calacatta, Statuario, Saint Laurent, גרניט פורצלן ואבנים אקזוטיות. כל לוח נבחר ידנית עם תעודת מקור.",
  },
  {
    badge: "02",
    title: "עבודת יד אומנותית",
    text: "אומני העיצוב, החיתוך והבנייה שלנו חותכים, מלטשים ומרכיבים כל כיור באופן ידני בסדנה בישראל. אין שני כיורים זהים.",
  },
  {
    badge: "03",
    title: "ללא מגבלות אורך",
    text: "כיור באורך 1.20 עד 2.40 מ׳ ללא חיבורים — או כל גודל נדרש עם חיבורים סמויים, כמעט בלתי נראים.",
  },
  {
    badge: "04",
    title: "כיור תלוי — ללא שידה",
    text: "התקנה תלויה על הקיר, ללא ארון תחתון — מראה מרחף, נקי ומודרני, שמשחרר את רצפת חדר הרחצה.",
  },
  {
    badge: "05",
    title: "הדמיית AI לפני ייצור",
    text: "לפני שחותכים אבן יקרה, אפשרות להציג הדמייה הכוללת את הפרטים ששלחתם בטופס.",
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
            היתרונות שמייחדים אותנו
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
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