"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

type Mode   = "login" | "register";
type Status = "idle" | "loading" | "error" | "success";

export default function LoginPage() {
  const router = useRouter();
  const [mode,     setMode]     = useState<Mode>("login");
  const [name,     setName]     = useState("");
  const [email,    setEmail]    = useState("");
  const [password, setPassword] = useState("");
  const [confirm,  setConfirm]  = useState("");
  const [status,   setStatus]   = useState<Status>("idle");
  const [errMsg,   setErrMsg]   = useState("");

  function switchMode(m: Mode) {
    setMode(m); setStatus("idle"); setErrMsg("");
  }

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault(); setStatus("loading"); setErrMsg("");
    const res = await signIn("email-password", { email, password, redirect: false });
    if (res?.error) { setStatus("error"); setErrMsg("Email ou mot de passe incorrect."); }
    else { router.push("/"); router.refresh(); }
  }

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault(); setStatus("loading"); setErrMsg("");
    if (password !== confirm) { setStatus("error"); setErrMsg("Les mots de passe ne correspondent pas."); return; }
    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, name }),
    });
    const data = await res.json();
    if (!res.ok) { setStatus("error"); setErrMsg(data.error ?? "Erreur."); return; }
    const sr = await signIn("email-password", { email, password, redirect: false });
    if (sr?.error) { setStatus("error"); setErrMsg("Compte créé — connectez-vous."); }
    else { router.push("/"); router.refresh(); }
  }

  return (
    <div className="hidden hidden-ball smooth-scroll1 rounded-borders" data-primary-color="#8c6144"
      style={{ minHeight: "100dvh", background: "#0c0c0c", display: "flex", alignItems: "center", justifyContent: "center", padding: "80px 24px" }}>

      <div style={{ width: "100%", maxWidth: 460, position: "relative" }}>

        {/* Logo */}
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <Link href="/">
            <Image src="/images/logo-white.png" alt="Flores" width={110} height={44} style={{ height: 40, width: "auto" }} />
          </Link>
        </div>

        {/* Watermark */}
        <span style={{
          position: "absolute", top: "-.1em", right: "-.05em",
          fontFamily: "'Six Caps', sans-serif", fontSize: "clamp(120px, 20vw, 200px)",
          lineHeight: 1, color: "rgba(255,255,255,0.02)", pointerEvents: "none",
          userSelect: "none", zIndex: 0, letterSpacing: "-0.02em",
        }} aria-hidden="true">{mode === "login" ? "Login" : "Sign"}</span>

        <div style={{ position: "relative", zIndex: 1 }}>

          {/* Header */}
          <div style={{ marginBottom: 32 }}>
            <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 9, fontWeight: 700, letterSpacing: "0.32em", textTransform: "uppercase", color: "rgba(255,255,255,0.2)" }}>Espace client</span>
            <h1 style={{ fontFamily: "'Six Caps', sans-serif", fontSize: "clamp(52px, 8vw, 80px)", lineHeight: 0.9, color: "#fff", margin: "12px 0 14px", letterSpacing: "-0.01em" }}>
              {mode === "login" ? "Connexion." : "Créer un compte."}
            </h1>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.35)", fontWeight: 300, lineHeight: 1.6 }}>
              {mode === "login" ? "Accédez à votre espace projet personnel." : "Créez votre compte pour suivre vos projets."}
            </p>
          </div>

          {/* Toggle */}
          <div style={{ display: "flex", border: "1px solid rgba(255,255,255,0.09)", borderRadius: 4, overflow: "hidden", marginBottom: 28 }}>
            {(["login","register"] as Mode[]).map((m) => (
              <button key={m} type="button" onClick={() => switchMode(m)} style={{
                flex: 1, padding: "10px 0", background: mode === m ? "rgba(255,255,255,0.07)" : "transparent",
                border: "none", cursor: "pointer", fontFamily: "'Poppins', sans-serif",
                fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase",
                color: mode === m ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.28)",
                transition: "all 0.2s ease",
              }}>
                {m === "login" ? "Se connecter" : "Créer un compte"}
              </button>
            ))}
          </div>

          {/* Formulaire */}
          <form onSubmit={mode === "login" ? handleLogin : handleRegister} style={{ display: "flex", flexDirection: "column", gap: 0 }}>

            {mode === "register" && (
              <div style={{ marginBottom: 20 }}>
                <label style={labelStyle}><em style={emStyle}>01</em> Prénom ou nom</label>
                <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Comment vous appelez-vous ?" required style={inputStyle} />
              </div>
            )}

            <div style={{ marginBottom: 20 }}>
              <label style={labelStyle}><em style={emStyle}>{mode === "register" ? "02" : "01"}</em> Adresse email</label>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="votre@email.com" required style={inputStyle} autoComplete="email" />
            </div>

            <div style={{ marginBottom: 20 }}>
              <label style={labelStyle}><em style={emStyle}>{mode === "register" ? "03" : "02"}</em> Mot de passe</label>
              <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder={mode === "register" ? "8 caractères minimum" : "••••••••"} required style={inputStyle} />
            </div>

            {mode === "register" && (
              <div style={{ marginBottom: 20 }}>
                <label style={labelStyle}><em style={emStyle}>04</em> Confirmer le mot de passe</label>
                <input type="password" value={confirm} onChange={e => setConfirm(e.target.value)} placeholder="Répétez votre mot de passe" required style={inputStyle} />
              </div>
            )}

            {status === "error" && (
              <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 12, color: "#f87171", marginBottom: 16, display: "flex", alignItems: "center", gap: 8 }}>
                <i className="fa-solid fa-circle-exclamation" /> {errMsg}
              </p>
            )}

            <button type="submit" disabled={status === "loading"} style={{
              width: "100%", padding: "14px 24px", background: "#fff", color: "#0c0c0c",
              border: "none", borderRadius: 3, fontFamily: "'Poppins', sans-serif",
              fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase",
              cursor: status === "loading" ? "not-allowed" : "pointer",
              opacity: status === "loading" ? 0.4 : 1, transition: "opacity 0.2s ease",
            }}>
              {status === "loading" ? "Chargement…" : mode === "login" ? "Se connecter" : "Créer mon compte"}
            </button>
          </form>

          {/* Séparateur */}
          <div style={{ display: "flex", alignItems: "center", gap: 16, margin: "28px 0" }}>
            <span style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.07)" }} />
            <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.2)" }}>ou</span>
            <span style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.07)" }} />
          </div>

          {/* Discord */}
          <button type="button" onClick={() => signIn("discord", { callbackUrl: "/" })} style={{
            width: "100%", padding: "14px 24px", background: "#5865F2", color: "#fff",
            border: "none", borderRadius: 4, fontFamily: "'Poppins', sans-serif",
            fontSize: 13, fontWeight: 600, letterSpacing: "0.04em", cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center", gap: 12,
            transition: "opacity 0.2s ease",
          }}>
            <i className="fa-brands fa-discord" style={{ fontSize: 18 }} />
            Continuer avec Discord
          </button>

          {/* Footer */}
          <div style={{ marginTop: 32, display: "flex", flexDirection: "column", gap: 14 }}>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.25)", textAlign: "center" }}>
              Un projet en tête ?{" "}
              <Link href="/contact" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "underline" }}>Contactez-moi</Link> pour démarrer.
            </p>
            <Link href="/" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, fontFamily: "'Poppins', sans-serif", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.2)", textDecoration: "none" }}>
              <i className="fa-solid fa-arrow-left" /> Retour au site
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}

const labelStyle: React.CSSProperties = {
  fontFamily: "'Poppins', sans-serif", fontSize: 9, fontWeight: 700,
  letterSpacing: "0.2em", textTransform: "uppercase",
  color: "rgba(255,255,255,0.25)", marginBottom: 8, display: "block",
};
const emStyle: React.CSSProperties = {
  color: "#3ddc84", fontStyle: "normal", fontSize: 9, fontWeight: 700, marginRight: 6,
};
const inputStyle: React.CSSProperties = {
  width: "100%", background: "transparent", border: "none",
  borderBottom: "1px solid rgba(255,255,255,0.1)", borderRadius: 0,
  padding: "12px 0", fontSize: 13, color: "rgba(255,255,255,0.75)",
  fontFamily: "'Poppins', sans-serif", fontWeight: 300, outline: "none",
  boxSizing: "border-box",
};
