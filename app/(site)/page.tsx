import type { Metadata } from "next";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import SiteShell from "@/components/site/SiteShell";

export const metadata: Metadata = {
  title: "Flores — Graphiste & Développeur Web",
  description: "Allan — Graphiste freelance & développeur web autodidacte. Identité visuelle, direction artistique, covers, accompagnement créatif. Membre V.T.O Studio.",
};

export default function HomePage() {
  return (
    <div className="hidden hidden-ball smooth-scroll1 rounded-borders page-home" data-primary-color="#8c6144">
      <main>
        {/* Preloader + cursor + side-nav */}
        <SiteShell activePage="home" />

        <div className="cd-index cd-main-content">
          <div id="clapat-page-content" className="light-content" data-bgcolor="#0c0c0c">
            <SiteHeader />
            <div id="content-scroll">
              <div id="main">

                {/* ─── HERO ─────────────────────────────────────────────── */}
                <div id="hero">
                  <div id="hero-styles">

                    {/* Left: title + tagline + CTA */}
                    <div id="hero-caption" className="content-full-width parallax-scroll-caption height-title">
                      <div className="inner">
                        {/* Eyebrow + disponible groupés, au-dessus du titre */}
                        <div className="hero-top-info">
                          <div className="hero-avail-badge" data-status-badge data-status="available">
                            <span className="hero-available-dot" data-status-dot></span>
                            <span className="hero-avail-text" data-status-short>Disponible</span>
                          </div>
                          <div className="hero-eyebrow">
                            <span id="admin-home-eyebrow">Graphiste & Développeur Web · Autodidacte</span>
                            <i className="hero-eyebrow-sep"></i>
                            <span>Basé en France · Membre V.T.O</span>
                          </div>
                        </div>
                        <h1 className="hero-title caption-timeline primary-font-title"><span>Flores</span></h1>
                        <div className="hero-tagline">
                          <span id="admin-home-tagline">Identité visuelle · Direction artistique · Accompagnement créatif</span>
                        </div>
                        <div className="hero-cta-row">
                          <div className="clapat-button-wrap parallax-wrap hide-ball">
                            <div className="clapat-button parallax-element">
                              <div className="button-border outline rounded parallax-element-second">
                                <a className="ajax-link" href="/portfolio" data-type="page-transition">
                                  <span data-hover="Voir les projets">Voir les projets</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right: project slideshow */}
                    <div className="hero-right-img">
                      <div className="hero-slide">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="/images/01hero.jpg" alt="Yevta" />
                      </div>
                      <div className="hero-slide">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="/images/jjj.jpg" alt="VZX Build" />
                      </div>
                      <div className="hero-slide">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="/images/vto.jpg" alt="V.T.O Studio" />
                      </div>
                      <div className="hero-slide">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="/images/Mdlr.png" alt="Monica DLR" />
                      </div>
                      <div className="hero-slide">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="/images/projects/huma.png" alt="213 HUMA" />
                      </div>
                    </div>

                    {/* Footer */}
                    <div id="hero-footer">
                      <div className="hero-footer-left">
                        <div className="button-wrap right scroll-down">
                          <div className="icon-wrap parallax-wrap">
                            <div className="button-icon parallax-element">
                              <i className="fa-solid fa-angle-down"></i>
                            </div>
                          </div>
                          <div className="button-text sticky right"><span data-hover="Scroll">Scroll</span></div>
                        </div>
                      </div>
                      <div className="hero-footer-right">
                        <div id="info-text">@593Flores</div>
                      </div>
                    </div>

                  </div>
                </div>
                {/* /Hero */}

                {/* ─── MAIN CONTENT ──────────────────────────────────────── */}
                <div id="main-content">
                  <div id="main-page-content" className="content-full-width">

                    {/* ─ PANELS : Projets ─────────────────────────────── */}
                    <div className="content-row full dark-section" data-bgcolor="#0c0c0c">

                      <div className="panels-section-header">
                        <span className="panels-section-label">Sélection de travaux</span>
                        <span className="panels-section-count">07 projets</span>
                      </div>

                      <div className="panels" data-widthratio="1">
                        <div className="panels-container">

                          <a className="panel ajax-link" data-type="page-transition" href="/portfolio/yevta" data-color="#fff">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="/images/01hero.jpg" alt="Yevta" id="admin-panel-1-img" />
                            <div className="panel-hover-info">
                              <span className="phi-cat" id="admin-panel-1-cat">Direction artistique · 2024</span>
                              <h3 className="phi-title" id="admin-panel-1-title">Yevta</h3>
                              <p className="phi-desc" id="admin-panel-1-desc">Identité visuelle complète pour un artiste musical émergent — covers, charte graphique et assets de communication.</p>
                            </div>
                          </a>

                          <a className="panel ajax-link" data-type="page-transition" href="/portfolio/vzx-build" data-color="#fff">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="/images/jjj.jpg" alt="VZX Build" id="admin-panel-2-img" />
                            <div className="panel-hover-info">
                              <span className="phi-cat" id="admin-panel-2-cat">D.A. & Développement Web · 2024</span>
                              <h3 className="phi-title" id="admin-panel-2-title">VZX Build</h3>
                              <p className="phi-desc" id="admin-panel-2-desc">Branding moderne et site vitrine pour un assembleur PC. Identité forte, palette sombre et typographie percutante.</p>
                            </div>
                          </a>

                          <a className="panel ajax-link" data-type="page-transition" href="/portfolio/vto-studio" data-color="#fff">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="/images/vto.jpg" alt="V.T.O Studio" id="admin-panel-3-img" />
                            <div className="panel-hover-info">
                              <span className="phi-cat" id="admin-panel-3-cat">Association · 2024</span>
                              <h3 className="phi-title" id="admin-panel-3-title">V.T.O Studio</h3>
                              <p className="phi-desc" id="admin-panel-3-desc">Direction artistique pour un collectif créatif. Logo, supports de communication et présence digitale cohérente.</p>
                            </div>
                          </a>

                          <a className="panel ajax-link" data-type="page-transition" href="/portfolio/cover-art" data-color="#fff">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="/images/wuk.png" alt="CoverArt" id="admin-panel-4-img" />
                            <div className="panel-hover-info">
                              <span className="phi-cat" id="admin-panel-4-cat">Covers musicales · 2021–2024</span>
                              <h3 className="phi-title" id="admin-panel-4-title">CoverArt</h3>
                              <p className="phi-desc" id="admin-panel-4-desc">Sélection de covers réalisées pour différents artistes. Illustrations sur mesure pour streaming et éditions physiques.</p>
                            </div>
                          </a>

                          <a className="panel ajax-link" data-type="page-transition" href="/portfolio/monica-dlr" data-color="#fff">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="/images/Mdlr.png" alt="Monica DLR" id="admin-panel-5-img" />
                            <div className="panel-hover-info">
                              <span className="phi-cat" id="admin-panel-5-cat">Charte graphique · 2024</span>
                              <h3 className="phi-title" id="admin-panel-5-title">Monica DLR</h3>
                              <p className="phi-desc" id="admin-panel-5-desc">Identité visuelle pour une créatrice & couturière. Logo, univers de marque et visuels réseaux sociaux.</p>
                            </div>
                          </a>

                          <a className="panel ajax-link" data-type="page-transition" href="/portfolio/213-huma" data-color="#fff">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="/images/projects/huma.png" alt="213 HUMA" id="admin-panel-6-img" />
                            <div className="panel-hover-info">
                              <span className="phi-cat" id="admin-panel-6-cat">Projet associatif · 2024</span>
                              <h3 className="phi-title" id="admin-panel-6-title">213 HUMA</h3>
                              <p className="phi-desc" id="admin-panel-6-desc">Direction artistique pour un projet associatif humanitaire. Identité visuelle engagée et supports imprimés.</p>
                            </div>
                          </a>

                          <a className="panel ajax-link" data-type="page-transition" href="/portfolio/muzey" data-color="#fff">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="/images/pdv1.png" alt="Muzey" id="admin-panel-7-img" />
                            <div className="panel-hover-info">
                              <span className="phi-cat" id="admin-panel-7-cat">Charte graphique · 2024</span>
                              <h3 className="phi-title" id="admin-panel-7-title">Muzey</h3>
                              <p className="phi-desc" id="admin-panel-7-desc">Identité visuelle complète pour un projet musical. Logotype, palette chromatique et assets digitaux.</p>
                            </div>
                          </a>

                        </div>
                      </div>

                      <div className="panels-section-footer">
                        <div className="clapat-button-wrap parallax-wrap hide-ball">
                          <div className="clapat-button parallax-element">
                            <div className="button-border outline rounded parallax-element-second">
                              <a className="ajax-link" href="/portfolio" data-type="page-transition">
                                <span data-hover="Voir tous les travaux">Voir tous les travaux</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                    {/* /Panels */}

                    {/* ─ COMPÉTENCES ──────────────────────────────────── */}
                    <div className="content-row full row_padding_left row_padding_right dark-section fadeout-element" data-bgcolor="#0c0c0c">
                      <div className="skills-grid-section">
                        <div className="skills-grid-label">Compétences</div>
                        <div className="skills-grid">

                          <div className="skill-card">
                            <span className="skill-num">01</span>
                            <span className="skill-icon">🎨</span>
                            <h3 className="skill-title" id="admin-skill-1-title">Identité Visuelle</h3>
                            <p className="skill-desc" id="admin-skill-1-desc">Logo, charte graphique, papèterie, merch et pack streamer. Tout ce qui forge une image reconnaissable, du concept à la livraison.</p>
                          </div>

                          <div className="skill-card">
                            <span className="skill-num">02</span>
                            <span className="skill-icon">📄</span>
                            <h3 className="skill-title" id="admin-skill-2-title">Print & Supports</h3>
                            <p className="skill-desc" id="admin-skill-2-desc">Affiches, flyers, brochures, packaging, panneaux. Des visuels calibrés pour marquer les esprits en physique comme en digital.</p>
                          </div>

                          <div className="skill-card">
                            <span className="skill-num">03</span>
                            <span className="skill-icon">💻</span>
                            <h3 className="skill-title" id="admin-skill-3-title">Dév. Web</h3>
                            <p className="skill-desc" id="admin-skill-3-desc">Sites vitrines codés de zéro en HTML, CSS & JS — zéro builder. SEO soigné, entièrement responsive, déploiement inclus sur demande.</p>
                          </div>

                          <div className="skill-card">
                            <span className="skill-num">04</span>
                            <span className="skill-icon">🎵</span>
                            <h3 className="skill-title" id="admin-skill-4-title">Cover Art</h3>
                            <p className="skill-desc" id="admin-skill-4-desc">Pochettes, tracklisting et assets de sortie pensés pour performer sur toutes les plateformes. Possible édition physique.</p>
                          </div>

                          <div className="skill-card">
                            <span className="skill-num">05</span>
                            <span className="skill-icon">📱</span>
                            <h3 className="skill-title" id="admin-skill-5-title">Suivi Créateurs</h3>
                            <p className="skill-desc" id="admin-skill-5-desc">Charte D.A., assets réseaux (story, miniatures, planning), conseil stratégique pour construire et développer ta communauté.</p>
                          </div>

                          <div className="skill-card">
                            <span className="skill-num">06</span>
                            <span className="skill-icon">🎤</span>
                            <h3 className="skill-title" id="admin-skill-6-title">Suivi Artistes</h3>
                            <p className="skill-desc" id="admin-skill-6-desc">D.A. globale, covers, CV de presse, assets réseaux et clip / photoshooting. Un accompagnement complet pour développer ton image.</p>
                          </div>

                        </div>
                      </div>
                    </div>
                    {/* /Compétences */}

                    {/* ─ CTA CONTACT ─────────────────────────────────── */}
                    <div className="content-row full dark-section change-header-color cta-contact-section" data-bgcolor="#0c0c0c">
                      <div className="cta-split">

                        {/* Gauche : accroche typographique */}
                        <div className="cta-left">
                          <p className="cta-eyebrow">Travaillons ensemble</p>
                          <h2 className="cta-headline primary-font-title" id="admin-home-cta-headline">
                            <span className="has-mask-fill">Votre univers,</span><br />
                            <span className="has-mask-fill">votre signature.</span>
                          </h2>
                        </div>

                        {/* Droite : disponibilité + pitch + boutons */}
                        <div className="cta-right">
                          <div className="cta-avail">
                            <span className="contact-avail-dot"></span>
                            <span className="cta-avail-text">Disponible · Devis gratuit à la demande</span>
                          </div>
                          <p className="cta-pitch" id="admin-home-cta-pitch">Autodidacte depuis 5&nbsp;ans, je construis des identités visuelles et des expériences digitales sur mesure. Artiste, créateur, streamer : dites-moi ce que vous avez en tête, on construit quelque chose qui vous ressemble vraiment.</p>
                        </div>

                      </div>
                    </div>
                    {/* /CTA Contact */}

                  </div>
                </div>
                {/* /Main Content */}

                {/* Page CTA */}
                <div className="page-cta-strip">
                  <div className="page-cta-inner">
                    <div className="page-cta-left">
                      <span className="page-cta-eyebrow"><span className="hero-available-dot"></span> Disponible &middot; Devis gratuit</span>
                      <p className="page-cta-text">Un projet, une id&eacute;e&nbsp;? Je r&eacute;ponds sous 24h &mdash; <strong>sans engagement</strong>.</p>
                    </div>
                    <a href="/contact" className="ajax-link page-cta-btn" data-type="page-transition">
                      D&eacute;marrer un projet <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
                {/* /Page CTA */}

                <SiteFooter />
              </div>
            </div>
            <div id="app" />
          </div>
        </div>
      </main>

      <div className="cd-cover-layer" />
      <div id="magic-cursor">
        <div id="ball">
          <div id="ball-drag-x" /><div id="ball-drag-y" /><div id="ball-loader" />
        </div>
      </div>
      <div id="clone-image"><div className="hero-translate" /></div>
      <div id="rotate-device" />
    </div>
  );
}
