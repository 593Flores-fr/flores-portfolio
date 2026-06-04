import type { Metadata } from "next";
import SiteFooter from "@/components/site/SiteFooter";
import SiteShell from "@/components/site/SiteShell";

export const metadata: Metadata = {
  title: "Flores — Portfolio",
  description: "Portfolio créatif - Découvrez mon univers.",
};

export default function PortfolioPage() {
  return (
    <div className="hidden hidden-ball smooth-scroll1 rounded-borders" data-primary-color="#8c6144">
      <main>
        {/* Preloader + cursor + side-nav */}
        <SiteShell activePage="portfolio" />

        <div className="cd-index cd-main-content">
          {/* Page Content */}
          <div id="clapat-page-content" className="light-content" data-bgcolor="#0c0c0c">

            {/* Content Scroll */}
            <div id="content-scroll">

              {/* Main */}
              <div id="main">

                {/* Main Content */}
                <div id="main-content">

                  {/* Showcase Slider Holder */}
                  <div id="itemsWrapperLinks">
                    <div id="itemsWrapper" className="webgl-fitthumbs fx-six">

                      {/* ClaPat Slider */}
                      <div className="clapat-slider-wrapper showcase-gallery preview-mode-enabled">
                        <div className="clapat-slider">

                          {/* ClaPat Main Slider */}
                          <div className="clapat-slider-viewport">

                            <div className="clapat-slide s25">
                              <div className="slide-events">
                                <div className="slide-inner photo-filter" data-centerLine="VIEW">
                                  <div className="slide-moving">
                                    <div className="trigger-item" data-centerLine="OPEN">
                                      <div className="img-mask">
                                        <a className="slide-link" data-type="page-transition" href="/portfolio/yevta">
                                          <div className="parallax-wrap">
                                            <div className="parallax-element">
                                              <i className="fa-solid fa-arrow-up-right-from-square"></i>
                                            </div>
                                          </div>
                                        </a>
                                        <div className="section-image trigger-item-link">
                                          {/* eslint-disable-next-line @next/next/no-img-element */}
                                          <img src="/images/01hero.jpg" className="item-image grid__item-img" alt="" />
                                        </div>
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img src="/images/01hero.jpg" className="grid__item-img grid__item-img--large" alt="" />
                                        <div className="slide-hover-info">
                                          <span className="shi-cat">Cover &amp; D.A.</span>
                                          <div className="shi-title">Yevta</div>
                                          <p className="shi-desc">Direction artistique et couverture pour une artiste émergente.</p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="slide-caption">
                                      <div className="slide-title"><span>Yevta</span></div>
                                      <div className="slide-cat"><span>Cover & D.A.</span></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="clapat-slide s75">
                              <div className="slide-events speed-50 has-scale-medium">
                                <div className="slide-inner design-filter" data-centerLine="VIEW">
                                  <div className="slide-moving">
                                    <div className="trigger-item" data-centerLine="OPEN">
                                      <div className="img-mask">
                                        <a className="slide-link" data-type="page-transition" href="/portfolio/vzx-build">
                                          <div className="parallax-wrap">
                                            <div className="parallax-element">
                                              <i className="fa-solid fa-arrow-up-right-from-square"></i>
                                            </div>
                                          </div>
                                        </a>
                                        <div className="section-image trigger-item-link">
                                          {/* eslint-disable-next-line @next/next/no-img-element */}
                                          <img src="/images/jjj.jpg" className="item-image grid__item-img" alt="" />
                                        </div>
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img src="/images/jjj.jpg" className="grid__item-img grid__item-img--large" alt="" />
                                        <div className="slide-hover-info">
                                          <span className="shi-cat">D.A. + Web</span>
                                          <div className="shi-title">VZX Build</div>
                                          <p className="shi-desc">Site web &amp; identité visuelle pour un assembleur PC premium.</p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="slide-caption">
                                      <div className="slide-title"><span>VZX - PC BUILDER</span></div>
                                      <div className="slide-cat"><span>D.A. + Web</span></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="clapat-slide s0">
                              <div className="slide-events has-scale-small">
                                <div className="slide-inner photo-filter" data-centerLine="VIEW">
                                  <div className="slide-moving">
                                    <div className="trigger-item" data-centerLine="OPEN">
                                      <div className="img-mask">
                                        <a className="slide-link" data-type="page-transition" href="/portfolio/vto-studio">
                                          <div className="parallax-wrap">
                                            <div className="parallax-element">
                                              <i className="fa-solid fa-arrow-up-right-from-square"></i>
                                            </div>
                                          </div>
                                        </a>
                                        <div className="section-image trigger-item-link">
                                          {/* eslint-disable-next-line @next/next/no-img-element */}
                                          <img src="/images/vto.jpg" className="item-image grid__item-img" alt="" />
                                        </div>
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img src="/images/vto.jpg" className="grid__item-img grid__item-img--large" alt="" />
                                        <div className="slide-hover-info">
                                          <span className="shi-cat">Association</span>
                                          <div className="shi-title">V.T.O Studio</div>
                                          <p className="shi-desc">Identité graphique complète pour une association culturelle.</p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="slide-caption">
                                      <div className="slide-title"><span>V.T.O Studio</span></div>
                                      <div className="slide-cat"><span>Association</span></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="clapat-slide s100">
                              <div className="slide-events has-scale-medium">
                                <div className="slide-inner design-filter" data-centerLine="Voir">
                                  <div className="slide-moving">
                                    <div className="trigger-item" data-centerLine="Ouvrir">
                                      <div className="img-mask">
                                        <a className="slide-link" data-type="page-transition" href="/portfolio/cover-art">
                                          <div className="parallax-wrap">
                                            <div className="parallax-element">
                                              <i className="fa-solid fa-arrow-up-right-from-square"></i>
                                            </div>
                                          </div>
                                        </a>
                                        <div className="section-image trigger-item-link">
                                          {/* eslint-disable-next-line @next/next/no-img-element */}
                                          <img src="/images/projects/A1.png" className="item-image grid__item-img" alt="" />
                                        </div>
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img src="/images/projects/A1.png" className="grid__item-img grid__item-img--large" alt="" />
                                        <div className="slide-hover-info">
                                          <span className="shi-cat">Perso</span>
                                          <div className="shi-title">CoverArt</div>
                                          <p className="shi-desc">Exploration créative personnelle — art digital &amp; expérimentation.</p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="slide-caption">
                                      <div className="slide-title"><span>CovertArt</span></div>
                                      <div className="slide-cat"><span>Perso</span></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="clapat-slide s50">
                              <div className="slide-events speed-50">
                                <div className="slide-inner photo-filter" data-centerLine="Voir">
                                  <div className="slide-moving">
                                    <div className="trigger-item" data-centerLine="Ouvrir">
                                      <div className="img-mask">
                                        <a className="slide-link" data-type="page-transition" href="/portfolio/monica-dlr">
                                          <div className="parallax-wrap">
                                            <div className="parallax-element">
                                              <i className="fa-solid fa-arrow-up-right-from-square"></i>
                                            </div>
                                          </div>
                                        </a>
                                        <div className="section-image trigger-item-link">
                                          {/* eslint-disable-next-line @next/next/no-img-element */}
                                          <img src="/images/Mdlr.png" className="item-image grid__item-img" alt="" />
                                        </div>
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img src="/images/Mdlr.png" className="grid__item-img grid__item-img--large" alt="" />
                                        <div className="slide-hover-info">
                                          <span className="shi-cat">Logo Design</span>
                                          <div className="shi-title">MDLR</div>
                                          <p className="shi-desc">Création de logo pour une créatrice &amp; couturière indépendante.</p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="slide-caption">
                                      <div className="slide-title"><span>MDLR</span></div>
                                      <div className="slide-cat"><span>Design d'un logo</span></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="clapat-slide s50">
                              <div className="slide-events speed-50">
                                <div className="slide-inner photo-filter" data-centerLine="Voir">
                                  <div className="slide-moving">
                                    <div className="trigger-item" data-centerLine="Ouvrir">
                                      <div className="img-mask">
                                        <a className="slide-link" data-type="page-transition" href="/portfolio/213-huma">
                                          <div className="parallax-wrap">
                                            <div className="parallax-element">
                                              <i className="fa-solid fa-arrow-up-right-from-square"></i>
                                            </div>
                                          </div>
                                        </a>
                                        <div className="section-image trigger-item-link">
                                          {/* eslint-disable-next-line @next/next/no-img-element */}
                                          <img src="/images/projects/huma.jpg" className="item-image grid__item-img" alt="" />
                                        </div>
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img src="/images/projects/huma sf.jpg" className="grid__item-img grid__item-img--large" alt="" />
                                        <div className="slide-hover-info">
                                          <span className="shi-cat">Charte graphique</span>
                                          <div className="shi-title">213 HUMA</div>
                                          <p className="shi-desc">Charte graphique complète pour un projet associatif engagé.</p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="slide-caption">
                                      <div className="slide-title"><span>213 HUMA</span></div>
                                      <div className="slide-cat"><span>Charte graphique</span></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                          </div>
                          {/* /ClaPat Main Slider */}

                          <div className="slider-fixed-content">
                            <div id="slide-inner-temporary" className="fadeout-element">
                              <div id="slide-inner-caption" className="content-full-width text-align-center height-title">
                                <div className="inner">
                                  <h1 className="slide-hero-title caption-timeline primary-font-title"><span>PORTFOLIO</span></h1>
                                  <div className="slide-hero-subtitle caption-timeline"><span>CLIQUEZ & OUVREZ LE PROJET POUR EN SAVOIR +<br className="destroy" /> POURQUOI NE PAS VOIR LE VOTRE PROCHAINEMENT ?</span></div>
                                </div>
                              </div>
                            </div>
                          </div>

                        </div>

                        <div className="gallery-zoom-wrapper"></div>
                        <div className="gallery-thumbs-wrapper"></div>
                        <div className="gallery-close-thumbs"></div>

                      </div>
                      {/* /ClaPat Slider */}

                    </div>
                  </div>
                  {/* Showcase Slider Holder */}

                </div>
                {/* /Main Content */}

              </div>
              {/* /Main */}

              {/* Footer */}
              <footer className="hidden">
                <div id="footer-container">

                  <div className="cp-button-prev clapat-button">
                    <div className="icon-wrap-scale">
                      <div className="icon-wrap parallax-wrap">
                        <div className="button-icon parallax-element">
                          <i className="fa-solid fa-arrow-left"></i>
                        </div>
                      </div>
                    </div>
                    <div className="button-text sticky left"><span data-hover="PREV">Préc.</span></div>
                  </div>

                  <div className="progress-info fadeout-element">
                    <div className="progress-info-fill">Scroll & clique</div>
                    <div className="progress-info-fill-2">Scroll & clique</div>
                  </div>

                  <div className="cp-button-next clapat-button">
                    <div className="icon-wrap-scale">
                      <div className="icon-wrap parallax-wrap">
                        <div className="button-icon parallax-element">
                          <i className="fa-solid fa-arrow-right"></i>
                        </div>
                      </div>
                    </div>
                    <div className="button-text sticky right"><span data-hover="NEXT">Suiv.</span></div>
                  </div>

                </div>
              </footer>
              {/* /Footer */}

            </div>
            {/* /Content Scroll */}

            <div className="thumb-wrapper">
              <div className="thumb-container">
                <div className="thumb-page" data-src="/images/01hero.jpg"></div>
                <div className="thumb-page" data-src="/images/02hero.jpg"></div>
                <div className="thumb-page" data-src="/images/03hero.jpg"></div>
                <div className="thumb-page" data-src="/images/04hero.jpg"></div>
                <div className="thumb-page" data-src="/images/05hero.jpg"></div>
                <div className="thumb-page" data-src="/images/06hero.jpg"></div>
                <div className="thumb-page" data-src="/images/01hero.jpg"></div>
                <div className="thumb-page" data-src="/images/02hero.jpg"></div>
              </div>
            </div>

            <div id="app" />

          </div>
          {/* /Page Content */}

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
