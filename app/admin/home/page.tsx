"use client";
import { useEffect, useState } from "react";

type HomeData = {
  eyebrow: string;
  tagline: string;
  ctaHeadline: string;
  ctaPitch: string;
  status: string;
  statusText: string;
};

const titleStyle: React.CSSProperties = { fontFamily: "'Six Caps', sans-serif", fontSize: 52, letterSpacing: "0.04em", color: "#fff", lineHeight: 1, marginBottom: 8 };
const subStyle: React.CSSProperties = { fontFamily: "'Poppins', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.35)", marginBottom: 32 };
const labelStyle: React.CSSProperties = { fontFamily: "'Poppins', sans-serif", fontSize: 9, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "rgba(255,255,255,0.3)", display: "block", marginBottom: 8 };
const inputStyle: React.CSSProperties = { width: "100%", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 4, padding: "10px 14px", fontSize: 13, color: "rgba(255,255,255,0.8)", fontFamily: "'Poppins', sans-serif", outline: "none", boxSizing: "border-box" as const };
const btnStyle: React.CSSProperties = { display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 20px", background: "#8c6144", color: "#fff", border: "none", borderRadius: 4, fontFamily: "'Poppins', sans-serif", fontSize: 12, fontWeight: 600, cursor: "pointer" };

const defaultData: HomeData = {
  eyebrow: "",
  tagline: "",
  ctaHeadline: "",
  ctaPitch: "",
  status: "available",
  statusText: "",
};

export default function AdminHomePage() {
  const [formData, setFormData] = useState<HomeData>(defaultData);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  useEffect(() => {
    fetch("/api/admin/data?file=home.json")
      .then((r) => r.json())
      .then((data) => {
        setFormData({ ...defaultData, ...data });
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const handleChange = (field: keyof HomeData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = async () => {
    setMessage(null);
    try {
      const res = await fetch("/api/admin/data", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ file: "home.json", data: formData }),
      });
      if (res.ok) {
        setMessage({ type: "success", text: "Sauvegardé avec succès." });
      } else {
        setMessage({ type: "error", text: "Erreur lors de la sauvegarde." });
      }
    } catch {
      setMessage({ type: "error", text: "Erreur réseau." });
    }
  };

  if (loading) return <div style={{ color: "#fff", padding: 40 }}>Chargement...</div>;

  return (
    <div style={{ padding: 40, maxWidth: 640 }}>
      <h1 style={titleStyle}>Accueil</h1>
      <p style={subStyle}>Éditer le contenu de la page d&apos;accueil</p>

      <div style={{ marginBottom: 20 }}>
        <label style={labelStyle}>Eyebrow</label>
        <input style={inputStyle} value={formData.eyebrow} onChange={(e) => handleChange("eyebrow", e.target.value)} />
      </div>

      <div style={{ marginBottom: 20 }}>
        <label style={labelStyle}>Tagline</label>
        <input style={inputStyle} value={formData.tagline} onChange={(e) => handleChange("tagline", e.target.value)} />
      </div>

      <div style={{ marginBottom: 20 }}>
        <label style={labelStyle}>CTA Headline</label>
        <input style={inputStyle} value={formData.ctaHeadline} onChange={(e) => handleChange("ctaHeadline", e.target.value)} />
      </div>

      <div style={{ marginBottom: 20 }}>
        <label style={labelStyle}>CTA Pitch</label>
        <input style={inputStyle} value={formData.ctaPitch} onChange={(e) => handleChange("ctaPitch", e.target.value)} />
      </div>

      <div style={{ marginBottom: 20 }}>
        <label style={labelStyle}>Statut</label>
        <select
          style={{ ...inputStyle, cursor: "pointer" }}
          value={formData.status}
          onChange={(e) => handleChange("status", e.target.value)}
        >
          <option value="available">Disponible</option>
          <option value="unavailable">Indisponible</option>
        </select>
      </div>

      <div style={{ marginBottom: 32 }}>
        <label style={labelStyle}>Status Text</label>
        <input style={inputStyle} value={formData.statusText} onChange={(e) => handleChange("statusText", e.target.value)} />
      </div>

      <button style={btnStyle} onClick={handleSave}>
        Sauvegarder
      </button>

      {message && (
        <p style={{ marginTop: 16, fontFamily: "'Poppins', sans-serif", fontSize: 12, color: message.type === "success" ? "#7ecb8f" : "#e07070" }}>
          {message.text}
        </p>
      )}
    </div>
  );
}
