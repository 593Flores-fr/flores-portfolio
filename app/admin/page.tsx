import { readJSON } from "@/lib/store";
import type { Project, PageView, Client } from "@/lib/store";
import Link from "next/link";

export default function AdminDashboard() {
  const projects = readJSON<Project[]>("projects.json");
  const views    = readJSON<PageView[]>("pageviews.json");
  const clients  = readJSON<Client[]>("clients.json");

  const today = new Date().toISOString().split("T")[0];
  const todayViews = views.filter((v) => v.timestamp.startsWith(today));

  const topPages = Object.entries(
    views.reduce<Record<string, number>>((acc, v) => {
      acc[v.path] = (acc[v.path] ?? 0) + 1;
      return acc;
    }, {})
  )
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  const cards = [
    { label: "Projets", value: projects.length, icon: "fa-folder-open", href: "/admin/projects", color: "#8c6144" },
    { label: "Vues totales", value: views.length, icon: "fa-eye", href: "/admin/analytics", color: "#3ddc84" },
    { label: "Vues aujourd'hui", value: todayViews.length, icon: "fa-chart-line", href: "/admin/analytics", color: "#60a5fa" },
    { label: "Clients inscrits", value: clients.length, icon: "fa-users", href: "#", color: "#a78bfa" },
  ];

  return (
    <div>
      <div style={{ marginBottom: 40 }}>
        <h1 style={{ fontFamily: "'Six Caps', sans-serif", fontSize: 52, letterSpacing: "0.04em", color: "#fff", lineHeight: 1, marginBottom: 8 }}>Dashboard.</h1>
        <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.35)" }}>Bienvenue dans votre espace admin Flores.</p>
      </div>

      {/* Stats */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 16, marginBottom: 40 }}>
        {cards.map((c) => (
          <Link key={c.label} href={c.href} style={{ textDecoration: "none" }}>
            <div style={{ background: "#111", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 8, padding: "24px", transition: "border-color 0.2s ease" }}>
              <i className={`fa-solid ${c.icon}`} style={{ fontSize: 20, color: c.color, marginBottom: 16, display: "block" }} />
              <div style={{ fontFamily: "'Six Caps', sans-serif", fontSize: 40, color: "#fff", lineHeight: 1, letterSpacing: "0.02em" }}>{c.value}</div>
              <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: 11, color: "rgba(255,255,255,0.3)", marginTop: 6, letterSpacing: "0.06em", textTransform: "uppercase" }}>{c.label}</div>
            </div>
          </Link>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
        {/* Pages les plus vues */}
        <div style={{ background: "#111", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 8, padding: 28 }}>
          <h2 style={{ fontFamily: "'Six Caps', sans-serif", fontSize: 28, letterSpacing: "0.04em", color: "#fff", marginBottom: 20 }}>Top pages</h2>
          {topPages.length === 0
            ? <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.25)" }}>Pas encore de données.</p>
            : topPages.map(([p, count]) => (
              <div key={p} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.5)" }}>{p}</span>
                <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 12, color: "#8c6144", fontWeight: 600 }}>{count} vues</span>
              </div>
            ))
          }
        </div>

        {/* Accès rapides */}
        <div style={{ background: "#111", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 8, padding: 28 }}>
          <h2 style={{ fontFamily: "'Six Caps', sans-serif", fontSize: 28, letterSpacing: "0.04em", color: "#fff", marginBottom: 20 }}>Accès rapide</h2>
          {[
            { href: "/admin/projects", label: "Gérer les projets", desc: "Ajouter, modifier, supprimer" },
            { href: "/admin/home",     label: "Modifier l'accueil", desc: "Textes hero & CTA" },
            { href: "/admin/tarifs",   label: "Modifier les tarifs", desc: "Prix & descriptions" },
            { href: "/admin/about",    label: "Modifier À propos", desc: "Bio & stats" },
          ].map((item) => (
            <Link key={item.href} href={item.href} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 0", borderBottom: "1px solid rgba(255,255,255,0.05)", textDecoration: "none" }}>
              <div>
                <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.7)", fontWeight: 500 }}>{item.label}</div>
                <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: 11, color: "rgba(255,255,255,0.25)" }}>{item.desc}</div>
              </div>
              <i className="fa-solid fa-arrow-right" style={{ fontSize: 11, color: "rgba(255,255,255,0.2)" }} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
