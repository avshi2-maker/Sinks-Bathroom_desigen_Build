import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  display: "swap",
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-heebo",
});

const SITE_URL = "https://www.marble-art.co.il";
const GA_MEASUREMENT_ID = "G-0VV9NZFRXP";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Marble Art Sinks — כיורי שיש איטלקי בעבודת יד | מרבל ארט",
    template: "%s | Marble Art Sinks",
  },
  description:
    "כיורי שיש איטלקי בעבודת יד בהזמנה אישית — למעצבי פנים, אדריכלים ובתים פרטיים. שיש Calacatta, Statuario ומדגסקר, גימור ידני ותצוגה מקדימה ב-AI לפני שחותכים את האבן. מבית מרבל ארט.",
  keywords: [
    "כיורי שיש",
    "כיור שיש איטלקי",
    "כיור שיש בעבודת יד",
    "כיור שיש בהזמנה אישית",
    "כיורי שיש למעצבי פנים",
    "כיורי שיש לאדריכלים",
    "כיור אמבטיה ייחודי",
    "כיור אמבטיה יוקרתי",
    "שיש מדגסקר",
    "כיור אומנותי",
    "כיור שיש מותאם אישית",
    "אומן שיש",
    "עיצוב כיורים משיש",
    "שיפוץ מקלחות ושרותים עם שיש",
    "שיפוץ אמבטיה יוקרתי",
    "אמבטיה לוילה",
    "כיור שיש לבן",
    "כיור שיש שחור",
    "כיור שיש עם זהב",
    "אגן רחצה שיש",
    "Calacatta",
    "Statuario",
    "Italian marble",
    "marble sink",
    "italian marble bathroom",
    "custom marble sink Israel",
    "marble sinks for interior designers",
    "marble sinks for architects",
    "artisan stone sink",
    "artistic handmade marble sink",
    "white marble sink",
    "custom design and build",
    "marble bathroom renovation",
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
  openGraph: {
    type: "website",
    locale: "he_IL",
    url: SITE_URL,
    siteName: "Marble Art Sinks",
    title: "Marble Art Sinks — כיורי שיש איטלקי בעבודת יד | מרבל ארט",
    description:
      "כיורי שיש איטלקי בעבודת יד בהזמנה אישית — למעצבי פנים, אדריכלים ובתים פרטיים. גימור ידני ותצוגה מקדימה ב-AI לפני שחותכים את האבן.",
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
      "כיורי שיש איטלקי בעבודת יד בהזמנה אישית — למעצבי פנים, אדריכלים ובתים פרטיים.",
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
    google: "8-TZvWs28rHhJlFYOEK2H7sWuR5m7Ht1oQ9xy8-G83Q",
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
      "כיורי שיש איטלקי בעבודת יד בהזמנה אישית, בשיתוף פעולה עם מעצבי פנים ואדריכלים. שיש Calacatta, Statuario ומדגסקר, גימור ידני אומנותי. שיפוץ מקלחות ואמבטיות מותאם אישית.",
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
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Artistic handmade marble sinks",
          description:
            "Custom-designed marble sinks crafted from Italian Calacatta, Statuario, and Madagascar agate.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Trade collaboration for interior designers and architects",
          description:
            "Bespoke marble sinks built to exact specification for interior designers and architects, with origin certificates and AI previews to present to their clients.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Luxury bathroom renovation",
          description:
            "Complete bathroom renovations featuring artisan marble work.",
        },
      },
    ],
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
      <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />
    </html>
  );
}
