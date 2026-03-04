import type { Metadata } from "next";
import { Bebas_Neue, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MetaPixel } from "@/components/analytics/MetaPixel";
import { GoogleAnalytics } from "@next/third-parties/google";
import { ChatWidget } from "@/components/chat/ChatWidget";

const bebasNeue = Bebas_Neue({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Allstar AC & Heating | Houston HVAC | Family-Owned",
  description:
    "Family-owned HVAC service in Houston TX. AC repair, installation, heating services. Fair pricing, no surprises. Licensed TACLB23470E. Call 713-943-7283.",
  keywords: [
    "HVAC Houston",
    "AC repair Houston",
    "heating repair Houston",
    "AC installation Houston",
    "HVAC service Clear Lake",
    "air conditioning repair",
    "furnace repair Houston",
    "family owned HVAC",
  ],
  authors: [{ name: "Allstar AC & Heating" }],
  creator: "Allstar AC & Heating",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://allstaractx.com",
    siteName: "Allstar AC & Heating",
    title: "Allstar AC & Heating | Houston HVAC | Family-Owned",
    description:
      "Family-owned HVAC service in Houston TX. AC repair, installation, heating services. Fair pricing, no surprises. Licensed TACLB23470E.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Allstar AC & Heating | Houston HVAC | Family-Owned",
    description:
      "Family-owned HVAC service in Houston TX. AC repair, installation, heating services. Fair pricing, no surprises.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${sourceSans.variable}`}>
      <body className="antialiased font-body">
        {/* Skip to content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-md"
        >
          Skip to content
        </a>
        <MetaPixel />
        <Header />
        <main id="main-content" className="pb-20 md:pb-0">{children}</main>
        <Footer />
        <ChatWidget />
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
      </body>
    </html>
  );
}
