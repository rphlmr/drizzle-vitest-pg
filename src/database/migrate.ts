import { migrate } from "drizzle-orm/pglite/migrator";

import { db } from "database/db";

async function applyMigrations() {
  await migrate(db, { migrationsFolder: "drizzle/migrations" });
}

export { applyMigrations };
