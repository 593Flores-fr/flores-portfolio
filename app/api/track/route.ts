import { NextRequest, NextResponse } from "next/server";
import { readJSON, writeJSON } from "@/lib/store";
import type { PageView } from "@/lib/store";

export async function POST(req: NextRequest) {
  try {
    const { path, referrer } = await req.json();
    const views = readJSON<PageView[]>("pageviews.json");

    // Limite à 10 000 entrées pour ne pas exploser le fichier
    if (views.length < 10000) {
      views.push({
        path: path ?? "/",
        timestamp: new Date().toISOString(),
        referrer: referrer ?? "",
        ua: req.headers.get("user-agent") ?? "",
      });
      writeJSON("pageviews.json", views);
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false });
  }
}
