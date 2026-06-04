import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { readJSON, writeJSON } from "@/lib/store";

function isAdmin(role: unknown) { return role === "admin"; }

export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!isAdmin((session?.user as Record<string, unknown>)?.role))
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });

  const { searchParams } = new URL(req.url);
  const file = searchParams.get("file");
  if (!file) return NextResponse.json({ error: "Fichier manquant" }, { status: 400 });

  const data = readJSON(file);
  return NextResponse.json(data);
}

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!isAdmin((session?.user as Record<string, unknown>)?.role))
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });

  const { file, data } = await req.json();
  if (!file) return NextResponse.json({ error: "Fichier manquant" }, { status: 400 });

  writeJSON(file, data);
  return NextResponse.json({ success: true });
}
