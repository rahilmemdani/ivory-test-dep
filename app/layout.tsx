import type { Metadata } from "next";
import "../src/styles.css";
import { Nav } from "../src/components/site/Nav";
import { Footer } from "../src/components/site/Footer";
import { BookButton } from "../src/components/site/BookButton";
import { Suspense } from "react";
import { Loader } from "../src/components/site/Loader";

export const metadata: Metadata = {
  title: "Ivory Atelier - A quieter kind of beautiful.",
  description: "Ivory Atelier is Mumbai's unhurried house for hair, nails and beauty.",
  openGraph: {
    title: "Ivory Atelier - A quieter kind of beautiful.",
    description: "An atelier, not a salon. Hair · Nails · Beauty · Café.",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ivory Atelier - A quieter kind of beautiful.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Jost:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Suspense fallback={null}>
          <Loader />
        </Suspense>
        <div className="flex min-h-screen flex-col bg-background text-foreground">
          <Nav />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
          <BookButton />
        </div>
      </body>
    </html>
  );
}
