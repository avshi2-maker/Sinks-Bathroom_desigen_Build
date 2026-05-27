import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SelectionProvider } from "@/context/SelectionContext";

const SITE_URL = "https://www.marble-art.co.il";
const PAGE_PATH = "/marble-sinks-for-designers";

export const metadata: Metadata = {
  title: "כיורי שיש למעצבי פנים ולאדריכלים | מרבל ארט",
  description:
    "שותף ייצור לכיורי שיש איטלקי בעבודת יד, עבור מעצבי פנים ואדריכלים. ייצור לפי מפרט מדויק, תעודת מקור לכל אבן, והדמיית AI להצגה ללקוח לפני חיתוך האבן.",
  keywords: [
    "כיורי שיש למעצבי פנים",
    "כיורי שיש לאדריכלים",
    "כיור שיש בהזמנה אישית",
    "כיור שיש בעבודת יד",
    "שיש איטלקי למעצבים",
    "כיור גרניט פורצלן",
    "שותף ייצור שיש",
    "כיור שיש לפי מפרט",
    "כיור אמבטיה יוקרתי",
    "marble sinks for interior designers",
    "marble sinks for architects",
    "custom marble sink Israel",
  ],
  alternates: {
    canonical: `${SITE_URL}${PAGE_PATH}`,
  },
  openGraph: {
    type: "website",
    locale: "he_IL",
    url: `${SITE_URL}${PAGE_PATH}`,
    siteName: "Marble Art Sinks",
    title: "כיורי שיש למעצבי פנים ולאדריכלים | מרבל ארט",
    description:
      "שותף ייצור לכיורי שיש איטלקי בעבודת יד, עבור מעצבי פנים ואדריכלים. ייצור לפי מפרט מדויק, תעודת מקור לכל אבן, והדמיית AI להצגה ללקוח.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "כיור שיש אומנותי בהזמנה אישית למעצבי פנים",
        type: "image/jpeg",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const pillars = [
  {
    badge: "01",
    title: "שיתוף פעולה מלא",
    text: "אנחנו עובדים יד ביד עם מעצבי פנים ואדריכלים — מהסקיצה ועד ההתקנה — כדי לממש במדויק את החזון שעיצבתם עבור הלקוח. אתם שומרים על השליטה בעיצוב; אנחנו דואגים לביצוע.",
  },
  {
    badge: "02",
    title: "ייצור לפי מפרט מדויק",
    text: "כל כיור נחתך לפי המידות, הזוויות והפרופורציות שאתם מגדירים. שלחו שרטוט, קובץ או מידות גולמיות, ואלס בונה בהתאמה מושלמת לחלל שתכננתם.",
  },
  {
    badge: "03",
    title: "תיעוד מלא לכל חומר",
    text: "שיש איטלקי מובחר (Calacatta, Statuario, Saint Laurent), גרניט פורצלן ואריחים מדוקקים — עם תיעוד מלא לכל חומר. איכות שתוכלו להציג בגאווה ובשקיפות בפני הלקוחות שלכם.",
  },
  {
    badge: "04",
    title: "הדמיית AI להצגה ללקוח",
    text: "תצוגה מקדימה של הכיור בתוך החלל — כלי מכירה שמאפשר לכם לאשר עיצוב מול הלקוח עוד לפני שנחתכה אבן אחת, ולמנוע הפתעות בהמשך הדרך.",
  },
];

const steps = [
  {
    num: "1",
    title: "שולחים מפרט",
    text: "מידות, סגנון, שרטוט או תמונת החלל. כל פורמט מתקבל.",
  },
  {
    num: "2",
    title: "מקבלים הדמיה",
    text: "תוך 48 שעות — הדמיות AI של הכיור באבנים שונות, מוכנות להצגה ללקוח.",
  },
  {
    num: "3",
    title: "מאשרים יחד",
    text: "בוחרים את האבן והגרסה. אנחנו מתאמים מול ספק האבן והלקוח.",
  },
  {
    num: "4",
    title: "אנחנו בונים",
    text: "אלס חותך, מלטש ומרכיב ידנית. תוך 14 יום הכיור מותקן בפרויקט.",
  },
];

const sectionDark = "py-20 md:py-28 bg-[var(--color-charcoal)]";
const sectionLight = "py-20 md:py-28 bg-[var(--color-cream)]";
const eyebrowDark = "text-[var(--color-brass)] text-xs font-medium tracking-[0.3em] uppercase mb-4";
const eyebrowLight = "text-[var(--color-brass-dark)] text-xs font-medium tracking-[0.3em] uppercase mb-4";
const ctaButton = "inline-block bg-[var(--color-brass)] text-[var(--color-charcoal)] font-bold text-lg px-10 py-4 rounded-sm hover:bg-[var(--color-cream)] transition-colors";

export default function DesignersPage() {
  return (
    <SelectionProvider>
      <Header />
      <main>
        <section className="relative py-24 md:py-32 bg-[var(--color-charcoal)] overflow-hidden">
          <div className="absolute inset-0 z-0" style={{ background: "radial-gradient(ellipse at 30% 30%, #B89968 0%, #5a3a1a 25%, #1a1612 60%, #0F0F0F 100%)" }} aria-hidden="true" />
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <div className="text-right mb-8"><a href="/" className="text-[var(--color-cream)]/70 text-sm hover:text-[var(--color-brass)] transition-colors">→ חזרה לעמוד הבית</a></div>
            <p className={eyebrowDark}>למעצבי פנים ואדריכלים</p>
            <h1 className="text-[var(--color-cream)] text-4xl md:text-6xl font-black leading-[1.1] mb-6">כיורי שיש בהזמנה אישית — שותף הייצור שלכם</h1>
            <p className="text-[var(--color-cream)]/80 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">אתם מעצבים את החזון. אנחנו הופכים אותו לרהיט. כיורים בעבודת יד, מיוצרים בדיוק לפי המפרט והחומרים שבחרתם — עבור הלקוחות הפרטיים, הפרויקטים והוילות שאתם מתכננים.</p>
            <p className="text-[var(--color-brass)]/90 text-sm md:text-base tracking-[0.2em] mt-8">שיש · גרניט פורצלן · אריחים מדוקקים</p>
          </div>
        </section>

        <section className={sectionLight}>
          <div className="max-w-3xl mx-auto px-6">
            <p className={eyebrowLight}>מי אנחנו עבורכם</p>
            <h2 className="text-[var(--color-charcoal)] text-3xl md:text-4xl font-black leading-tight mb-8">לא ספק כיורים. שותף ייצור.</h2>
            <div className="space-y-5 text-[var(--color-charcoal)]/75 text-lg leading-relaxed">
              <p>מעצבי פנים ואדריכלים פונים אלינו כשהפרויקט דורש משהו שאי אפשר למצוא בקטלוג. כיור שיש שמתאים בדיוק לחלל שתכננתם — במידה, בצבע, בפרופורציה ובאופי. אנחנו לא מוכרים מדף; אנחנו מייצרים יצירה אחת, ייחודית, עבור הלקוח שלכם.</p>
              <p>אלס, אומן השיש שלנו, חותך ומלטש כל כיור ביד בסדנה בישראל. אנחנו עובדים מול חומרים מובחרים — שיש איטלקי (Calacatta, Statuario, Saint Laurent), גרניט פורצלן ואריחים מדוקקים — כל לוח נבחר ידנית ומגיע עם תיעוד מלא.</p>
              <p>החזון נשאר שלכם. אנחנו מביאים את היכולת הטכנית, את האבן, ואת הדיסקרטיות — כדי שתוכלו להבטיח ללקוח תוצאה שאף אחד אחר לא יכול לספק.</p>
            </div>
          </div>
        </section>

        <section className={sectionDark}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className={eyebrowDark}>למה לעבוד איתנו</p>
              <h2 className="text-[var(--color-cream)] text-3xl md:text-5xl font-black max-w-3xl mx-auto leading-tight">ארבע סיבות שמעצבים חוזרים אלינו</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
              {pillars.map((p) => (
                <div key={p.badge} className="text-right">
                  <div className="text-[var(--color-brass)] text-5xl font-black mb-6 leading-none">{p.badge}</div>
                  <h3 className="text-[var(--color-cream)] text-xl font-bold mb-4 leading-tight">{p.title}</h3>
                  <p className="text-[var(--color-cream)]/60 text-base leading-relaxed">{p.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={sectionLight}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className={eyebrowLight}>איך העבודה מתנהלת</p>
              <h2 className="text-[var(--color-charcoal)] text-3xl md:text-5xl font-black max-w-2xl mx-auto leading-tight">מהמפרט שלכם ועד ההתקנה</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
              {steps.map((s) => (
                <div key={s.num} className="text-right">
                  <div className="text-[var(--color-brass-dark)] text-4xl font-black mb-4 leading-none">{s.num}</div>
                  <h3 className="text-[var(--color-charcoal)] text-xl font-bold mb-3 leading-tight">{s.title}</h3>
                  <p className="text-[var(--color-charcoal)]/70 text-base leading-relaxed">{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={sectionDark}>
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-[var(--color-cream)] text-3xl md:text-4xl font-black leading-tight mb-6">יש לכם פרויקט שדורש כיור ייחודי?</h2>
            <p className="text-[var(--color-cream)]/70 text-lg leading-relaxed mb-10">שלחו לנו את המפרט או את החזון, ונחזור אליכם עם הדמיה והצעה. שיתוף פעולה דיסקרטי, באיכות אומנותית, בלוח זמנים שתוכלו לסמוך עליו.</p>
            <a href="/#lead-form" className={ctaButton}>בואו נשתף פעולה</a>
            <p className="text-[var(--color-cream)]/50 text-sm mt-6">מעדיפים לדבר ישירות? <a href="https://wa.me/972505231042" className="text-[var(--color-brass)] underline hover:text-[var(--color-cream)]">וואטסאפ לאבשי</a></p>
            <p className="mt-10"><a href="/" className="text-[var(--color-cream)]/70 text-base hover:text-[var(--color-brass)] transition-colors">→ חזרה לעמוד הבית</a></p>
          </div>
        </section>
      </main>
      <Footer />
    </SelectionProvider>
  );
}
