import type { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import DiscordProvider from "next-auth/providers/discord";
import { readJSON } from "./store";
import type { Client } from "./store";
import { verifyPassword } from "./password";

export const authOptions: AuthOptions = {
  providers: [
    /* ── Discord OAuth ── */
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID ?? "",
      clientSecret: process.env.DISCORD_CLIENT_SECRET ?? "",
    }),

    /* ── Email + mot de passe (clients) ── */
    CredentialsProvider({
      id: "email-password",
      name: "Email",
      credentials: {
        email:    { label: "Email",        type: "email"    },
        password: { label: "Mot de passe", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;
        const clients = readJSON<Client[]>("clients.json");
        const client = clients.find(
          (c) => c.email.toLowerCase() === credentials.email.toLowerCase()
        );
        if (!client) return null;
        if (!verifyPassword(credentials.password, client.passwordHash)) return null;
        return { id: client.id, name: client.name, email: client.email };
      },
    }),

    /* ── Admin ── */
    CredentialsProvider({
      id: "admin",
      name: "Admin",
      credentials: {
        username: { label: "Identifiant",  type: "text"     },
        password: { label: "Mot de passe", type: "password" },
      },
      async authorize(credentials) {
        const ok =
          credentials?.username === process.env.ADMIN_USERNAME &&
          credentials?.password === process.env.ADMIN_PASSWORD;
        if (!ok) return null;
        return { id: "admin", name: "Admin", email: null };
      },
    }),
  ],

  pages: {
    signIn: "/login",
    error:  "/login",
  },

  session: { strategy: "jwt", maxAge: 60 * 60 * 8 },

  callbacks: {
    async jwt({ token, user, account }) {
      if (user) {
        token.id = user.id;
        if (account?.provider === "admin") token.role = "admin";
        else if (account?.provider === "discord") token.role = "user";
        else token.role = "client";
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        (session.user as Record<string, unknown>).id   = token.id;
        (session.user as Record<string, unknown>).role = token.role;
      }
      return session;
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
};
