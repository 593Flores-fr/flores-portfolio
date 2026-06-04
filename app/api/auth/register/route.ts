import { NextRequest, NextResponse } from "next/server";
import { randomUUID } from "crypto";
import { readJSON, writeJSON } from "@/lib/store";
import type { Client } from "@/lib/store";
import { hashPassword } from "@/lib/password";

export async function POST(req: NextRequest) {
  try {
    const { email, password, name } = await req.json();

    if (!email || !password || !name)
      return NextResponse.json({ error: "Tous les champs sont requis." }, { status: 400 });

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      return NextResponse.json({ error: "Email invalide." }, { status: 400 });

    if (password.length < 8)
      return NextResponse.json({ error: "8 caractères minimum." }, { status: 400 });

    const clients = readJSON<Client[]>("clients.json");

    if (clients.find((c) => c.email.toLowerCase() === email.toLowerCase()))
      return NextResponse.json({ error: "Email déjà utilisé." }, { status: 409 });

    const newClient: Client = {
      id: randomUUID(),
      email: email.toLowerCase().trim(),
      name: name.trim(),
      passwordHash: hashPassword(password),
      role: "client",
      createdAt: new Date().toISOString(),
    };
    clients.push(newClient);
    writeJSON("clients.json", clients);

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (err) {
    console.error("[register]", err);
    return NextResponse.json({ error: "Erreur serveur." }, { status: 500 });
  }
}
