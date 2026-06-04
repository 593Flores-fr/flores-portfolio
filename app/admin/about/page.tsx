"use client";
import { useEffect, useState } from "react";

type Stat = { value: string; label: string };
type AboutData = {
  bio: string[];
  stats: Stat[];
};

const titleStyle: React.CSSProperties = { fontFamily: "'Six Caps', sans-serif", fontSize: 52, letterSpacing: "0.04em", color: "#fff", lineHeight: 1, marginBottom: 8 };
const subStyle: React.CSSProperties = { fontFamily: "'Poppins', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.35)", marginBottom: 32 };
const labelStyle: React.CSSProperties = { fontFamily: "'Poppins', sans-serif", fontSize: 9, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "rgba(255,255,255,0.3)", display: "block", marginBottom: 8 };
const inputStyle: React.CSSProperties = { width: "100%", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 4, padding: "10px 14px", fontSize: 13, color: "rgba(255,255,255,0.8)", fontFamily: "'Poppins', sans-serif", outline: "none", boxSizing: "border-box" as const };
const btnStyle: React.CSSProperties = { display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 20px", background: "#8c6144", color: "#fff", border: "none", borderRadius: 4, fontFamily: "'Poppins', sans-serif", fontSize: 12, fontWeight: 600, cursor: "pointer" };

const defaultData: AboutData = {
  bio: ["", "", ""],
  stats: [
    { value: "", label: "" },
    { value: "", label: "" },
    { value: "", label: "" },
  ],
};

export default function AdminAboutPage() {
  const [formData, setFormData] = useState<AboutData>(defaultData);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  useEffect(() => {
    fetch("/api/admin/data?file=about.json")
      .then((r) => r.json())
      .then((data: AboutData) => {
        const bio = data.bio?.length >= 3 ? data.bio : [...(data.bio ?? []), "", "", ""].slice(0, 3);
        const stats =
          data.stats?.length >= 3
            ? data.stats
            : [...(data.stats ?? []), { value: "", label: "" }, { value: "", label: "" }, { value: "", label: "" }].slice(0, 3);
        setFormData({ bio, stats });
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const handleBioChange = (index: number, value: string) => {
    setFormData((prev) => {
      const bio = [...prev.bio];
      bio[index] = value;
      return { ...prev, bio };
    });
  };

  const handleStatChange = (index: number, field: keyof Stat, value: string) => {
    setFormData((prev) => {
      const stats = [...prev.stats];
      stats[index] = { ...stats[index], [field]: value };
      return { ...prev, stats };
    });
  };

  const handleSave = async () => {
    setMessage(null);
    try {
      const res = await fetch("/api/admin/data", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ file: "about.json", data: formData }),
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
      <h1 style={titleStyle}>À propos</h1>
      <p style={subStyle}>Éditer le contenu de la page À propos</p>

      {[0, 1, 2].map((i) => (
        <div key={i} style={{ marginBottom: 20 }}>
          <label style={labelStyle}>Paragraphe bio {i + 1}</label>
          <textarea
            style={{ ...inputStyle, minHeight: 100, resize: "vertical" }}
            value={formData.bio[i]}
            onChange={(e) => handleBioChange(i, e.target.value)}
          />
        </div>
      ))}

      <div style={{ marginBottom: 8, marginTop: 16, ...labelStyle }}>Stats</div>

      {[0, 1, 2].map((i) => (
        <div key={i} style={{ marginBottom: 20, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          <div>
            <label style={labelStyle}>Stat {i + 1} — Valeur</label>
            <input
              style={inputStyle}
              value={formData.stats[i]?.value ?? ""}
              onChange={(e) => handleStatChange(i, "value", e.target.value)}
            />
          </div>
          <div>
            <label style={labelStyle}>Stat {i + 1} — Label</label>
            <input
              style={inputStyle}
              value={formData.stats[i]?.label ?? ""}
              onChange={(e) => handleStatChange(i, "label", e.target.value)}
            />
          </div>
        </div>
      ))}

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
