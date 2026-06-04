import { readJSON } from "@/lib/store";
import type { PageView } from "@/lib/store";

function groupBy<T>(arr: T[], key: (item: T) => string): Record<string, T[]> {
  return arr.reduce<Record<string, T[]>>((acc, item) => {
    const k = key(item);
    (acc[k] ??= []).push(item);
    return acc;
  }, {});
}

export default function AdminAnalytics() {
  const views = readJSON<PageView[]>("pageviews.json");

  const byPage = Object.entries(
    views.reduce<Record<string, number>>((acc, v) => { acc[v.path] = (acc[v.path] ?? 0) + 1; return acc; }, {})
  ).sort((a, b) => b[1] - a[1]);

  const byDay = Object.entries(
    views.reduce<Record<string, number>>((acc, v) => {
      const day = v.timestamp.split("T")[0];
      acc[day] = (acc[day] ?? 0) + 1;
      return acc;
    }, {})
  ).sort().slice(-14);

  const max = Math.max(...byDay.map((d) => d[1]), 1);

  const totalUnique = new Set(views.map((v) => v.path)).size;
  const today = new Date().toISOString().split("T")[0];
  const todayCount = views.filter((v) => v.timestamp.startsWith(today)).length;

  return (
    <div>
      <div style={{ marginBottom: 40 }}>
        <h1 style={titleStyle}>Analytics.</h1>
        <p style={subStyle}>{views.length} vues au total · {totalUnique} pages distinctes</p>
      </div>

      {/* Stats résumé */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginBottom: 40 }}>
        {[
          { label: "Vues totales",         value: views.length,    color: "#8c6144" },
          { label: "Vues aujourd'hui",      value: todayCount,      color: "#3ddc84" },
          { label: "Pages uniques visitées",value: totalUnique,     color: "#60a5fa" },
        ].map((s) => (
          <div key={s.label} style={{ background: "#111", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 8, padding: 24 }}>
            <div style={{ fontFamily: "'Six Caps', sans-serif", fontSize: 48, color: s.color, lineHeight: 1, letterSpacing: "0.02em" }}>{s.value}</div>
            <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: 11, color: "rgba(255,255,255,0.3)", marginTop: 8, letterSpacing: "0.06em", textTransform: "uppercase" }}>{s.label}</div>
          </div>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
        {/* Graphique 14 jours */}
        <div style={{ background: "#111", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 8, padding: 28 }}>
          <h2 style={{ fontFamily: "'Six Caps', sans-serif", fontSize: 28, letterSpacing: "0.04em", color: "#fff", marginBottom: 24 }}>14 derniers jours</h2>
          {byDay.length === 0
            ? <p style={noDataStyle}>Pas encore de données.</p>
            : (
              <div style={{ display: "flex", alignItems: "flex-end", gap: 6, height: 120 }}>
                {byDay.map(([day, count]) => (
                  <div key={day} title={`${day}: ${count} vues`} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                    <div style={{ width: "100%", background: "#8c6144", borderRadius: 2, height: `${Math.round((count / max) * 100)}%`, minHeight: 2, transition: "height 0.3s ease" }} />
                    <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 8, color: "rgba(255,255,255,0.2)", transform: "rotate(-45deg)", transformOrigin: "center", whiteSpace: "nowrap" }}>
                      {day.slice(5)}
                    </span>
                  </div>
                ))}
              </div>
            )
          }
        </div>

        {/* Top pages */}
        <div style={{ background: "#111", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 8, padding: 28 }}>
          <h2 style={{ fontFamily: "'Six Caps', sans-serif", fontSize: 28, letterSpacing: "0.04em", color: "#fff", marginBottom: 24 }}>Top pages</h2>
          {byPage.length === 0
            ? <p style={noDataStyle}>Pas encore de données.</p>
            : byPage.slice(0, 8).map(([page, count]) => (
              <div key={page} style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.5)" }}>{page || "/"}</span>
                <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 12, color: "#8c6144", fontWeight: 600 }}>{count}</span>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

const titleStyle: React.CSSProperties = { fontFamily: "'Six Caps', sans-serif", fontSize: 52, letterSpacing: "0.04em", color: "#fff", lineHeight: 1, marginBottom: 8 };
const subStyle: React.CSSProperties = { fontFamily: "'Poppins', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.35)" };
const noDataStyle: React.CSSProperties = { fontFamily: "'Poppins', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.25)" };
