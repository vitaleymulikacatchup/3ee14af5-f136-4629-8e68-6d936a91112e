import type { Metadata } from "next";
import { Inter_Tight, Playfair_Display } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "BarneyCoin — playful, friendly crypto with a community vibe",
  description: "BarneyCoin makes crypto approachable with bright branding, clear buy steps, and a community-first vibe. Learn, join, and grow together—every step along the way.",
  keywords: ["barneycoin", "memecoin", "crypto", "family-friendly crypto", "community", "education", "buy crypto", "tokenomics"],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "BarneyCoin — playful, friendly crypto with a community vibe",
    description: "BarneyCoin makes crypto approachable with bright branding, clear buy steps, and a community-first vibe. Learn, join, and grow together—every step along the way.",
    type: "website",
    url: "/",
    siteName: "BarneyCoin",
    images: [
      { url: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/design-a-simple-high-contrast-logo-for-b-1759928097249-e1fb9813.jpg",
        width: 1200,
        height: 630,
        alt: "BarneyCoin logo on a purple gradient with a friendly mascot"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BarneyCoin — playful, friendly crypto with a community vibe",
    description: "BarneyCoin makes crypto approachable with bright branding, clear buy steps, and a community-first vibe. Learn, join, and grow together—every step along the way.",
    images: ["https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/design-a-simple-high-contrast-logo-for-b-1759928097249-e1fb9813.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={`${interTight.variable} ${playfairDisplay.variable} antialiased`}>{children}</body>
    </html>
  );
}
