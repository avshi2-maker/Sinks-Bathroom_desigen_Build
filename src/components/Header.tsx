export function Header() {
  const whatsapp = (
    process.env.NEXT_PUBLIC_BUSINESS_WHATSAPP || ""
  ).replace(/\D/g, "");
  const whatsappUrl = whatsapp ? `https://wa.me/${whatsapp}` : "#lead-form";

  return (
    <header className="sticky top-0 z-50 bg-[var(--color-cream)]/85 backdrop-blur-md border-b border-[var(--color-cream-darker)]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[var(--color-charcoal)] flex items-center justify-center rounded-sm">
            <span className="text-[var(--color-cream)] text-xl font-black">
              M
            </span>
          </div>
          <span className="text-[var(--color-charcoal)] font-bold text-lg tracking-tight">
            Marble Art
          </span>
        </div>

        <a
          href={whatsappUrl}
          target={whatsapp ? "_blank" : undefined}
          rel={whatsapp ? "noopener noreferrer" : undefined}
          className="bg-[var(--color-charcoal)] text-[var(--color-cream)] px-5 py-2.5 rounded-full font-medium text-sm md:text-base hover:bg-[var(--color-brass)] hover:text-[var(--color-charcoal)] transition-colors duration-300"
        >
          וואטסאפ
        </a>
      </div>
    </header>
  );
}
