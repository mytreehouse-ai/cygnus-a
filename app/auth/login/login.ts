"use server";

import { signIn } from "@/auth";
import { AuthError } from "next-auth";

export async function handleCredentialsLogin(credentials: {
  username: string;
  password: string;
}) {
  try {
    return await signIn("credentials", {
      ...credentials,
      redirectTo: "/dashboard",
    });
  } catch (error) {
    if (error instanceof AuthError) {
      if (error.cause?.err instanceof Error) {
        return error.cause.err.message;
      }
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials";
        case "CallbackRouteError":
          return "Callback route error";
        default:
          return "Something went wrong";
      }
    }
    throw error;
  }
}
