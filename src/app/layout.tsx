import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import "./globals.css";

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  display: "swap",
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-heebo",
});

const SITE_URL = "https://www.marble-art.co.il";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  // Title — appears in browser tab + Google results
  title: {
    default: "Marble Art — כיורי שיש איטלקי בעבודת יד | מרבל ארט",
    template: "%s | Marble Art Sinks",
  },

  // Description — appears under title in Google results
  description:
    "כיורי שיש איטלקי בעבודת יד מאלס. שיש מובחר מאיטליה ומדגסקר, גימור ידני, ותצוגה מקדימה בבינה מלאכותית לפני שחותכים אבן. כיורים ייחודיים לחדרי אמבטיה יוקרתיים.",

  // Keywords (Hebrew + English) — used by some search engines, social platforms
  keywords: [
    "כיורי שיש",
    "כיור שיש איטלקי",
    "כיור שיש בעבודת יד",
    "כיור אמבטיה יוקרתי",
    "Calacatta",
    "Statuario",
    "שיש מדגסקר",
    "כיור אומנותי",
    "כיור שיש מותאם אישית",
    "אומן שיש",
    "marble sink",
    "italian marble bathroom",
    "custom marble sink Israel",
    "artisan stone sink",
    "luxury bathroom Israel",
  ],

  // Author / publisher metadata
  authors: [{ name: "Marble Art Sinks", url: SITE_URL }],
  creator: "Marble Art Sinks",
  publisher: "Marble Art Sinks",

  // Robot directives (allow indexing)
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Open Graph — controls WhatsApp / Facebook / LinkedIn link previews
  openGraph: {
    type: "website",
    locale: "he_IL",
    url: SITE_URL,
    siteName: "Marble Art Sinks",
    title: "Marble Art — כיורי שיש איטלקי בעבודת יד",
    description:
      "כיורי שיש איטלקי בעבודת יד. שיש מובחר, גימור ידני, תצוגה מקדימה בבינה מלאכותית.",
    images: [
      {
        url: "/hero-render.jpg",
        width: 1200,
        height: 630,
        alt: "כיור שיש אומנותי מאבן מדגסקר",
      },
    ],
  },

  // Twitter card (same image, used on Twitter/X link previews)
  twitter: {
    card: "summary_large_image",
    title: "Marble Art — כיורי שיש איטלקי בעבודת יד",
    description: "כיורי שיש איטלקי בעבודת יד. תצוגה מקדימה ב-AI לפני בנייה.",
    images: ["/hero-render.jpg"],
  },

  // Canonical URL — tells Google "the official version is this"
  alternates: {
    canonical: SITE_URL,
  },

  // Application metadata
  applicationName: "Marble Art Sinks",
  category: "Home & Garden / Bathroom Design",

  // Apple/iOS specific
  appleWebApp: {
    title: "Marble Art",
    statusBarStyle: "default",
  },

  // Verification (placeholders — fill in when you set up Google Search Console)
  verification: {
    // google: "REPLACE_WITH_VERIFICATION_CODE",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // JSON-LD structured data for LocalBusiness — helps Google understand the business
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Marble Art Sinks",
    alternateName: "מרבל ארט",
    description: "כיורי שיש איטלקי בעבודת יד. שיש מובחר וגימור אומנותי.",
    url: SITE_URL,
    image: `${SITE_URL}/hero-render.jpg`,
    priceRange: "₪₪₪",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IL",
      addressRegion: "Israel",
    },
    areaServed: {
      "@type": "Country",
      name: "Israel",
    },
    sameAs: [
      // Add Facebook / Instagram URLs here when ready
    ],
  };

  return (
    <html lang="he" dir="rtl" className={heebo.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
