import type { Config } from "drizzle-kit";

export default {
  dialect: "postgresql",
  schema: "src/database/schema.ts",
  out: "drizzle/migrations",
  verbose: true,
  dbCredentials: {
    url: "data.db",
  },
} satisfies Config;
