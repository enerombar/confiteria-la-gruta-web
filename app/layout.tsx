import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
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
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
