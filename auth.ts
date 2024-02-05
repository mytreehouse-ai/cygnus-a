import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";

import { login, me } from "@/lib/api-endpoints";
import { authConfig } from "@/auth.config";
import { AuthToken } from "@/types";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ username: z.string().min(4), password: z.string().min(6) })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { username, password } = parsedCredentials.data;

          const authenticate = await login(username, password);

          if (authenticate.status !== 200) {
            return null;
          }

          const authTokens = authenticate.data as AuthToken;

          const user = await me(authTokens.access);

          if (user.status !== 200) {
            return null;
          }

          return user.data;
        }

        return null;
      },
    }),
  ],
});
