import type { Metadata } from "next";
import { notFound } from "next/navigation";

import SiteFooter from "@/components/site/SiteFooter";
import SiteShell from "@/components/site/SiteShell";

/* ─── Static slugs ─────────────────────────────────────────────── */
export function generateStaticParams() {
  return [
    { slug: "yevta" },
    { slug: "vzx-build" },
    { slug: "vto-studio" },
    { slug: "cover-art" },
    { slug: "monica-dlr" },
    { slug: "213-huma" },
    { slug: "muzey" },
  ];
}

/* ─── Project data ──────────────────────────────────────────────── */
type ProjectData = {
  title: string;
  description: string;
  heroBg: string;
  role: string;
  date: string;
  externalLink: { href: string; icon: string; label: string };
  descText: string;
  images: { layout: "pair" | "triple"; imgs: { src: string; alt: string }[]; style?: React.CSSProperties }[];
  nextSlug: string;
  nextLabel: string;
  nextBg: string;
  nextFirstLine: string;
  nextSecondLine: string;
};

const projects: Record<string, ProjectData> = {
  yevta: {
    title: "Yevta",
    description: "Direction artistique — Yevta",
    heroBg: "/images/01hero.jpg",
    role: "Art Direction",
    date: "Fév. 2022",
    externalLink: { href: "https://www.behance.net/gallery/188644629/Yioiy", icon: "fa-solid fa-arrow-up-right-from-square", label: "Voir sur Behance" },
    descText: "Artiste avec lequel nous évoluons au sein de V.T.O. En quête d'une direction artistique plus froide & épurée, mes travaux ont évolué avec sa musique — chaque cover est une nouvelle exploration visuelle, entre minimalisme et atmosphère glaciale. Et ça n'est qu'un nouveau départ pour la suite.",
    images: [
      { layout: "pair", imgs: [{ src: "/images/projects/liners01.jpg", alt: "Yevta — Froid moscovite" }, { src: "/images/projects/liners02.jpg", alt: "Yevta — Photo clip" }] },
    ],
    nextSlug: "vzx-build",
    nextLabel: "Projet suivant.",
    nextBg: "/images/jjj.jpg",
    nextFirstLine: "Projet",
    nextSecondLine: "Suivant",
  },
  "vzx-build": {
    title: "VZX",
    description: "D.A. & Web — VZX Assemblage PC",
    heroBg: "/images/zzz.jpg",
    role: "D.A. & Web dév.",
    date: "Juil. 2024",
    externalLink: { href: "https://vzxbuild.fr", icon: "fa-solid fa-arrow-up-right-from-square", label: "vzxbuild.fr" },
    descText: "VZX est une marque spécialisée dans l'assemblage de PC haute performance. L'objectif : refondre l'identité visuelle et le site web pour mieux refléter le sérieux & la précision du service. Un design épuré, intuitif, conçu pour mettre en confiance les futurs clients et valoriser chaque configuration proposée.",
    images: [
      { layout: "triple", imgs: [{ src: "/images/projects/at.jpg", alt: "VZX — Interface" }, { src: "/images/projects/g3.jpg", alt: "VZX — Galerie" }, { src: "/images/projects/np.jpg", alt: "VZX — Nouveau projet" }] },
    ],
    nextSlug: "vto-studio",
    nextLabel: "Projet suivant.",
    nextBg: "/images/vto.jpg",
    nextFirstLine: "Projet",
    nextSecondLine: "Suivant",
  },
  "vto-studio": {
    title: "V.T.O. Studio",
    description: "Direction artistique & Web — V.T.O. Studio",
    heroBg: "/images/vtosf.jpg",
    role: "D.A. & Web-dév",
    date: "Jan. 2024",
    externalLink: { href: "/about", icon: "fa-solid fa-arrow-up-right-from-square", label: "En savoir +" },
    descText: "V.T.O. est un studio fondé par deux passionnés d'audiovisuel, avec pour mission de rassembler une communauté de créateurs et de rendre les pratiques audiovisuelles accessibles à tous. Un espace collaboratif où les talents peuvent échanger, s'inspirer mutuellement et développer leurs projets dans un environnement propice à la création et à l'innovation.",
    images: [
      { layout: "triple", imgs: [{ src: "/images/projects/p1.jpg", alt: "V.T.O. Studio — Identité" }, { src: "/images/projects/nano02.jpg", alt: "V.T.O. Studio — Nano 02" }, { src: "/images/projects/nano3.jpg", alt: "V.T.O. Studio — Nano 03" }] },
    ],
    nextSlug: "cover-art",
    nextLabel: "Projet suivant.",
    nextBg: "/images/projects/A1.png",
    nextFirstLine: "Projet",
    nextSecondLine: "Suivant",
  },
  "cover-art": {
    title: "Cover-Art",
    description: "Graphisme — Cover-Art",
    heroBg: "/images/defil2.png",
    role: "Graphisme",
    date: "2021–2024",
    externalLink: { href: "https://www.tiktok.com/@593flores", icon: "fa-brands fa-tiktok", label: "@593flores" },
    descText: "Covers, fonds d'écran, affiches & posters — des formats ouverts à l'interprétation, ancrés dans les influences qui m'ont marqué : jeux vidéo, cinéma, pop culture, actualité. Un exercice de style permanent entre composition, typographie et atmosphère, où chaque visuel raconte quelque chose sans un mot.",
    images: [
      { layout: "triple", imgs: [{ src: "/images/projects/A1.png", alt: "Cover-Art — A1" }, { src: "/images/projects/a3.png", alt: "Cover-Art — A3" }, { src: "/images/projects/a4.png", alt: "Cover-Art — A4" }] },
      { layout: "pair", imgs: [{ src: "/images/projects/a5.png", alt: "Cover-Art — A5" }, { src: "/images/projects/a6.png", alt: "Cover-Art — A6" }], style: { marginTop: "3px" } },
    ],
    nextSlug: "monica-dlr",
    nextLabel: "Projet suivant.",
    nextBg: "/images/Mdlr.png",
    nextFirstLine: "Projet",
    nextSecondLine: "Suivant",
  },
  "monica-dlr": {
    title: "MDLR",
    description: "Branding — MDLR Couture",
    heroBg: "/images/mdlrsf.png",
    role: "Branding",
    date: "Déc. 2023",
    externalLink: { href: "https://www.tiktok.com/@mdlrcouture", icon: "fa-brands fa-tiktok", label: "@mdlrcouture" },
    descText: "Bienvenue dans le monde d'une passionnée de couture, qui a décidé de partager son savoir sur les réseaux sociaux. Le projet MDLR allie identité visuelle soignée et présence digitale cohérente — pour promouvoir un savoir-faire artisanal avec l'esthétique qu'il mérite.",
    images: [
      { layout: "triple", imgs: [{ src: "/images/projects/mdlr1.png", alt: "MDLR — 01" }, { src: "/images/projects/mdlr2.png", alt: "MDLR — 02" }, { src: "/images/projects/mdlr3.png", alt: "MDLR — 03" }] },
      { layout: "pair", imgs: [{ src: "/images/projects/mdlr4.jpg", alt: "MDLR — 04" }, { src: "/images/projects/mdlr5.jpg", alt: "MDLR — 05" }], style: { marginTop: "3px" } },
      { layout: "pair", imgs: [{ src: "/images/projects/mdlr6.jpg", alt: "MDLR — 06" }, { src: "/images/projects/mdlr7.jpg", alt: "MDLR — 07" }], style: { marginTop: "3px" } },
    ],
    nextSlug: "213-huma",
    nextLabel: "Projet suivant.",
    nextBg: "/images/projects/huma sf.jpg",
    nextFirstLine: "Projet",
    nextSecondLine: "Suivant",
  },
  "213-huma": {
    title: "213 HUMA",
    description: "Charte graphique — 213 HUMA",
    heroBg: "/images/projects/huma sf.jpg",
    role: "Charte graphique",
    date: "Jan. 2024",
    externalLink: { href: "https://www.helloasso.com", icon: "fa-solid fa-arrow-up-right-from-square", label: "HelloAsso" },
    descText: "Suite au logo, il a fallu décliner l'identité 213 HUMA en une charte graphique complète : assets numériques, intro du studio, affiches de courts métrages. Une cohérence visuelle construite pièce par pièce, pour donner à l'association une présence forte et professionnelle sur tous ses supports.",
    images: [
      { layout: "pair", imgs: [{ src: "/images/projects/fold01.jpg", alt: "213 HUMA — Fold 01" }, { src: "/images/projects/fold02.jpg", alt: "213 HUMA — Fold 02" }] },
      { layout: "pair", imgs: [{ src: "/images/projects/fold03.jpg", alt: "213 HUMA — Fold 03" }, { src: "/images/projects/fold04.jpg", alt: "213 HUMA — Fold 04" }], style: { marginTop: "3px" } },
      { layout: "pair", imgs: [{ src: "/images/projects/T1.jpg", alt: "213 HUMA — T1" }, { src: "/images/projects/T2.jpg", alt: "213 HUMA — T2" }], style: { marginTop: "3px" } },
      { layout: "pair", imgs: [{ src: "/images/projects/T3.jpg", alt: "213 HUMA — T3" }, { src: "/images/projects/T4.jpg", alt: "213 HUMA — T4" }], style: { marginTop: "3px" } },
    ],
    nextSlug: "muzey",
    nextLabel: "Projet suivant.",
    nextBg: "/images/wuk.png",
    nextFirstLine: "Projet",
    nextSecondLine: "Suivant",
  },
  muzey: {
    title: "Muzey",
    description: "Art Direction — Muzey",
    heroBg: "/images/pdv2.png",
    role: "Art Direction",
    date: "Déc. 2024",
    externalLink: { href: "https://www.behance.net/flores_notion", icon: "fa-brands fa-behance", label: "Behance" },
    descText: "Muzey est une application de streaming musical conçue pour soutenir les artistes indépendants. Une marketplace dédiée aux ressources musicales — prods, drumkits, loops — exclusivement accessibles en Muzecoin. À la croisée de l'art et de la tech, un projet ambitieux encore en développement, qui réinvente l'économie créative.",
    images: [
      { layout: "triple", imgs: [{ src: "/images/projects/p8a1.png", alt: "Muzey — 01" }, { src: "/images/projects/p8a3.png", alt: "Muzey — 03" }, { src: "/images/projects/p8a2.png", alt: "Muzey — 02" }] },
      { layout: "triple", imgs: [{ src: "/images/projects/mz1.png", alt: "Muzey — MZ1" }, { src: "/images/projects/mz2.png", alt: "Muzey — MZ2" }, { src: "/images/projects/MZ3.png", alt: "Muzey — MZ3" }], style: { marginTop: "3px" } },
    ],
    nextSlug: "portfolio",
    nextLabel: "Tout voir.",
    nextBg: "/images/pdv2.png",
    nextFirstLine: "Tout",
    nextSecondLine: "Le Portfolio",
  },
};

/* ─── Page ──────────────────────────────────────────────────────── */
type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects[slug];
  if (!project) return { title: "Flores — Projet" };
  return {
    title: `Flores — ${project.title}`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects[slug];
  if (!project) notFound();

  const nextHref = project.nextSlug === "portfolio" ? "/portfolio" : `/portfolio/${project.nextSlug}`;

  return (
    <div className="hidden hidden-ball smooth-scroll1 rounded-borders" data-primary-color="#8c6144">
      <main>
        {/* Preloader + cursor + side-nav */}
        <SiteShell activePage="portfolio" />

        <div className="cd-index cd-main-content">
          <div id="clapat-page-content" className="light-content" data-bgcolor="#0c0c0c">


            {/* Content Scroll */}
            <div id="content-scroll">
              <div id="main">

                {/* Hero */}
                <div id="hero" className="has-image">
                  <div id="hero-styles">
                    <div id="hero-caption" className="content-full-width height-title">
                      <div className="inner">
                        <h1 className="hero-title caption-timeline primary-font-title"><span id="admin-proj-title">{project.title}</span></h1>
                      </div>
                    </div>
                    <div id="hero-footer">
                      <div className="hero-footer-left">
                        <div className="button-wrap right scroll-down">
                          <div className="icon-wrap parallax-wrap">
                            <div className="button-icon parallax-element"><i className="arrow-icon-down"></i></div>
                          </div>
                          <div className="button-text sticky right"><span data-hover="Scroll">Scroll</span></div>
                        </div>
                      </div>
                      <div className="hero-footer-right">
                        <div id="share" className="page-action-content" data-text="Share:"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="hero-image-wrapper">
                  <div id="hero-background-layer" className="parallax-scroll-image">
                    <div id="hero-bg-image" style={{ backgroundImage: `url(${project.heroBg})` }}></div>
                  </div>
                </div>

                {/* Main Content */}
                <div id="main-content">
                  <div id="main-page-content">

                    {/* Intro Split */}
                    <div className="proj-intro-split">
                      <div className="proj-meta-card">
                        <p className="proj-meta-label">{project.title}</p>
                        <div className="proj-meta-rule"></div>
                        <div className="proj-meta-item">
                          <span className="proj-meta-key">Rôle</span>
                          <span className="proj-meta-val" id="admin-proj-role">{project.role}</span>
                        </div>
                        <div className="proj-meta-item">
                          <span className="proj-meta-key">{slug === "cover-art" ? "Période" : "Date"}</span>
                          <span className="proj-meta-val" id="admin-proj-date">{project.date}</span>
                        </div>
                        <a className="proj-meta-link" href={project.externalLink.href} target={project.externalLink.href.startsWith("/") ? undefined : "_blank"}>
                          <i className={project.externalLink.icon}></i> {project.externalLink.label}
                        </a>
                      </div>
                      <div>
                        <p className="proj-desc-text" id="admin-proj-desc">{project.descText}</p>
                      </div>
                    </div>

                    {/* Images */}
                    {project.images.map((group, i) => (
                      <div key={i} className={group.layout === "pair" ? "proj-img-pair" : "proj-img-triple"} style={group.style}>
                        {group.imgs.map((img, j) => (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img key={j} src={img.src} alt={img.alt} />
                        ))}
                      </div>
                    ))}

                    {/* Extra wide image for yevta */}
                    {slug === "yevta" && (
                      <div style={{ background: "#0c0c0c", padding: "3px 0 0" }}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="/images/projects/mlt.jpg" alt="Yevta — Direction artistique" style={{ width: "100%", display: "block", aspectRatio: "21/9", objectFit: "cover" }} />
                      </div>
                    )}

                  </div>
                </div>

                {/* Project Navigation */}
                <div id="project-nav">
                  <div className="next-project-wrap">
                    <div className="next-project-caption text-align-center content-full-width height-title">
                      <div className="next-caption-wrapper">
                        <div className="caption-wrapper">
                          <a className="next-ajax-link-project auto-trigger" data-type="page-transition" href={nextHref} data-color="#8c6144" data-firstline={project.nextFirstLine} data-secondline={project.nextSecondLine}></a>
                          <div className="next-caption">
                            <div className="next-hero-subtitle"><span></span></div>
                            <div className="next-hero-title primary-font-title"><span>{project.nextLabel}</span></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="next-hero-progress"><span></span></div>
                    <div className="next-project-image-wrapper">
                      <div className="next-project-image">
                        <div className="next-project-image-bg" style={{ backgroundImage: `url(${project.nextBg})` }}></div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Footer */}
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
