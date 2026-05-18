"use client";

import { useState } from "react";

/**
 * Validates Israeli phone numbers.
 *
 * Accepts:
 *   - Mobile: 05X-XXXXXXX (10 digits starting with 05)
 *   - Landline: 0X-XXXXXXX (9 digits, X = 2/3/4/8/9)
 *   - With or without dashes, spaces, parentheses
 *   - With or without +972 country code (which replaces leading 0)
 *
 * Returns:
 *   { ok: true, normalized: '0501234567' } — when valid
 *   { ok: false, reason: 'too_short' | 'too_long' | 'invalid_prefix' | 'empty' }
 */
export function validateIsraeliPhone(input: string):
  | { ok: true; normalized: string }
  | { ok: false; reason: "empty" | "too_short" | "too_long" | "invalid_prefix" } {
  if (!input || !input.trim()) return { ok: false, reason: "empty" };

  // Strip everything except digits and leading +
  let digits = input.replace(/[^\d+]/g, "");

  // Convert +972XXX to 0XXX
  if (digits.startsWith("+972")) digits = "0" + digits.slice(4);
  else if (digits.startsWith("972")) digits = "0" + digits.slice(3);

  if (digits.length < 9) return { ok: false, reason: "too_short" };
  if (digits.length > 10) return { ok: false, reason: "too_long" };

  // Must start with 0
  if (!digits.startsWith("0")) return { ok: false, reason: "invalid_prefix" };

  // Mobile: 05X + 7 digits = 10 total
  if (digits.length === 10) {
    if (!digits.startsWith("05")) return { ok: false, reason: "invalid_prefix" };
    return { ok: true, normalized: digits };
  }

  // Landline: 0X + 7 digits = 9 total, X must be 2/3/4/8/9
  if (digits.length === 9) {
    const secondDigit = digits[1];
    if (!["2", "3", "4", "8", "9"].includes(secondDigit)) {
      return { ok: false, reason: "invalid_prefix" };
    }
    return { ok: true, normalized: digits };
  }

  return { ok: false, reason: "too_short" };
}

type PhoneInputProps = {
  id: string;
  name: string;
  required?: boolean;
  placeholder?: string;
  defaultValue?: string;
};

export function PhoneInput({
  id,
  name,
  required,
  placeholder,
  defaultValue,
}: PhoneInputProps) {
  const [value, setValue] = useState(defaultValue || "");
  const [touched, setTouched] = useState(false);

  const validation = validateIsraeliPhone(value);
  const isValid = validation.ok;
  const showState = touched && value.length > 0;

  // Border + ring color based on state
  let borderClasses = "border-[var(--color-cream-darker)] focus:border-[var(--color-brass)] focus:ring-[var(--color-brass)]/20";
  if (showState && isValid) {
    borderClasses = "border-green-500 focus:border-green-600 focus:ring-green-500/20";
  } else if (showState && !isValid) {
    borderClasses = "border-red-400 focus:border-red-500 focus:ring-red-400/20";
  }

  // Error message in Hebrew based on reason
  let errorMessage: string | null = null;
  if (showState && !isValid && !validation.ok) {
    switch (validation.reason) {
      case "too_short":
        errorMessage = "המספר קצר מדי. מספר נייד הוא 10 ספרות (05X-XXXXXXX).";
        break;
      case "too_long":
        errorMessage = "המספר ארוך מדי.";
        break;
      case "invalid_prefix":
        errorMessage = "מספר לא תקין. נייד מתחיל ב-05, קווי ב-02/03/04/08/09.";
        break;
      default:
        errorMessage = null;
    }
  }

  return (
    <div>
      <div className="relative">
        <input
          id={id}
          name={name}
          type="tel"
          required={required}
          dir="ltr"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onBlur={() => setTouched(true)}
          className={`w-full px-4 py-3 pe-12 border rounded-lg bg-white text-[var(--color-charcoal)] focus:outline-none focus:ring-2 transition-all text-right ${borderClasses}`}
          placeholder={placeholder || "050-1234567"}
          autoComplete="tel"
        />
        {/* Validation icon on the left (LTR phone input, so left = end-of-content) */}
        {showState && (
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            {isValid ? (
              <span className="text-green-500 text-xl font-bold" aria-label="תקין">
                ✓
              </span>
            ) : (
              <span className="text-red-400 text-xl font-bold" aria-label="לא תקין">
                ✗
              </span>
            )}
          </div>
        )}
      </div>
      {errorMessage && (
        <p className="text-red-600 text-xs mt-1.5">{errorMessage}</p>
      )}
    </div>
  );
}
