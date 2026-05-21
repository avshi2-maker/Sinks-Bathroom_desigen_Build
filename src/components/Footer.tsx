"use client";

const WA_MESSAGE = "שלום, ראיתי את האתר של מרבל ארט ומעוניין/ת בכיור שיש.";

function trackEvent(eventName: string, params: Record<string, string | number>) {
  if (typeof window !== "undefined") {
    const w = window as unknown as { gtag?: (...args: unknown[]) => void };
    if (typeof w.gtag === "function") {
      w.gtag("event", eventName, params);
    }
  }
}

export function Footer() {
  const waText = encodeURIComponent(WA_MESSAGE);
  const avshiHref = "https://wa.me/972505231042?text=" + waText;
  const alesHref = "https://wa.me/972504029723?text=" + waText;
  const linkCls = "hover:text-[var(--color-brass)] transition-colors";

  const onAvshiClick = () => trackEvent("whatsapp_click", { contact: "avshi", location: "footer", phone: "972505231042" });
  const onAlesClick = () => trackEvent("whatsapp_click", { contact: "ales", location: "footer", phone: "972504029723" });
  const onFormClick = () => trackEvent("lead_form_click", { location: "footer" });

  return (
    <footer className="bg-[var(--color-charcoal)] text-[var(--color-cream)]/70 py-14">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-3 mb-3">
          <div className="w-8 h-8 bg-[var(--color-brass)] flex items-center justify-center rounded-sm">
            <span className="text-[var(--color-charcoal)] text-base font-black">M</span>
          </div>
          <p className="text-[var(--color-cream)] font-bold text-lg tracking-tight">Marble Art Sinks</p>
        </div>
        <p className="text-sm mb-8">כיורי שיש איטלקי בעבודת יד</p>
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm mb-10">
          <a href={avshiHref} target="_blank" rel="noopener noreferrer" onClick={onAvshiClick} className={linkCls}>וואטסאפ - אבשי 050-5231042</a>
          <a href={alesHref} target="_blank" rel="noopener noreferrer" onClick={onAlesClick} className={linkCls}>וואטסאפ - אלס 050-4029723</a>
          <a href="#lead-form" onClick={onFormClick} className={linkCls}>מלאו טופס</a>
        </div>
        <p className="text-xs text-[var(--color-cream)]/40">© 2026 Marble Art Sinks. כל הזכויות שמורות.</p>
      </div>
    </footer>
  );
}
