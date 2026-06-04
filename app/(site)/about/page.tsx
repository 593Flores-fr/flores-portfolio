import type { Metadata } from "next";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import SiteShell from "@/components/site/SiteShell";

export const metadata: Metadata = {
  title: "Flores — À Propos",
  description: "Allan — Graphiste freelance & développeur web autodidacte, membre V.T.O Studio. Identité visuelle, direction artistique, accompagnement créatif.",
};

export default function AboutPage() {
  return (
    <div className="hidden hidden-ball smooth-scroll1 rounded-borders page-about" data-primary-color="#8c6144">
      <style>{`
.about-skills-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;margin-top:48px;text-align:left;background:#1a1a1a}
.about-skill-card{padding:36px 32px;background:#0c0c0c;display:flex;flex-direction:column;transition:background .2s}
.about-skill-card:hover{background:#111}
.ask-num{font-size:11px;color:#333;font-weight:600;letter-spacing:.1em;margin-bottom:20px}
.ask-title{font-family:'Six Caps',sans-serif;font-size:40px;color:#fff;letter-spacing:.06em;text-transform:uppercase;line-height:1;margin-bottom:12px}
.ask-sub{font-size:10px;color:#444;text-transform:uppercase;letter-spacing:.07em;line-height:1.6;margin-bottom:24px;padding-bottom:20px;border-bottom:1px solid #1e1e1e}
.ask-list{list-style:none;padding:0;margin:0;flex:1}
.ask-list li{font-size:12px;color:#777;padding:9px 0;border-bottom:1px solid #181818;letter-spacing:.02em;line-height:1.5}
.ask-list li:last-child{border-bottom:none}
.ask-list li strong{color:#aaa;font-weight:500}
@media(max-width:900px){.about-skills-grid{grid-template-columns:repeat(2,1fr)}}
@media(max-width:560px){.about-skills-grid{grid-template-columns:1fr}}
      `}</style>
      <main>
        {/* Preloader + cursor + side-nav */}
        <SiteShell activePage="about" />

        <div className="cd-index cd-main-content">
          <div id="clapat-page-content" className="light-content" data-bgcolor="#0c0c0c">
            <SiteHeader />
            <div id="content-scroll">
              <div id="main">

                {/* Hero */}
                <div id="hero">
                  <div id="hero-styles">
                    <div className="hero-eyebrow">
                      <span>Graphiste & Dev Web</span>
                      <i className="hero-eyebrow-sep"></i>
                      <span>Basé en France</span>
                    </div>
                    <div id="hero-caption" className="content-full-width parallax-scroll-caption text-align-center height-title">
                      <div className="inner">
                        <h1 className="hero-title caption-timeline primary-font-title"><span>À PROPOS</span></h1>
                        <div className="hero-tagline">
                          <div className="hero-tagline-line"></div>
                          <span>Créatif polyvalent · Sans limites conceptuelles</span>
                          <div className="hero-tagline-line"></div>
                        </div>
                      </div>
                    </div>
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
                        <div id="info-text">Flores.psd</div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Hero */}

                {/* Main Content */}
                <div id="main-content">
                  <div id="main-page-content" className="content-max-width">

                    {/* ─ Présentation personnelle ────────────────────────── */}
                    <div className="content-row row_padding_top row_padding_bottom dark-section" data-bgcolor="#0c0c0c">
                      <div className="about-intro-wrap">
                        <div className="about-intro-left">
                          <span className="about-intro-label">À Propos</span>
                          <h2 className="about-intro-title primary-font-title">
                            <span className="has-mask-fill">Flores.</span>
                          </h2>
                          <p className="about-intro-meta">Graphiste &amp; Dev Web<br />Basé en France</p>
                          <div className="about-intro-side-rule"></div>
                          <p className="about-intro-meta">Disponible · Devis gratuit</p>
                        </div>
                        <div className="about-intro-right">
                          <p className="about-intro-text" id="admin-bio-intro-1">Tout a commencé à 18&nbsp;ans, quand une maladie m'a offert quelque chose d'inattendu&nbsp;: du temps. Beaucoup de temps. J'en ai profité pour apprendre, explorer, et découvrir une passion que je ne me connaissais pas. Le graphisme et le développement web. Entièrement autodidacte, j'ai construit mes compétences en partant de zéro, guidé uniquement par la curiosité et l'envie de créer quelque chose de concret à partir d'une simple idée.</p>
                          <p className="about-intro-text" id="admin-bio-intro-2">Aujourd'hui à 25&nbsp;ans, je travaille principalement sur <strong>Photoshop</strong> et <strong>Illustrator</strong> pour le graphisme : identités visuelles, covers, direction artistique, et sur le front-end pour le développement web. Ce qui me motive avant tout, c'est de voir une idée brute prendre forme et devenir quelque chose de percutant, de cohérent, qui correspond vraiment à la personne pour qui je travaille.</p>
                          <p className="about-intro-text" id="admin-bio-intro-3">Je suis membre de <strong>V.T.O Studio</strong>, une association dont le but est de rendre les services créatifs professionnels accessibles aux artistes et petits créateurs, tout en travaillant aussi avec des entreprises et des pros. Une valeur que je partage pleinement&nbsp;: un travail sérieux et soigné, à un prix raisonnable. Sur le long terme, ce qui me tient vraiment à cœur, c'est d'accompagner un créateur, streamer ou artiste dans la durée. Construire ensemble une image forte et cohérente, avec une vision qui lui ressemble.</p>
                          <div className="about-intro-actions">
                            <a className="about-intro-vto" href="https://www.youtube.com/@vtostudio9815" target="_blank">
                              <i className="fa-solid fa-arrow-up-right-from-square"></i>
                              Découvrir V.T.O Studio
                            </a>
                          </div>

                          {/* VTO Card */}
                          <div className="vto-card">
                            <div className="vto-card-logo">
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img src="/images/vto-logo.png" alt="V.T.O Studio" />
                            </div>
                            <div className="vto-card-content">
                              <span className="vto-card-label">Projet parallèle · Association culturelle</span>
                              <h3 className="vto-card-title">V.T.O Studio</h3>
                              <p className="vto-card-desc">Un espace dédié à la création, au partage et à l'expression artistique. Musique, visuels, identités. Des projets portés par des passionnés qui font des choses qui ont du sens.</p>
                              <div className="vto-card-actions">
                                <a href="https://discord.gg/9aDugrJyr5" target="_blank" className="vto-card-discord">
                                  <i className="fa-brands fa-discord"></i> Rejoindre le serveur
                                </a>
                                <a href="https://www.youtube.com/@vtostudio9815" target="_blank" className="vto-card-link">
                                  Consulter le site web <i className="fa-solid fa-arrow-up-right-from-square"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* /Présentation personnelle */}

                    {/* Bio Section */}
                    <div className="content-row row_padding_top row_padding_bottom dark-section" data-bgcolor="#111">
                      <div className="about-bio-wrap">
                        <div className="about-bio-sidebar">
                          <div className="about-bio-label">Flores<br />Graphiste<br />&amp; Dev Web<br />France</div>
                          <div className="about-status-badge" data-status-badge data-status="available" style={{marginTop:"16px"}}>
                            <span className="hero-available-dot" data-status-dot></span>
                            <span data-status-short>Disponible</span>
                          </div>
                        </div>
                        <div className="about-bio-main">
                          <p className="about-bio-tagline" id="admin-bio-tagline">Autodidacte depuis 5 ans · Graphisme &amp; Dev Web</p>
                          <div className="about-bio-chips">
                            <span className="about-bio-chip" id="admin-bio-chip-1">Autodidacte depuis 5 ans</span>
                            <span className="about-bio-chip" id="admin-bio-chip-2">Membre V.T.O Studio</span>
                            <span className="about-bio-chip" id="admin-bio-chip-3">30+ projets livrés</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* /Bio Section */}

                    {/* Gallery Section */}
                    <div className="content-row full text-align-center dark-section" data-bgcolor="#0c0c0c">

                      <div className="skills-grid-section">

                        <div className="skills-grid-header has-animation" data-delay="0">
                          <h2 className="primary-font-title big-title has-mask-fill">Mes compétences</h2>
                          <p style={{color:"#aaa", fontSize:"15px", letterSpacing:".04em", maxWidth:"560px", margin:"0 auto"}}>Design, développement, direction artistique. Les outils que je maîtrise au service de vos projets.</p>
                        </div>

                        <div className="about-skills-grid">

                          <div className="about-skill-card has-animation" data-delay="0" id="admin-ask-1">
                            <div className="ask-num">01</div>
                            <div className="ask-title" id="admin-ask-1-title">Identité Visuelle</div>
                            <div className="ask-sub" id="admin-ask-1-sub">Construire une image de marque cohérente & mémorable</div>
                            <ul className="ask-list" id="admin-ask-1-list">
                              <li><strong>Logo & variantes</strong> : déclinaisons couleur, fond clair/sombre</li>
                              <li><strong>Charte graphique</strong> : couleurs, typographies, règles d'usage</li>
                              <li><strong>Overlays & assets</strong> : éléments réutilisables pour tous supports</li>
                              <li><strong>Direction artistique</strong> : univers visuel cohérent sur la durée</li>
                            </ul>
                          </div>

                          <div className="about-skill-card has-animation" data-delay="60" id="admin-ask-2">
                            <div className="ask-num">02</div>
                            <div className="ask-title" id="admin-ask-2-title">Print & Supports</div>
                            <div className="ask-sub" id="admin-ask-2-sub">Des supports physiques et numériques prêts à l'emploi</div>
                            <ul className="ask-list" id="admin-ask-2-list">
                              <li><strong>Affiches & flyers</strong> : événements, annonces, promotions</li>
                              <li><strong>Cartes de visite</strong> : format standard ou premium</li>
                              <li><strong>Bannières & roll-ups</strong> : signalétique et stand</li>
                              <li><strong>Fichiers print-ready</strong> : PDF HD, ICC, traits de coupe</li>
                            </ul>
                          </div>

                          <div className="about-skill-card has-animation" data-delay="120" id="admin-ask-3">
                            <div className="ask-num">03</div>
                            <div className="ask-title" id="admin-ask-3-title">Dév. Web</div>
                            <div className="ask-sub" id="admin-ask-3-sub">Sites vitrines conçus sur mesure, légers et impactants</div>
                            <ul className="ask-list" id="admin-ask-3-list">
                              <li><strong>Site vitrine</strong> : HTML/CSS/JS, responsive, optimisé</li>
                              <li><strong>Intégration maquette</strong> : pixel-perfect depuis Figma ou XD</li>
                              <li><strong>Performance & SEO</strong> : Core Web Vitals, accessibilité</li>
                              <li><strong>Déploiement</strong> : mise en ligne & nom de domaine</li>
                            </ul>
                          </div>

                          <div className="about-skill-card has-animation" data-delay="0" id="admin-ask-4">
                            <div className="ask-num">04</div>
                            <div className="ask-title" id="admin-ask-4-title">Cover Art</div>
                            <div className="ask-sub" id="admin-ask-4-sub">Visuels musicaux & artistiques à forte identité</div>
                            <ul className="ask-list" id="admin-ask-4-list">
                              <li><strong>Pochettes</strong> : single, EP, album, tous formats DSP</li>
                              <li><strong>Thumbnails YouTube</strong> : lisibles, cliquables, brandées</li>
                              <li><strong>Visuels promo</strong> : annonces de sortie pour réseaux sociaux</li>
                              <li><strong>Formats exportés</strong> : JPEG, PNG, TIFF selon plateforme</li>
                            </ul>
                          </div>

                          <div className="about-skill-card has-animation" data-delay="60" id="admin-ask-5">
                            <div className="ask-num">05</div>
                            <div className="ask-title" id="admin-ask-5-title">Suivi Créateurs</div>
                            <div className="ask-sub" id="admin-ask-5-sub">Accompagnement long terme pour streamers & vidéastes</div>
                            <ul className="ask-list" id="admin-ask-5-list">
                              <li><strong>Pack stream complet</strong> : overlays, alertes, transitions, panels</li>
                              <li><strong>Thumbnails récurrentes</strong> : gabarit cohérent sur la durée</li>
                              <li><strong>Évolutions graphiques</strong> : mise à jour de l'identité au fil du temps</li>
                              <li><strong>Priorité & réactivité</strong> : suivi dédié, retours rapides</li>
                            </ul>
                          </div>

                          <div className="about-skill-card has-animation" data-delay="120" id="admin-ask-6">
                            <div className="ask-num">06</div>
                            <div className="ask-title" id="admin-ask-6-title">Suivi Artistes</div>
                            <div className="ask-sub" id="admin-ask-6-sub">Accompagnement visuel dédié aux artistes musicaux</div>
                            <ul className="ask-list" id="admin-ask-6-list">
                              <li><strong>Couvertures de sorties</strong> : cohérence sur toute la discographie</li>
                              <li><strong>Visuels réseaux</strong> : posts, stories, bannières multiplateforme</li>
                              <li><strong>Press kit</strong> : dossier de presse et EPK visuel</li>
                              <li><strong>Accompagnement continu</strong> : disponible à chaque nouvelle sortie</li>
                            </ul>
                          </div>

                        </div>

                      </div>

                    </div>
                    {/* /Gallery Section */}

                    {/* Collaborators */}
                    <div className="content-row full row_padding_top row_padding_bottom dark-section about-collab-row" data-bgcolor="#0c0c0c">

                      <div className="about-collab-header">
                        <span className="about-collab-label">Collaborateurs</span>
                        <span className="about-collab-sub">Ils m'ont fait confiance.</span>
                      </div>

                      <div className="moving-gallery bw-gallery">
                        <ul className="wrapper-gallery">
                          <li className="link"><a target="_blank" href="https://www.vzxbuild.fr">{/* eslint-disable-next-line @next/next/no-img-element */}<img src="/images/client-01.png" alt="client" /></a><div className="moving-gallery-caption">VZX, Assemblage PC</div></li>
                          <li className="link"><a target="_blank" href="https://www.tiktok.com/@mdlrcouture?lang=fr">{/* eslint-disable-next-line @next/next/no-img-element */}<img src="/images/client-02.png" alt="client" /></a><div className="moving-gallery-caption">MDLR, Couturière</div></li>
                          <li className="link"><a target="_blank" href="https://www.helloasso.com/associations/213huma">{/* eslint-disable-next-line @next/next/no-img-element */}<img src="/images/client-03.png" alt="client" /></a><div className="moving-gallery-caption">213 HUMA, Associatif</div></li>
                          <li className="link"><a target="_blank" href="https://studiox15amneville.simplybook.it/v2/">{/* eslint-disable-next-line @next/next/no-img-element */}<img src="/images/client-04.png" alt="client" /></a><div className="moving-gallery-caption">X15 Studio, Prod.</div></li>
                          <li className="link"><a target="_blank" href="https://www.clapat.com/">{/* eslint-disable-next-line @next/next/no-img-element */}<img src="/images/client-05.png" alt="client" /></a><div className="moving-gallery-caption">Thomas Dussauze, Vidéaste</div></li>
                          <li className="link"><a target="_blank" href="https://www.youtube.com/@vtostudio9815">{/* eslint-disable-next-line @next/next/no-img-element */}<img src="/images/client-06.png" alt="client" /></a><div className="moving-gallery-caption">V.T.O Studio</div></li>
                          <li className="link"><a target="_blank" href="https://discord.gg/vmoove-1053712210293170228">{/* eslint-disable-next-line @next/next/no-img-element */}<img src="/images/client-07.png" alt="client" /></a><div className="moving-gallery-caption">VMOOVE, E-Sport</div></li>
                          <li className="link"><a target="_blank" href="https://www.clapat.com/">{/* eslint-disable-next-line @next/next/no-img-element */}<img src="/images/client-08.png" alt="client" /></a><div className="moving-gallery-caption">Mik-Mak, Restauration</div></li>
                        </ul>
                      </div>

                    </div>
                    {/* /Collaborators */}

                  </div>
                </div>
                {/* /Main Content */}

                {/* Page CTA */}
                <div className="page-cta-strip">
                  <div className="page-cta-inner">
                    <div className="page-cta-left">
                      <span className="page-cta-eyebrow"><span className="hero-available-dot"></span> Disponible &middot; Devis gratuit</span>
                      <p className="page-cta-text">Un projet, une id&eacute;e&nbsp;? Je r&eacute;ponds sous 24h, <strong>sans engagement</strong>.</p>
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
