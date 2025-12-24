import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "SenyumCerah | Klinik Gigi Jakarta | Dokter Gigi Spesialis Terpercaya",
  description: "Klinik gigi modern dengan dokter spesialis berpengalaman. Layanan scaling, tambal, behel, veneer, implant. Konsultasi pertama GRATIS!",
  keywords: "klinik gigi jakarta, dokter gigi, scaling gigi, behel, veneer, implan gigi, bleaching gigi",
  openGraph: {
    title: "SenyumCerah | Klinik Gigi Jakarta | Dokter Gigi Spesialis Terpercaya",
    description: "Klinik gigi modern dengan dokter spesialis berpengalaman. Layanan scaling, tambal, behel, veneer, implant. Konsultasi pertama GRATIS!",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <Header />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
