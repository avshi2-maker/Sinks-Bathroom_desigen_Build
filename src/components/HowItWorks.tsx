const steps = [
  {
    num: "1",
    title: "מספרים",
    text: "ממלאים את הטופס: סגנון, תקציב, וקצת על הפרויקט.",
  },
  {
    num: "2",
    title: "AI מציג",
    text: "תוך 48 שעות תקבלו 3 תצוגות מקדימות באבנים שונות.",
  },
  {
    num: "3",
    title: "מאשרים",
    text: "בוחרים את האבן והגרסה שהתאהבתם בה.",
  },
  {
    num: "4",
    title: "נבנה",
    text: "האומנים בונים. תוך 14 יום הכיור שלכם מותקן.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 md:py-32 bg-[var(--color-charcoal)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 md:mb-20">
          <p className="text-[var(--color-brass)] text-xs font-medium tracking-[0.3em] uppercase mb-4">
            תהליך
          </p>
          <h2 className="text-[var(--color-cream)] text-3xl md:text-5xl font-black leading-tight">
            איך זה עובד
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-6 md:gap-8">
          {steps.map((s) => (
            <div
              key={s.num}
              className="bg-[var(--color-cream)] rounded-2xl p-8 hover:bg-[var(--color-brass)] transition-colors duration-300 group"
            >
              <div className="text-[var(--color-brass)] group-hover:text-[var(--color-charcoal)] text-5xl font-black mb-4 leading-none transition-colors duration-300">
                {s.num}
              </div>
              <h3 className="text-[var(--color-charcoal)] text-xl md:text-2xl font-bold mb-3">
                {s.title}
              </h3>
              <p className="text-[var(--color-charcoal)]/70 text-sm md:text-base leading-relaxed">
                {s.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
