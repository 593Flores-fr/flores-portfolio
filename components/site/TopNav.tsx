"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/",          label: "Accueil"      },
  { href: "/portfolio", label: "Portfolio"    },
  { href: "/tarifs",    label: "Tarifs"       },
  { href: "/about",     label: "À propos"     },
  { href: "/contact",   label: "Contact"      },
] as const;

function active(href: string, path: string) {
  return href === "/" ? path === "/" : path.startsWith(href);
}

export default function TopNav() {
  const pathname = usePathname();

  return (
    <div
      id="top-nav"
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 2000,
        height: 52,
        background: "rgba(12,12,12,0.92)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 40px",
        gap: 16,
      }}
    >
      {/* Logo */}
      <Link href="/" style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
        <Image src="/images/logo-white.png" alt="Flores" width={90} height={36} style={{ height: 32, width: "auto" }} priority />
      </Link>

      {/* Nav centrale */}
      <nav style={{ display: "flex", alignItems: "center", gap: 24, position: "absolute", left: "50%", transform: "translateX(-50%)" }}>
        {LINKS.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              textDecoration: "none",
              color: active(href, pathname) ? "#8c6144" : "rgba(255,255,255,0.4)",
              transition: "color 0.2s ease",
            }}
          >
            {label}
          </Link>
        ))}
      </nav>

      {/* Bouton Se connecter */}
      <Link
        href="/login"
        style={{
          flexShrink: 0,
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          fontFamily: "'Poppins', sans-serif",
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          textDecoration: "none",
          color: "rgba(255,255,255,0.55)",
          border: "1px solid rgba(255,255,255,0.14)",
          borderRadius: 4,
          padding: "6px 14px",
          transition: "all 0.2s ease",
        }}
      >
        Se connecter
      </Link>
    </div>
  );
}
