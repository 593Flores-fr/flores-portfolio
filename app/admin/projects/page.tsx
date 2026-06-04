"use client";

import { useState, useEffect } from "react";
import type { Project } from "@/lib/store";
import Image from "next/image";

const emptyProject: Omit<Project, "order"> = {
  slug: "", title: "", category: "", year: "", image: "", description: "", visible: true,
};

export default function AdminProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [editing,  setEditing]  = useState<Project | null>(null);
  const [isNew,    setIsNew]    = useState(false);
  const [saving,   setSaving]   = useState(false);
  const [msg,      setMsg]      = useState("");

  useEffect(() => { fetchProjects(); }, []);

  async function fetchProjects() {
    const res = await fetch("/api/admin/data?file=projects.json");
    if (res.ok) setProjects(await res.json());
  }

  async function save() {
    setSaving(true); setMsg("");
    let updated: Project[];
    if (isNew) {
      updated = [...projects, { ...editing!, order: projects.length + 1 }];
    } else {
      updated = projects.map((p) => p.slug === editing!.slug ? editing! : p);
    }
    const res = await fetch("/api/admin/data", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ file: "projects.json", data: updated }),
    });
    if (res.ok) { setProjects(updated); setEditing(null); setMsg("Sauvegardé !"); }
    else setMsg("Erreur lors de la sauvegarde.");
    setSaving(false);
  }

  async function deleteProject(slug: string) {
    if (!confirm(`Supprimer le projet "${slug}" ?`)) return;
    const updated = projects.filter((p) => p.slug !== slug);
    await fetch("/api/admin/data", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ file: "projects.json", data: updated }),
    });
    setProjects(updated);
  }

  const field = (key: keyof Project, label: string, type = "text") => (
    <div key={key} style={{ marginBottom: 16 }}>
      <label style={labelStyle}>{label}</label>
      {key === "description" ? (
        <textarea
          value={String(editing?.[key] ?? "")}
          onChange={(e) => setEditing({ ...editing!, [key]: e.target.value })}
          rows={3}
          style={{ ...inputStyle, resize: "vertical" }}
        />
      ) : type === "checkbox" ? (
        <label style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }}>
          <input type="checkbox" checked={!!editing?.[key]} onChange={(e) => setEditing({ ...editing!, [key]: e.target.checked })} />
          <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.5)" }}>Visible sur le site</span>
        </label>
      ) : (
        <input
          type={type}
          value={String(editing?.[key] ?? "")}
          onChange={(e) => setEditing({ ...editing!, [key]: e.target.value })}
          style={inputStyle}
        />
      )}
    </div>
  );

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 40 }}>
        <div>
          <h1 style={titleStyle}>Projets.</h1>
          <p style={subStyle}>{projects.length} projet{projects.length > 1 ? "s" : ""} au total</p>
        </div>
        <button onClick={() => { setEditing({ ...emptyProject, order: projects.length + 1 }); setIsNew(true); }} style={btnPrimaryStyle}>
          <i className="fa-solid fa-plus" /> Nouveau projet
        </button>
      </div>

      {msg && <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 12, color: "#3ddc84", marginBottom: 20 }}>{msg}</p>}

      {/* Liste */}
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {projects.map((p) => (
          <div key={p.slug} style={{ display: "flex", alignItems: "center", gap: 16, background: "#111", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 8, padding: "16px 20px" }}>
            {p.image && (
              <div style={{ width: 60, height: 60, borderRadius: 4, overflow: "hidden", flexShrink: 0 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.image} alt={p.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
            )}
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: "'Six Caps', sans-serif", fontSize: 22, letterSpacing: "0.04em", color: "#fff" }}>{p.title}</div>
              <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: 11, color: "rgba(255,255,255,0.3)" }}>{p.category} · {p.year}</div>
            </div>
            <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: p.visible ? "#3ddc84" : "rgba(255,255,255,0.2)", border: `1px solid ${p.visible ? "rgba(61,220,132,0.3)" : "rgba(255,255,255,0.1)"}`, borderRadius: 100, padding: "3px 10px" }}>
              {p.visible ? "Visible" : "Masqué"}
            </span>
            <div style={{ display: "flex", gap: 8 }}>
              <button onClick={() => { setEditing(p); setIsNew(false); }} style={btnGhostStyle}><i className="fa-solid fa-pen" /></button>
              <button onClick={() => deleteProject(p.slug)} style={{ ...btnGhostStyle, color: "#f87171" }}><i className="fa-solid fa-trash" /></button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal édition */}
      {editing && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.7)", zIndex: 9999, display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
          <div style={{ background: "#111", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 12, padding: 32, width: "100%", maxWidth: 520, maxHeight: "90dvh", overflowY: "auto" }}>
            <h2 style={{ ...titleStyle, fontSize: 36, marginBottom: 24 }}>{isNew ? "Nouveau projet" : "Modifier le projet"}</h2>
            {field("slug",        "Slug (URL)",     "text")}
            {field("title",       "Titre"               )}
            {field("category",    "Catégorie"           )}
            {field("year",        "Année"               )}
            {field("image",       "Image (chemin)"      )}
            {field("description", "Description"         )}
            {field("order",       "Ordre d'affichage", "number")}
            {field("visible",     "Visibilité",       "checkbox")}
            <div style={{ display: "flex", gap: 12, marginTop: 24 }}>
              <button onClick={save} disabled={saving} style={btnPrimaryStyle}>{saving ? "Sauvegarde…" : "Sauvegarder"}</button>
              <button onClick={() => setEditing(null)} style={btnGhostStyle}>Annuler</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const titleStyle: React.CSSProperties = { fontFamily: "'Six Caps', sans-serif", fontSize: 52, letterSpacing: "0.04em", color: "#fff", lineHeight: 1, marginBottom: 8 };
const subStyle:   React.CSSProperties = { fontFamily: "'Poppins', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.35)" };
const labelStyle: React.CSSProperties = { fontFamily: "'Poppins', sans-serif", fontSize: 9, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", display: "block", marginBottom: 8 };
const inputStyle: React.CSSProperties = { width: "100%", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 4, padding: "10px 14px", fontSize: 13, color: "rgba(255,255,255,0.8)", fontFamily: "'Poppins', sans-serif", outline: "none", boxSizing: "border-box" };
const btnPrimaryStyle: React.CSSProperties = { display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 20px", background: "#8c6144", color: "#fff", border: "none", borderRadius: 4, fontFamily: "'Poppins', sans-serif", fontSize: 12, fontWeight: 600, cursor: "pointer" };
const btnGhostStyle:   React.CSSProperties = { display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 16px", background: "transparent", color: "rgba(255,255,255,0.4)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 4, fontFamily: "'Poppins', sans-serif", fontSize: 12, cursor: "pointer" };
