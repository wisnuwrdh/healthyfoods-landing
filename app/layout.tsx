import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://healthyfoods.id"),
  title: "HealthyFooDs - Makan Sehat Setiap Hari, Tanpa Ribet",
  description:
    "Makanan bernutrisi, siap santap, langsung diantar ke kamu. Tidak perlu masak. Tidak perlu hitung kalori. Tidak perlu bingung pilih menu.",
  openGraph: {
    title: "HealthyFooDs - Makan Sehat Setiap Hari, Tanpa Ribet",
    description:
      "Makanan bernutrisi, siap santap, langsung diantar ke kamu.",
    type: "website",
    images: [{ url: "/images/hero-image.png", width: 1200, height: 630, alt: "HealthyFooDs" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
