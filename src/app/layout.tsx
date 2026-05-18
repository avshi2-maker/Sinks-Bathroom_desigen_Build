import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import "./globals.css";

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  display: "swap",
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-heebo",
});

export const metadata: Metadata = {
  title: "Marble Art Sinks — כיורי שיש איטלקי בעבודת יד",
  description:
    "כיורי שיש אומנותיים בעבודת יד מאלס. שיש איטלקי מובחר, תצוגה מקדימה בבינה מלאכותית לפני שחותכים אבן.",
  openGraph: {
    title: "Marble Art Sinks",
    description: "כיורי שיש איטלקי בעבודת יד",
    type: "website",
    locale: "he_IL",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl" className={heebo.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
