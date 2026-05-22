import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Aman Digital Studio | Lucknow's Premier Cinematic Photography Since 2002",
  description: "Capture your eternal moments with Aman Digital Studio, Lucknow's premier wedding, pre-wedding, photoshoot, and cinematic film team based in Telibagh since 2002.",
  keywords: ["Aman Digital Studio", "Wedding Photography Lucknow", "Candid Photographer Lucknow", "Telibagh Studio", "Lucknow Videography", "Pre-wedding shoot Lucknow"],
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorantGaramond.variable} ${plusJakartaSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-studio-charcoal text-studio-offwhite selection:bg-gold-accent selection:text-studio-black">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

