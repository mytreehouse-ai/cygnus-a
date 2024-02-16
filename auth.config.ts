import type { NextAuthConfig } from "next-auth";

import { IUser } from "@/types";

declare module "next-auth" {
  interface Session {
    user: IUser;
  }
}

export const authConfig = {
  pages: {
    signIn: "/auth/login",
  },
  session: { strategy: "jwt" },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;

      const isOnDashboard = nextUrl.pathname.startsWith("/dashboard");
      if (isOnDashboard) {
        if (isLoggedIn) {
          return true;
        }
        return false;
      } else if (isLoggedIn) {
        return Response.redirect(new URL("/dashboard", nextUrl));
      }
      return true;
    },
    session({ session }) {
      session.user.first_name = "test";
      session.user.last_name = "test";

      return session;
    },
  },
  providers: [],
} satisfies NextAuthConfig;
