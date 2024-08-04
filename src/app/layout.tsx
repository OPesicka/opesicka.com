import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer, Providers } from "@/components";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://opesicka.com"),
  title: "Ondřej Pešička",
  description: "Designer and (sometimes) software engineer, currently building at RBND.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Ondřej Pešička",
    images: "/og/default.png",
  },
  twitter: {
    creator: "@opesicka",
    card: "summary_large_image",
    description: "Designer and (sometimes) software engineer, currently building at RBND.",
    title: "Ondřej Pešička",
    images: "/og/default.png",
  },
  keywords: ["product", "desgin", "ux", "ui", "design", "digital design", "startups"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script src="/noflash.min.js" defer strategy="beforeInteractive" />
        <Script
          strategy="afterInteractive"
          data-domain="opesicka.com"
          src="https://plausible.io/js/plausible.js"
        />
      </head>
      <body className={`${inter.className} m-auto max-w-[580px] px-8 pb-0 pt-10 md:px-16 md:pt-16`}>
        <Providers>
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
