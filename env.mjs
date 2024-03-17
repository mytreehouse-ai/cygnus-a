import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  skipValidation:
    !!process.env.SKIP_ENV_VALIDATION &&
    process.env.SKIP_ENV_VALIDATION !== "false" &&
    process.env.SKIP_ENV_VALIDATION !== "0",
  isServer: typeof window === "undefined",
  server: {
    NODE_ENV: z.enum(["development", "production"]),
    DOCKER_BUILD: z.string().min(1).max(1),
    CLERK_SECRET_KEY: z.string().min(1),
    POSTGRES_DATABASE: z.string().min(1),
    POSTGRES_HOST: z.string().min(1),
    POSTGRES_PASSWORD: z.string().min(1),
    POSTGRES_USER: z.string().min(1),
    POSTGRES_PRISMA_URL: z.string().url(),
    POSTGRES_URL: z.string().url(),
    POSTGRES_URL_NON_POOLING: z.string().url(),
    POSTGRES_URL_NO_SSL: z.string().url(),
  },
  client: {
    NEXT_PUBLIC_NODE_ENV: z.enum(["development", "production"]),
    NEXT_PUBLIC_OPENRED_BASEAPI_URL: z.string().url(),
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: z.string().min(1),
  },
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY,
    POSTGRES_DATABASE: process.env.POSTGRES_DATABASE,
    POSTGRES_HOST: process.env.POSTGRES_HOST,
    POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD,
    POSTGRES_USER: process.env.POSTGRES_USER,
    POSTGRES_PRISMA_URL: process.env.POSTGRES_PRISMA_URL,
    POSTGRES_URL: process.env.POSTGRES_URL,
    POSTGRES_URL_NON_POOLING: process.env.POSTGRES_URL_NON_POOLING,
    POSTGRES_URL_NO_SSL: process.env.POSTGRES_URL_NO_SSL,
    DOCKER_BUILD: process.env.DOCKER_BUILD,
    NEXT_PUBLIC_NODE_ENV: process.env.NEXT_PUBLIC_NODE_ENV,
    NEXT_PUBLIC_OPENRED_BASEAPI_URL:
      process.env.NEXT_PUBLIC_OPENRED_BASEAPI_URL,
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY:
      process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
  },
});
