import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware() { return NextResponse.next(); },
  {
    pages: { signIn: "/login" },
    callbacks: {
      authorized: ({ token }) => {
        const role = (token as { role?: string } | null)?.role;
        return role === "admin";
      },
    },
  }
);

export const config = {
  matcher: ["/admin", "/admin/((?!login).+)"],
};
