export function Footer() {
  // Pre-filled WhatsApp message - encoded for URL
  const waMessage = encodeURIComponent(
    "שלום, ראיתי את האתר של מרבל ארט ומעוניין/ת בכיור שיש."
  );

  return (
    <footer className="bg-[var(--color-charcoal)] text-[var(--color-cream)]/70 py-14">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-3 mb-3">
          <div className="w-8 h-8 bg-[var(--color-brass)] flex items-center justify-center rounded-sm">
            <span className="text-[var(--color-charcoal)] text-base font-black">
              M
            </span>
          </div>
          <p className="text-[var(--color-cream)] font-bold text-lg tracking-tight">
            Marble Art Sinks
          </p>
        </div>
        <p className="text-sm mb-8">כיורי שיש איטלקי בעבודת יד</p>

        {/* Contact options - WhatsApp direct to each owner */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm mb-10">
          
            href={`https://wa.me/972505231042?text=${waMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--color-brass)] transition-colors"
          >
            וואטסאפ - אבשי 050-5231042
          </a>
          
            href={`https://wa.me/972504029723?text=${waMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--color-brass)] transition-colors"
          >
            וואטסאפ - אלס 050-4029723
          </a>
          
            href="#lead-form"
            className="hover:text-[var(--color-brass)] transition-colors"
          >
            מלאו טופס
          </a>
        </div>

        <p className="text-xs text-[var(--color-cream)]/40">
          © 2026 Marble Art Sinks. כל הזכויות שמורות.
        </p>
      </div>
    </footer>
  );
}
