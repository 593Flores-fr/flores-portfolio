"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/admin",            label: "Dashboard",   icon: "fa-gauge-high"    },
  { href: "/admin/projects",   label: "Projets",     icon: "fa-folder-open"   },
  { href: "/admin/home",       label: "Accueil",     icon: "fa-house"         },
  { href: "/admin/about",      label: "À propos",    icon: "fa-user"          },
  { href: "/admin/tarifs",     label: "Tarifs",      icon: "fa-tag"           },
  { href: "/admin/analytics",  label: "Analytics",   icon: "fa-chart-line"    },
];

export default function AdminSidebar() {
  const path = usePathname();

  return (
    <aside style={{
      width: 220, flexShrink: 0, background: "#0f0f0f",
      borderRight: "1px solid rgba(255,255,255,0.06)",
      display: "flex", flexDirection: "column", padding: "28px 0",
      position: "sticky", top: 0, height: "100dvh",
    }}>
      {/* Logo */}
      <div style={{ padding: "0 24px 28px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <Link href="/" style={{ display: "inline-block" }}>
          <Image src="/images/logo-white.png" alt="Flores" width={80} height={32} style={{ height: 28, width: "auto" }} />
        </Link>
        <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.2)", marginTop: 8 }}>Panel Admin</p>
      </div>

      {/* Nav */}
      <nav style={{ flex: 1, padding: "16px 0" }}>
        {LINKS.map(({ href, label, icon }) => {
          const active = href === "/admin" ? path === "/admin" : path.startsWith(href);
          return (
            <Link key={href} href={href} style={{
              display: "flex", alignItems: "center", gap: 12,
              padding: "11px 24px", textDecoration: "none",
              fontFamily: "'Poppins', sans-serif", fontSize: 12, fontWeight: 500,
              color: active ? "#fff" : "rgba(255,255,255,0.35)",
              background: active ? "rgba(255,255,255,0.05)" : "transparent",
              borderLeft: active ? "2px solid #8c6144" : "2px solid transparent",
              transition: "all 0.15s ease",
            }}>
              <i className={`fa-solid ${icon}`} style={{ fontSize: 12, width: 14, textAlign: "center", flexShrink: 0 }} />
              {label}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div style={{ padding: "16px 24px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: "'Poppins', sans-serif", fontSize: 11, color: "rgba(255,255,255,0.25)", textDecoration: "none" }}>
          <i className="fa-solid fa-arrow-left" style={{ fontSize: 10 }} /> Voir le site
        </Link>
      </div>
    </aside>
  );
}
