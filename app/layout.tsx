import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://confiterialagruta.vercel.app"),
  title: "Confitería La Gruta | Pastelería Artesanal en Aracena, Huelva",
  description:
    "Confitería La Gruta en Aracena, Huelva. Especialistas en repostería artesanal: bizcochos, brazo de gitano, tartas de crema tostada, petisús y mucho más. Tradición y sabor en cada bocado.",
  keywords:
    "confitería, pastelería, repostería artesanal, Aracena, Huelva, tarta crema tostada, bizcocho, brazo gitano",
  openGraph: {
    title: "Confitería La Gruta | Pastelería Artesanal en Aracena",
    description:
      "Repostería artesanal con dedicación y amor. Visítanos en C/ Pintor Mario León Ruiz, 4B, Aracena (Huelva).",
    type: "website",
    locale: "es_ES",
    images: ["/fotos/escaparate_2.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Confitería La Gruta | Aracena",
    description: "Sabores auténticos de la Sierra de Aracena.",
    images: ["/fotos/escaparate_2.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Bakery",
    "name": "Confitería La Gruta",
    "image": "https://confiterialagruta.vercel.app/fotos/escaparate_2.jpg",
    "@id": "",
    "url": "https://confiterialagruta.vercel.app",
    "telephone": "+34690834617",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "C/ Pintor Mario León Ruiz, 4B",
      "addressLocality": "Aracena",
      "postalCode": "21200",
      "addressCountry": "ES"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 37.891776,
      "longitude": -6.567384
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Thursday", "Friday", "Saturday", "Sunday", "Monday"],
        "opens": "10:00",
        "closes": "14:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Thursday", "Friday", "Saturday", "Sunday", "Monday"],
        "opens": "16:00",
        "closes": "18:30"
      }
    ]
  };

  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  );
}
