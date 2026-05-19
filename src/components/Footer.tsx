export function Footer() {
  const whatsapp = (
    process.env.NEXT_PUBLIC_BUSINESS_WHATSAPP || ""
  ).replace(/\D/g, "");

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

        {/* Contact options */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm mb-10">
          {whatsapp && (
            <a
              href={`https://wa.me/${whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--color-brass)] transition-colors"
            >
              וואטסאפ
            </a>
          )}
          <a
            href="mailto:avshi@marble-art.co.il"
            className="hover:text-[var(--color-brass)] transition-colors"
            dir="ltr"
          >
            avshi@marble-art.co.il
          </a>
          <a
            href="mailto:ales@marble-art.co.il"
            className="hover:text-[var(--color-brass)] transition-colors"
            dir="ltr"
          >
            ales@marble-art.co.il
          </a>
          <a
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
