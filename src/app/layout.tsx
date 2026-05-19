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

  // Title — 54 chars, optimal range 50-60
  title: {
    default: "Marble Art Sinks — כיורי שיש איטלקי בעבודת יד | מרבל ארט",
    template: "%s | Marble Art Sinks",
  },

  // Description — 137 chars, optimal range 110-160
  description:
    "כיורי שיש איטלקי בעבודת יד מאלס. שיש Calacatta, Statuario ומדגסקר. גימור ידני, תצוגה מקדימה ב-AI לפני שחותכים את האבן. מבית מרבל ארט.",

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

  authors: [{ name: "Marble Art Sinks", url: SITE_URL }],
  creator: "Marble Art Sinks",
  publisher: "Marble Art Sinks",

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

  // Open Graph — WhatsApp / Facebook / LinkedIn previews
  openGraph: {
    type: "website",
    locale: "he_IL",
    url: SITE_URL,
    siteName: "Marble Art Sinks",
    title: "Marble Art Sinks — כיורי שיש איטלקי בעבודת יד | מרבל ארט",
    description:
      "כיורי שיש איטלקי בעבודת יד מאלס. שיש Calacatta, Statuario ומדגסקר. גימור ידני, תצוגה מקדימה ב-AI לפני שחותכים את האבן. מבית מרבל ארט.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "כיור שיש אומנותי מאבן מדגסקר",
        type: "image/jpeg",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Marble Art Sinks — כיורי שיש איטלקי בעבודת יד",
    description:
      "כיורי שיש איטלקי בעבודת יד מאלס. תצוגה מקדימה ב-AI לפני שחותכים את האבן.",
    images: ["/og-image.jpg"],
  },

  alternates: {
    canonical: SITE_URL,
  },

  applicationName: "Marble Art Sinks",
  category: "Home & Garden / Bathroom Design",

  appleWebApp: {
    title: "Marble Art",
    statusBarStyle: "default",
  },

  verification: {
    // google: "REPLACE_WITH_VERIFICATION_CODE",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Marble Art Sinks",
    alternateName: "מרבל ארט",
    description:
      "כיורי שיש איטלקי בעבודת יד. שיש Calacatta, Statuario ומדגסקר. גימור ידני אומנותי.",
    url: SITE_URL,
    image: `${SITE_URL}/og-image.jpg`,
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
    sameAs: [],
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
