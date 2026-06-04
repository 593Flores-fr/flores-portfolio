import Link from "next/link";
import Image from "next/image";

export default function SiteHeader() {
  return (
    <header className="fullscreen-menu invert-header" data-menucolor="#0c0c0c">
      <div id="header-container">

        <div id="logo" className="hide-ball">
          <Link href="/">
            <Image className="black-logo" src="/images/logo.png" alt="Flores Logo" width={120} height={50} style={{ height: 50, width: "auto" }} priority />
            <Image className="white-logo" src="/images/logo-white.png" alt="Flores Logo" width={120} height={50} style={{ height: 50, width: "auto" }} priority />
          </Link>
        </div>

        <nav>
          <div className="nav-height">
            <div className="outer">
              <div className="inner">
                <ul data-breakpoint="10025" className="flexnav">
                  <li className="link menu-timeline"><Link href="/"><div className="before-span"><span data-hover="Accueil">Accueil</span></div></Link></li>
                  <li className="link menu-timeline">
                    <Link href="/portfolio"><div className="before-span"><span data-hover="Portfolio">Portfolio</span></div></Link>
                    <ul>
                      <li><Link href="/portfolio">Galerie d&apos;archive</Link></li>
                    </ul>
                  </li>
                  <li className="link menu-timeline"><Link href="/tarifs"><div className="before-span"><span data-hover="Tarifs">Tarifs</span></div></Link></li>
                  <li className="link menu-timeline"><Link href="/about"><div className="before-span"><span data-hover="Présentation">Présentation</span></div></Link></li>
                  <li className="link menu-timeline"><Link href="/contact"><div className="before-span"><span data-hover="Contactez-moi">Contactez-moi</span></div></Link></li>
                </ul>
              </div>
            </div>
          </div>
        </nav>

        <div className="button-wrap right menu burger-lines">
          <div className="icon-wrap parallax-wrap">
            <div className="button-icon parallax-element">
              <div id="burger-wrapper">
                <div id="menu-burger">
                  <span /><span /><span />
                </div>
              </div>
            </div>
          </div>
          <div className="button-text sticky right"><span data-hover="Menu">Menu</span></div>
        </div>

      </div>
    </header>
  );
}
