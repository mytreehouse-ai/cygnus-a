"use server";

import { signIn } from "@/auth";

export const handleCredentialsLogin = async (credentials: {
  username: string;
  password: string;
}) => {
  await signIn("credentials", {
    ...credentials,
    redirectTo: "/dashboard",
  });
};
