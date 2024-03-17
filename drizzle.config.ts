import { defineConfig } from "drizzle-kit";
import { env } from "./env.mjs";

export default defineConfig({
  schema: "./lib/schema.ts",
  out: "./drizzle",
  driver: "pg",
  dbCredentials: {
    connectionString: env.POSTGRES_URL,
  },
  verbose: env.NODE_ENV === "development",
  strict: true,
});
