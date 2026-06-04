"use client";
import { useEffect, useState } from "react";

type Tarif = {
  id: string;
  num: string;
  title: string;
  price: string;
  description: string;
  specs: string[];
};

const titleStyle: React.CSSProperties = { fontFamily: "'Six Caps', sans-serif", fontSize: 52, letterSpacing: "0.04em", color: "#fff", lineHeight: 1, marginBottom: 8 };
const subStyle: React.CSSProperties = { fontFamily: "'Poppins', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.35)", marginBottom: 32 };
const labelStyle: React.CSSProperties = { fontFamily: "'Poppins', sans-serif", fontSize: 9, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "rgba(255,255,255,0.3)", display: "block", marginBottom: 8 };
const inputStyle: React.CSSProperties = { width: "100%", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 4, padding: "10px 14px", fontSize: 13, color: "rgba(255,255,255,0.8)", fontFamily: "'Poppins', sans-serif", outline: "none", boxSizing: "border-box" as const };
const btnStyle: React.CSSProperties = { display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 20px", background: "#8c6144", color: "#fff", border: "none", borderRadius: 4, fontFamily: "'Poppins', sans-serif", fontSize: 12, fontWeight: 600, cursor: "pointer" };

export default function AdminTarifsPage() {
  const [tarifs, setTarifs] = useState<Tarif[]>([]);
  const [specsText, setSpecsText] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  useEffect(() => {
    fetch("/api/admin/data?file=tarifs.json")
      .then((r) => r.json())
      .then((data: Tarif[]) => {
        setTarifs(data);
        setSpecsText(data.map((t) => (t.specs ?? []).join("\n")));
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const handleTarifChange = (index: number, field: keyof Tarif, value: string) => {
    setTarifs((prev) => {
      const updated = [...prev];
      updated[index] = { ...updated[index], [field]: value };
      return updated;
    });
  };

  const handleSpecsChange = (index: number, value: string) => {
    setSpecsText((prev) => {
      const updated = [...prev];
      updated[index] = value;
      return updated;
    });
  };

  const handleSave = async () => {
    setMessage(null);
    const data = tarifs.map((tarif, i) => ({
      ...tarif,
      specs: specsText[i]
        .split("\n")
        .map((s) => s.trim())
        .filter((s) => s.length > 0),
    }));
    try {
      const res = await fetch("/api/admin/data", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ file: "tarifs.json", data }),
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
    <div style={{ padding: 40, maxWidth: 720 }}>
      <h1 style={titleStyle}>Tarifs</h1>
      <p style={subStyle}>Éditer les 7 offres tarifaires</p>

      {tarifs.map((tarif, i) => (
        <div
          key={tarif.id ?? i}
          style={{ marginBottom: 40, paddingBottom: 40, borderBottom: "1px solid rgba(255,255,255,0.06)" }}
        >
          <p style={{ ...labelStyle, fontSize: 11, marginBottom: 16, color: "rgba(255,255,255,0.5)" }}>
            {tarif.num} — {tarif.title || "Sans titre"}
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 16 }}>
            <div>
              <label style={labelStyle}>Titre</label>
              <input
                style={inputStyle}
                value={tarif.title}
                onChange={(e) => handleTarifChange(i, "title", e.target.value)}
              />
            </div>
            <div>
              <label style={labelStyle}>Prix</label>
              <input
                style={inputStyle}
                value={tarif.price}
                onChange={(e) => handleTarifChange(i, "price", e.target.value)}
              />
            </div>
          </div>

          <div style={{ marginBottom: 16 }}>
            <label style={labelStyle}>Description</label>
            <textarea
              style={{ ...inputStyle, minHeight: 80, resize: "vertical" }}
              value={tarif.description}
              onChange={(e) => handleTarifChange(i, "description", e.target.value)}
            />
          </div>

          <div>
            <label style={labelStyle}>Specs (une par ligne)</label>
            <textarea
              style={{ ...inputStyle, minHeight: 100, resize: "vertical" }}
              value={specsText[i] ?? ""}
              onChange={(e) => handleSpecsChange(i, e.target.value)}
            />
          </div>
        </div>
      ))}

      <button style={btnStyle} onClick={handleSave}>
        Sauvegarder tout
      </button>

      {message && (
        <p style={{ marginTop: 16, fontFamily: "'Poppins', sans-serif", fontSize: 12, color: message.type === "success" ? "#7ecb8f" : "#e07070" }}>
          {message.text}
        </p>
      )}
    </div>
  );
}
