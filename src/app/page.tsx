import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { WhyUs } from "@/components/WhyUs";
import { HowItWorks } from "@/components/HowItWorks";
import { Gallery } from "@/components/Gallery";
import { ForDesigners } from "@/components/ForDesigners";
import { LeadForm } from "@/components/LeadForm";
import { Footer } from "@/components/Footer";
import { SelectionProvider } from "@/context/SelectionContext";
import { SelectionCart } from "@/components/SelectionCart";

export default function Home() {
  return (
    <SelectionProvider>
      <Header />
      <main>
        <Hero />
        <WhyUs />
        <HowItWorks />
        {/*
         * Gallery renders 4 sections. Samples + Concepts are pickable
         * (customer adds to selection cart). Picks flow into the lead form.
         */}
        <Gallery />
        <ForDesigners />
        <section id="lead-form" className="py-20 md:py-32 bg-[var(--color-cream-darker)]">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-12">
              <p className="text-[var(--color-brass-dark)] text-sm font-medium tracking-widest uppercase mb-3">בואו ניצור קשר</p>
              <h2 className="text-[var(--color-charcoal)] text-3xl md:text-5xl font-black mb-4">מלאו פרטי בקשה</h2>
              <p className="text-[var(--color-charcoal)]/60 text-lg max-w-xl mx-auto">לפני שחותכים אבן יקרה — אפשרות להציג הדמייה הכוללת את הפרטים ששלחתם בטופס. מלאו פרטים ותוך 24-48 שעות נחזור אליכם.</p>
            </div>
            <LeadForm />
          </div>
        </section>
        <Footer />
      </main>
      <SelectionCart />
    </SelectionProvider>
  );
}
