import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { WhyUs } from "@/components/WhyUs";
import { HowItWorks } from "@/components/HowItWorks";
import { Gallery } from "@/components/Gallery";
import { LeadForm } from "@/components/LeadForm";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhyUs />
        <HowItWorks />
        <Gallery />

        <section
          id="lead-form"
          className="py-20 md:py-32 bg-[var(--color-cream-darker)]"
        >
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-12">
              <p className="text-[var(--color-brass-dark)] text-sm font-medium tracking-widest uppercase mb-3">
                בואו ניצור קשר
              </p>
              <h2 className="text-[var(--color-charcoal)] text-3xl md:text-5xl font-black mb-4">
                רוצים כיור משלכם?
              </h2>
              <p className="text-[var(--color-charcoal)]/60 text-lg max-w-xl mx-auto">
                מלאו פרטים בסיסיים ותוך 24-48 שעות תקבלו 3 תצוגות מקדימות מותאמות.
              </p>
            </div>
            <LeadForm />
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
