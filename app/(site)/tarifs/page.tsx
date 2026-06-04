import type { Metadata } from "next";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import SiteShell from "@/components/site/SiteShell";

export const metadata: Metadata = {
  title: "Flores — Tarifs",
  description: "Découvrez mes tarifs pour mes services de design, identité visuelle, site web et création de covers.",
};

export default function TarifsPage() {
  return (
    <div className="hidden hidden-ball smooth-scroll1 rounded-borders page-tarifs" data-primary-color="#8c6144">
      <main>
        {/* Preloader + cursor + side-nav */}
        <SiteShell activePage="tarifs" />

        <div className="cd-index cd-main-content">
          <div id="clapat-page-content" className="light-content" data-bgcolor="#0c0c0c">
            <SiteHeader />
            <div id="content-scroll">
              <div id="main">

                {/* Hero */}
                <div id="hero">
                  <div id="hero-styles">
                    <div className="hero-eyebrow">
                      <span>Mes Services</span>
                      <i className="hero-eyebrow-sep"></i>
                      <span>Devis Gratuit</span>
                    </div>
                    <div id="hero-caption" className="content-full-width parallax-scroll-caption text-align-center height-title">
                      <div className="inner">
                        <h1 className="hero-title caption-timeline primary-font-title"><span>TARIFS</span></h1>
                        <div className="hero-tagline">
                          <div className="hero-tagline-line"></div>
                          <span>Identité · Web · Covers · Papeterie</span>
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
                        <div id="info-text">@593Flores</div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Hero */}

                {/* Main Content */}
                <div id="main-content">
                  <div className="tf-page-split">

                    {/* Sidebar */}
                    <div className="tf-sidebar">
                      <span className="tf-sidebar-meta">Mes Services</span>
                      <div className="tf-sidebar-rule"></div>
                      <h1 className="tf-sidebar-title primary-font-title">Tarifs.</h1>
                      <p className="tf-sidebar-intro">Des créations sur mesure, adaptées à chaque projet et à chaque budget.</p>
                      <div className="tf-sidebar-avail">
                        <span className="hero-available-dot"></span>
                        <span>Devis gratuit · Réponse 24h</span>
                      </div>
                    </div>

                    {/* Pricing Area */}
                    <div className="tf-pricing-area">

                      <div className="pricing-rows">

                        {/* 01 */}
                        <div className="pricing-row has-animation" data-delay="0">
                          <div className="pricing-row-num">01</div>
                          <div className="pricing-row-content">
                            <button className="pricing-row-toggle" aria-expanded="false">
                              <div className="pricing-row-title" id="admin-tarif-1-title">Identité Visuelle <span className="pricing-toggle-icon">+</span></div>
                            </button>
                            <div className="pricing-row-desc" id="admin-tarif-1-desc">Identité graphique complète et unique — logo, charte graphique, assets visuels, devanture, carte de visite.</div>
                            <div className="pricing-row-specs">
                              <ul>
                                <li>Logo principal + variantes (couleur / mono / négatif)</li>
                                <li>Charte graphique complète (couleurs, typographies, règles d'usage)</li>
                                <li>Assets visuels — icônes, motifs, textures</li>
                                <li>Supports physiques — devanture, carte de visite</li>
                                <li>Fichiers sources livrés (AI / PSD) + exports PNG/SVG/PDF</li>
                              </ul>
                              <a className="ajax-link pricing-specs-cta" data-type="page-transition" href="/contact">Demander un devis →</a>
                            </div>
                          </div>
                          <div className="pricing-row-price">
                            <div className="pricing-row-price-label">À partir de</div>
                            <div className="pricing-row-price-value" id="admin-tarif-1-price">250€</div>
                          </div>
                        </div>

                        {/* 02 */}
                        <div className="pricing-row has-animation" data-delay="50">
                          <div className="pricing-row-num">02</div>
                          <div className="pricing-row-content">
                            <button className="pricing-row-toggle" aria-expanded="false">
                              <div className="pricing-row-title" id="admin-tarif-2-title">Identité Visuelle <em className="pricing-row-sub">Digital</em> <span className="pricing-toggle-icon">+</span></div>
                            </button>
                            <div className="pricing-row-desc" id="admin-tarif-2-desc">Charte graphique pour usage numérique — logo, bannières, visuels réseaux sociaux.</div>
                            <div className="pricing-row-specs">
                              <ul>
                                <li>Logo + variantes (format numérique)</li>
                                <li>Palette de couleurs + typographies</li>
                                <li>Bannières réseaux sociaux (Instagram, Twitter/X, TikTok...)</li>
                                <li>Visuels stories &amp; posts optimisés</li>
                                <li>Exports PNG/SVG prêts à l'emploi</li>
                              </ul>
                              <a className="ajax-link pricing-specs-cta" data-type="page-transition" href="/contact">Demander un devis →</a>
                            </div>
                          </div>
                          <div className="pricing-row-price">
                            <div className="pricing-row-price-label">À partir de</div>
                            <div className="pricing-row-price-value" id="admin-tarif-2-price">100€</div>
                          </div>
                        </div>

                        {/* 03 */}
                        <div className="pricing-row has-animation" data-delay="100">
                          <div className="pricing-row-num">03</div>
                          <div className="pricing-row-content">
                            <button className="pricing-row-toggle" aria-expanded="false">
                              <div className="pricing-row-title" id="admin-tarif-3-title">Conception Papeterie <span className="pricing-toggle-icon">+</span></div>
                            </button>
                            <div className="pricing-row-desc" id="admin-tarif-3-desc">Supports imprimés — flyers, affiches, posters, cartes de visite.</div>
                            <div className="pricing-row-specs">
                              <ul>
                                <li>Flyer A4 / A5 recto-verso</li>
                                <li>Affiche / Poster (A3, A2, A1)</li>
                                <li>Carte de visite (formats standards)</li>
                                <li>Fichiers print-ready livrés (PDF haute résolution)</li>
                                <li>Conseil impression sur demande</li>
                              </ul>
                              <a className="ajax-link pricing-specs-cta" data-type="page-transition" href="/contact">Demander un devis →</a>
                            </div>
                          </div>
                          <div className="pricing-row-price">
                            <div className="pricing-row-price-label">À partir de</div>
                            <div className="pricing-row-price-value" id="admin-tarif-3-price">60€</div>
                          </div>
                        </div>

                        {/* 04 */}
                        <div className="pricing-row has-animation" data-delay="150">
                          <div className="pricing-row-num">04</div>
                          <div className="pricing-row-content">
                            <button className="pricing-row-toggle" aria-expanded="false">
                              <div className="pricing-row-title" id="admin-tarif-4-title">Site Web <em className="pricing-row-sub">Vitrine</em> <span className="pricing-toggle-icon">+</span></div>
                            </button>
                            <div className="pricing-row-desc" id="admin-tarif-4-desc">Site moderne et responsive, pensé pour valoriser votre image.</div>
                            <div className="pricing-row-specs">
                              <ul>
                                <li>Design custom sur-mesure (responsive mobile / tablette / desktop)</li>
                                <li>Jusqu'à 5 pages (Accueil, À propos, Services, Portfolio, Contact)</li>
                                <li>Formulaire de contact intégré</li>
                                <li>SEO de base (balises, meta, performances)</li>
                                <li>Déploiement + conseil hébergement</li>
                              </ul>
                              <a className="ajax-link pricing-specs-cta" data-type="page-transition" href="/contact">Demander un devis →</a>
                            </div>
                          </div>
                          <div className="pricing-row-price">
                            <div className="pricing-row-price-label">À partir de</div>
                            <div className="pricing-row-price-value" id="admin-tarif-4-price">400€</div>
                          </div>
                        </div>

                        {/* 05 */}
                        <div className="pricing-row has-animation" data-delay="200">
                          <div className="pricing-row-num">05</div>
                          <div className="pricing-row-content">
                            <button className="pricing-row-toggle" aria-expanded="false">
                              <div className="pricing-row-title" id="admin-tarif-5-title">Site Web <em className="pricing-row-sub">E-Commerce</em> <span className="pricing-toggle-icon">+</span></div>
                            </button>
                            <div className="pricing-row-desc" id="admin-tarif-5-desc">Site sur mesure avec système d'achat intégré, paiement en ligne inclus.</div>
                            <div className="pricing-row-specs">
                              <ul>
                                <li>Design custom e-commerce responsive</li>
                                <li>Catalogue produits (pages, filtres, variantes)</li>
                                <li>Panier &amp; paiement en ligne (Stripe / PayPal)</li>
                                <li>Tableau de bord admin (gestion commandes, stocks)</li>
                                <li>Déploiement + formation à l'utilisation</li>
                              </ul>
                              <a className="ajax-link pricing-specs-cta" data-type="page-transition" href="/contact">Demander un devis →</a>
                            </div>
                          </div>
                          <div className="pricing-row-price">
                            <div className="pricing-row-price-label">À partir de</div>
                            <div className="pricing-row-price-value" id="admin-tarif-5-price">650€</div>
                          </div>
                        </div>

                        {/* 06 */}
                        <div className="pricing-row has-animation" data-delay="250">
                          <div className="pricing-row-num">06</div>
                          <div className="pricing-row-content">
                            <button className="pricing-row-toggle" aria-expanded="false">
                              <div className="pricing-row-title" id="admin-tarif-6-title">Covers <em className="pricing-row-sub">Digital</em> <span className="pricing-toggle-icon">+</span></div>
                            </button>
                            <div className="pricing-row-desc" id="admin-tarif-6-desc">Création de covers pour plateformes de streaming (Spotify, Deezer, Apple Music…).</div>
                            <div className="pricing-row-specs">
                              <ul>
                                <li>Visuel principal 3000×3000 px (norme streaming)</li>
                                <li>2 révisions incluses</li>
                                <li>Livraison JPEG + PNG haute résolution</li>
                                <li>Variantes (singles, EP, album) sur demande</li>
                                <li>Délai rapide — 5 à 10 jours ouvrés</li>
                              </ul>
                              <a className="ajax-link pricing-specs-cta" data-type="page-transition" href="/contact">Demander un devis →</a>
                            </div>
                          </div>
                          <div className="pricing-row-price">
                            <div className="pricing-row-price-label">À partir de</div>
                            <div className="pricing-row-price-value" id="admin-tarif-6-price">100€</div>
                          </div>
                        </div>

                        {/* 07 */}
                        <div className="pricing-row has-animation" data-delay="300">
                          <div className="pricing-row-num">07</div>
                          <div className="pricing-row-content">
                            <button className="pricing-row-toggle" aria-expanded="false">
                              <div className="pricing-row-title" id="admin-tarif-7-title">Covers <em className="pricing-row-sub">Physique</em> <span className="pricing-toggle-icon">+</span></div>
                            </button>
                            <div className="pricing-row-desc" id="admin-tarif-7-desc">Édition physique complète — cover, tracklisting, communications autour du projet.</div>
                            <div className="pricing-row-specs">
                              <ul>
                                <li>Couverture + verso (format CD / vinyle / cassette)</li>
                                <li>Tracklisting typographié &amp; design intérieur</li>
                                <li>Livrets / booklets (sur devis)</li>
                                <li>Fichiers print-ready haute résolution (300 DPI)</li>
                                <li>Communication autour de la sortie (visuels annonce, story...)</li>
                              </ul>
                              <a className="ajax-link pricing-specs-cta" data-type="page-transition" href="/contact">Demander un devis →</a>
                            </div>
                          </div>
                          <div className="pricing-row-price">
                            <div className="pricing-row-price-label">À partir de</div>
                            <div className="pricing-row-price-value" id="admin-tarif-7-price">350€</div>
                          </div>
                        </div>

                      </div>

                      <div className="pricing-note"><i className="fa-solid fa-circle-info"></i> &nbsp;Devis personnalisé gratuit — <a className="ajax-link pricing-note-link" data-type="page-transition" href="/contact">contactez-moi directement</a>.</div>

                    </div>
                    {/* /Pricing Area */}

                  </div>
                  {/* /Split */}

                </div>
                {/* /Main Content */}

              </div>
            </div>
            {/* /Content Scroll */}

            {/* CTA Row */}
            <div className="content-row full dark-section change-header-color tarifs-cta-split" data-bgcolor="#171717">
              <div className="tarifs-cta-img">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/projects/comptest.jpg" alt="Flores — Création" />
              </div>
              <div className="tarifs-cta-content">
                <span className="tarifs-cta-eyebrow">Prêt à franchir le cap ?</span>
                <h2 className="tarifs-cta-headline primary-font-title">
                  <span className="has-mask-fill">Créeons</span><br />
                  <span className="has-mask-fill">l'impact dont</span><br />
                  <span className="has-mask-fill">vous rêvez.</span>
                </h2>
                <p className="tarifs-cta-pitch">Identité visuelle, site web, covers — chaque projet mérite une attention unique. Devis gratuit, réponse sous 24h.</p>
                <div className="tarifs-cta-actions has-animation" data-delay="100">
                  <div className="clapat-button-wrap parallax-wrap hide-ball">
                    <div className="clapat-button parallax-element">
                      <div className="button-border outline rounded parallax-element-second">
                        <a target="_blank" href="https://discord.gg/9aDugrJyr5">
                          <span data-hover="COMMANDER">COMMANDER</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <a className="ajax-link tarifs-cta-link-sec" data-type="page-transition" href="/contact">Écrire un message →</a>
                </div>
              </div>
            </div>
            {/* /CTA Row */}

            <SiteFooter />
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
