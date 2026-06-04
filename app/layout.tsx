import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Flores — Graphiste & Développeur Web",
  description: "Allan — Graphiste freelance & développeur web autodidacte. Identité visuelle, direction artistique, covers, accompagnement créatif.",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/ico" href="/favicon.ico" />
        {/* CSS du template */}
        <link rel="stylesheet" href="/style.css" />
        <link rel="stylesheet" href="/css/all.min.css" />
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Six+Caps&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}

        {/* ── Scripts ── chargés après hydratation pour les animations jQuery/GSAP */}
        <Script src="/js/jquery.min.js" strategy="beforeInteractive" />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/gsap.min.js" strategy="afterInteractive" />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/ScrollTrigger.min.js" strategy="afterInteractive" />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/Flip.min.js" strategy="afterInteractive" />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js" strategy="afterInteractive" />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.imagesloaded/5.0.0/imagesloaded.pkgd.min.js" strategy="afterInteractive" />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/smooth-scrollbar/8.4.0/smooth-scrollbar.js" strategy="afterInteractive" />
        <Script src="/js/status.js" strategy="afterInteractive" />
        <Script src="/js/clapat.js" strategy="afterInteractive" />
        <Script src="/js/plugins.js" strategy="afterInteractive" />
        <Script src="/js/common.js" strategy="afterInteractive" />
        <Script src="/js/contact.js" strategy="afterInteractive" />
        <Script src="/js/scripts.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
