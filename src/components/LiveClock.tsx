"use client";

import { useState, useEffect } from "react";

export function LiveClock() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  if (!now) return null;

  const dateStr = now.toLocaleDateString("he-IL", { day: "2-digit", month: "2-digit", year: "numeric" });
  const timeStr = now.toLocaleTimeString("he-IL", { hour: "2-digit", minute: "2-digit", second: "2-digit" });

  return (
    <div className="flex flex-col items-center leading-tight" dir="ltr">
      <span className="text-[var(--color-charcoal)] font-bold text-sm md:text-base tabular-nums">{timeStr}</span>
      <span className="text-[var(--color-charcoal)]/50 text-[10px] md:text-xs tabular-nums">{dateStr}</span>
    </div>
  );
}
