/**
 * SiteShell — éléments fixes partagés sur toutes les pages publiques :
 * preloader, curseur magique, side nav, cover layer
 */
import Link from "next/link";

interface SiteShellProps {
  activePage?: "home" | "portfolio" | "tarifs" | "about" | "contact";
  preloaderLine?: boolean; // true = barre simple (index), false = trackbar (autres)
}

export default function SiteShell({ activePage, preloaderLine = true }: SiteShellProps) {
  return (
    <>
      {/* Preloader */}
      {preloaderLine ? (
        <div className="preloader-wrap">
          <div className="preloader-content">
            <div className="preloader-logo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/logo-white.png" alt="Flores" />
            </div>
            <div className="preloader-line-wrap"><div className="loadbar" /></div>
          </div>
        </div>
      ) : (
        <div className="preloader-wrap" data-centerLine="Chargement...">
          <div className="preloader-content">
            <div className="preloader-logo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/logo-white.png" alt="Flores" />
            </div>
            <div className="preloader-line-wrap"><div className="loadbar" /></div>
          </div>
        </div>
      )}

      {/* Cover layer pour transitions */}
      <div className="cd-cover-layer" />

      {/* Curseur magique */}
      <div id="magic-cursor">
        <div id="ball">
          <div id="ball-drag-x" />
          <div id="ball-drag-y" />
          <div id="ball-loader" />
        </div>
      </div>

      {/* Clone image pour transitions */}
      <div id="clone-image">
        <div className="hero-translate" />
      </div>

      <div id="rotate-device" />

      {/* Side Navigation */}
      <nav className="side-nav" role="navigation" aria-label="Navigation principale">
        <Link href="/" className={`side-nav-item${activePage === "home" ? " is-active" : ""}`}>
          <span className="side-nav-label">Accueil</span>
          <span className="side-nav-dot" />
        </Link>
        <Link href="/portfolio" className={`side-nav-item${activePage === "portfolio" ? " is-active" : ""}`}>
          <span className="side-nav-label">Portfolio</span>
          <span className="side-nav-dot" />
        </Link>
        <Link href="/tarifs" className={`side-nav-item${activePage === "tarifs" ? " is-active" : ""}`}>
          <span className="side-nav-label">Tarifs</span>
          <span className="side-nav-dot" />
        </Link>
        <Link href="/about" className={`side-nav-item${activePage === "about" ? " is-active" : ""}`}>
          <span className="side-nav-label">À Propos</span>
          <span className="side-nav-dot" />
        </Link>
        <Link href="/contact" className={`side-nav-item${activePage === "contact" ? " is-active" : ""}`}>
          <span className="side-nav-label">Contact</span>
          <span className="side-nav-dot" />
        </Link>
      </nav>
    </>
  );
}
