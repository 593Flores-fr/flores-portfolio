import type { Metadata } from "next";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import SiteShell from "@/components/site/SiteShell";

export const metadata: Metadata = {
  title: "Flores — Contact",
  description: "Contactez Flores pour votre prochain projet créatif — identité visuelle, site web, covers. Devis gratuit.",
};

export default function ContactPage() {
  return (
    <div className="hidden hidden-ball smooth-scroll1 rounded-borders page-contact" data-primary-color="#8c6144">
      <main>
        {/* Preloader + cursor + side-nav */}
        <SiteShell activePage="contact" />

        <div className="cd-index cd-main-content">
          <div id="clapat-page-content" className="light-content" data-bgcolor="#0c0c0c">
            <SiteHeader />
            <div id="content-scroll">
              <div id="main">

                {/* Hero — compact */}
                <div id="hero">
                  <div id="hero-styles">
                    <div className="hero-eyebrow">
                      <span>Disponible</span>
                      <i className="hero-eyebrow-sep"></i>
                      <span>Discutons de votre projet</span>
                    </div>
                    <div id="hero-caption" className="content-full-width parallax-scroll-caption text-align-center height-title">
                      <div className="inner">
                        <h1 className="hero-title caption-timeline primary-font-title"><span>HELLO.</span></h1>
                        <div className="hero-tagline">
                          <div className="hero-tagline-line"></div>
                          <span>Devis gratuit · Réponse sous 24h</span>
                          <div className="hero-tagline-line"></div>
                        </div>
                      </div>
                    </div>
                    <div id="hero-footer">
                      <div className="hero-footer-left">
                        <div className="button-wrap right scroll-down">
                          <div className="icon-wrap parallax-wrap"><div className="button-icon parallax-element"><i className="fa-solid fa-angle-down"></i></div></div>
                          <div className="button-text sticky right"><span data-hover="Scroll">Scroll</span></div>
                        </div>
                      </div>
                      <div className="hero-footer-right">
                        <span className="hero-available-dot"></span>
                        <div id="info-text">@593Flores</div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Hero */}

                {/* Main Content */}
                <div id="main-content">
                  <div id="main-page-content" className="content-max-width">

                    <div className="content-row dark-section cf-page-split" data-bgcolor="#0c0c0c">

                      {/* ─── Sidebar gauche ─────────────────────── */}
                      <div className="cf-sidebar">
                        <div className="cf-sidebar-badge" data-status-badge data-status="available">
                          <span className="hero-available-dot" data-status-dot></span>
                          <span data-status-short>Disponible</span>
                        </div>
                        <h1 className="cf-sidebar-title primary-font-title">HELLO.</h1>
                        <p className="cf-sidebar-sub" id="admin-contact-sub">Devis gratuit<br />Réponse sous 24h<br />Pas de robot.</p>
                        <div className="cf-sidebar-rule"></div>
                        <p className="cf-sidebar-hint">Retrouvez-moi sur</p>
                        <div className="cf-sidebar-socials">
                          <a href="https://discord.gg/9aDugrJyr5" target="_blank" className="cf-sidebar-social" aria-label="Discord" id="admin-contact-discord"><i className="fa-brands fa-discord"></i></a>
                          <a href="https://www.instagram.com/593floores/" target="_blank" className="cf-sidebar-social" aria-label="Instagram" id="admin-contact-instagram"><i className="fa-brands fa-instagram"></i></a>
                          <a href="https://www.tiktok.com/@593flores" target="_blank" className="cf-sidebar-social" aria-label="TikTok" id="admin-contact-tiktok"><i className="fa-brands fa-tiktok"></i></a>
                          <a href="https://www.behance.net/flores_notion" target="_blank" className="cf-sidebar-social" aria-label="Behance" id="admin-contact-behance"><i className="fa-brands fa-behance"></i></a>
                        </div>
                        <a href="mailto:593maldito@gmail.com" className="cf-sidebar-email" id="admin-contact-email">593maldito@gmail.com</a>
                      </div>

                      {/* ─── Zone formulaire ────────────────────── */}
                      <div className="cf-form-area">

                        <form id="cf-form" action="https://formspree.io/f/xqazvbjn" method="POST" encType="multipart/form-data">

                          {/* 01 Service */}
                          <div className="cf-block">
                            <span className="cf-block-label"><em>01</em> Quel service vous intéresse ?</span>
                            <div className="cf-service-grid">
                              <label className="cf-pill"><input type="radio" name="service" value="Identité Visuelle" /><span>Identité Visuelle</span></label>
                              <label className="cf-pill"><input type="radio" name="service" value="Site Web" /><span>Site Web</span></label>
                              <label className="cf-pill"><input type="radio" name="service" value="Cover Art" /><span>Cover Art</span></label>
                              <label className="cf-pill"><input type="radio" name="service" value="Pack Stream" /><span>Pack Stream</span></label>
                              <label className="cf-pill"><input type="radio" name="service" value="Direction Artistique" /><span>Direction Artistique</span></label>
                              <label className="cf-pill"><input type="radio" name="service" value="Accompagnement Artistes" /><span>Accompagnement Artistes</span></label>
                              <label className="cf-pill"><input type="radio" name="service" value="Autre" /><span>Autre</span></label>
                            </div>
                          </div>

                          {/* 02-03 Nom + Email */}
                          <div className="cf-block cf-row-2">
                            <div className="cf-field">
                              <label className="cf-block-label" htmlFor="cf-name"><em>02</em> Votre nom</label>
                              <input name="name" type="text" id="cf-name" placeholder="Comment vous appelez-vous ?" required />
                            </div>
                            <div className="cf-field">
                              <label className="cf-block-label" htmlFor="cf-email"><em>03</em> Votre email</label>
                              <input name="email" type="email" id="cf-email" placeholder="Votre adresse mail" required />
                            </div>
                          </div>

                          {/* 04 Discord (optionnel) */}
                          <div className="cf-block">
                            <label className="cf-block-label" htmlFor="cf-discord">
                              <em>04</em> Votre Discord
                              <span className="cf-optional">, pour un contact encore plus rapide</span>
                            </label>
                            <div className="cf-discord-field">
                              <span className="cf-discord-icon"><i className="fa-brands fa-discord"></i></span>
                              <input name="discord" type="text" id="cf-discord" placeholder="NomUtilisateur ou lien de serveur" />
                            </div>
                          </div>

                          {/* 05 Message */}
                          <div className="cf-block">
                            <label className="cf-block-label" htmlFor="cf-message"><em>05</em> Votre message</label>
                            <textarea name="message" id="cf-message" rows={6} placeholder="Décrivez votre projet : objectifs, vision, délais, budget approximatif..." required></textarea>
                          </div>

                          {/* 06 Drag & drop */}
                          <div className="cf-block">
                            <span className="cf-block-label"><em>06</em> Fichiers de référence <span className="cf-optional">facultatif · 3 fichiers max · 50 Mo chacun</span></span>
                            <div className="cf-drop-zone" id="cfDropZone">
                              <div className="cf-drop-icon"><i className="fa-solid fa-cloud-arrow-up"></i></div>
                              <p className="cf-drop-text">Glissez vos images ici</p>
                              <p className="cf-drop-hint">ou <button type="button" id="cfPickBtn">parcourez vos fichiers</button></p>
                              <input type="file" id="cfFileInput" name="files" multiple accept="image/*,.pdf" />
                              <div className="cf-files-list" id="cfFileList"></div>
                            </div>
                            <div className="cf-drop-error" id="cfDropError"></div>
                          </div>

                          {/* Submit */}
                          <div className="cf-block cf-submit-row">
                            <div id="cf-feedback"></div>
                            <div className="cf-submit-wrap">
                              <div className="clapat-button-wrap parallax-wrap link">
                                <div className="clapat-button parallax-element">
                                  <div className="button-border rounded outline">
                                    <button type="submit" className="send_message" id="cf-submit">Envoyer le message</button>
                                  </div>
                                </div>
                              </div>
                              <span className="cf-submit-note">Réponse sous 24–48h · Devis 100% gratuit</span>
                            </div>
                          </div>

                        </form>

                      </div>
                      {/* /Zone formulaire */}

                    </div>

                  </div>
                </div>
                {/* /Main Content */}

                {/* Page CTA */}
                <div className="page-cta-strip">
                  <div className="page-cta-inner">
                    <div className="page-cta-left">
                      <span className="page-cta-eyebrow">Mes travaux</span>
                      <p className="page-cta-text">En attendant ma r&eacute;ponse, jetez un oeil &agrave; mes <strong>r&eacute;alisations</strong>.</p>
                    </div>
                    <a href="/portfolio" className="ajax-link page-cta-btn" data-type="page-transition">
                      Voir le portfolio <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
                {/* /Page CTA */}

                <SiteFooter />
              </div>
            </div>
            {/* /Content Scroll */}

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
