"use client";

import { useState } from "react";
import { submitLead } from "@/app/actions";
import { PhoneInput, validateIsraeliPhone } from "./PhoneInput";

const BUDGET_TIERS = [
  { value: "tier_1_8k_15k", label: "8,000 - 15,000 ₪", desc: "תקציב יעיל" },
  { value: "tier_2_15k_25k", label: "15,000 - 25,000 ₪", desc: "סטנדרט פרימיום" },
  { value: "tier_3_25k_50k", label: "25,000 - 50,000 ₪", desc: "אומנותי" },
  { value: "tier_4_50k_plus", label: "50,000+ ₪", desc: "יצירת מופת" },
];

const PROJECT_TYPES = [
  { value: "renovation", label: "שיפוץ" },
  { value: "new_construction", label: "בנייה חדשה" },
  { value: "replacement", label: "החלפה" },
  { value: "commercial", label: "מסחרי" },
];

export function LeadForm() {
  const [pending, setPending] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    const formData = new FormData(e.currentTarget);
    const phone = (formData.get("phone") as string)?.trim() || "";

    const phoneCheck = validateIsraeliPhone(phone);
    if (!phoneCheck.ok) {
      setError("אנא הזינו מספר טלפון ישראלי תקין (נייד או קווי).");
      return;
    }

    formData.set("phone", phoneCheck.normalized);

    setPending(true);
    formData.append("inspiration_urls_json", JSON.stringify([]));

    const result = await submitLead(formData);
    setPending(false);

    if (result.success) {
      setDone(true);
    } else {
      setError(result.error);
    }
  }

  if (done) {
    return (
      <div className="bg-[var(--color-cream)] border-2 border-[var(--color-brass)] rounded-2xl p-10 md:p-14 text-center">
        <div className="w-16 h-16 bg-[var(--color-brass)] rounded-full mx-auto mb-6 flex items-center justify-center">
          <span className="text-[var(--color-charcoal)] text-3xl font-black">✓</span>
        </div>
        <h3 className="text-[var(--color-charcoal)] text-3xl font-black mb-4">
          תודה רבה!
        </h3>
        <p className="text-[var(--color-charcoal)]/70 text-lg max-w-md mx-auto leading-relaxed">
          קיבלנו את הפרטים. אלס יחזור אליכם תוך 24-48 שעות בוואטסאפ עם 3 תצוגות מקדימות
          מותאמות אישית לפרויקט שלכם.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 bg-[var(--color-cream)] rounded-2xl p-6 md:p-10 shadow-lg"
    >
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="full_name" className="block text-[var(--color-charcoal)] font-medium mb-2 text-sm">
            שם מלא *
          </label>
          <input
            id="full_name"
            name="full_name"
            required
            className="w-full px-4 py-3 border border-[var(--color-cream-darker)] rounded-lg bg-white text-[var(--color-charcoal)] focus:border-[var(--color-brass)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brass)]/20 transition-all"
            placeholder="ישראל ישראלי"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-[var(--color-charcoal)] font-medium mb-2 text-sm">
            טלפון *
          </label>
          <PhoneInput id="phone" name="phone" required placeholder="050-1234567" />
        </div>
      </div>

      <div>
        <label htmlFor="city_he" className="block text-[var(--color-charcoal)] font-medium mb-2 text-sm">
          עיר
        </label>
        <input
          id="city_he"
          name="city_he"
          className="w-full px-4 py-3 border border-[var(--color-cream-darker)] rounded-lg bg-white text-[var(--color-charcoal)] focus:border-[var(--color-brass)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brass)]/20 transition-all"
          placeholder="תל אביב, ירושלים, חיפה..."
        />
      </div>

      <div>
        <label className="block text-[var(--color-charcoal)] font-medium mb-3 text-sm">
          סוג פרויקט
        </label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {PROJECT_TYPES.map((p) => (
            <label key={p.value} className="cursor-pointer">
              <input type="radio" name="project_type" value={p.value} className="sr-only peer" />
              <div className="px-4 py-3 border-2 border-[var(--color-cream-darker)] rounded-lg bg-white text-center text-sm transition-all peer-checked:border-[var(--color-brass)] peer-checked:bg-[var(--color-brass)]/10 hover:border-[var(--color-brass)]/50">
                {p.label}
              </div>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-[var(--color-charcoal)] font-medium mb-3 text-sm">
          תקציב משוער (אופציונלי — עוזר לנו להציע התאמות מדויקות)
        </label>
        <div className="grid md:grid-cols-2 gap-3">
          {BUDGET_TIERS.map((b) => (
            <label key={b.value} className="cursor-pointer">
              <input type="radio" name="budget_tier" value={b.value} className="sr-only peer" />
              <div className="px-5 py-4 border-2 border-[var(--color-cream-darker)] rounded-lg bg-white transition-all peer-checked:border-[var(--color-brass)] peer-checked:bg-[var(--color-brass)]/10 hover:border-[var(--color-brass)]/50">
                <div className="font-bold text-[var(--color-charcoal)]">{b.label}</div>
                <div className="text-sm text-[var(--color-charcoal)]/60 mt-1">{b.desc}</div>
              </div>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="notes_he" className="block text-[var(--color-charcoal)] font-medium mb-2 text-sm">
          הערות (אופציונלי)
        </label>
        <textarea
          id="notes_he"
          name="notes_he"
          rows={4}
          className="w-full px-4 py-3 border border-[var(--color-cream-darker)] rounded-lg bg-white text-[var(--color-charcoal)] focus:border-[var(--color-brass)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brass)]/20 transition-all resize-none"
          placeholder="סגנון מועדף, אבן מסוימת, לוח זמנים, או כל דבר אחר שתרצו שנדע..."
        />
      </div>

      {error && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 text-sm">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={pending}
        className="w-full bg-[var(--color-charcoal)] text-[var(--color-cream)] py-5 rounded-full font-bold text-lg hover:bg-[var(--color-brass)] hover:text-[var(--color-charcoal)] disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300"
      >
        {pending ? "שולח..." : "שלחו אלינו פרטים ←"}
      </button>

      <p className="text-center text-[var(--color-charcoal)]/50 text-xs">
        לא נשלח ספאם. אלס יחזור אליכם תוך 24-48 שעות בוואטסאפ.
      </p>
    </form>
  );
}
