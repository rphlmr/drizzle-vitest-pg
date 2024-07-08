import { PGlite } from "@electric-sql/pglite";
import { drizzle } from "drizzle-orm/pglite";
import { sql } from "drizzle-orm";
import { afterAll, afterEach, beforeEach, vi } from "vitest";

import * as schema from "database/schema";
import { db, client } from "database/db";
import { applyMigrations } from "database/migrate";

// Replace the database with a new in-memory database
vi.mock("database/db", async (importOriginal) => {
  const client = new PGlite();
  const db = drizzle(client, { schema });
  return {
    ...(await importOriginal<typeof import("database/db")>()),
    db,
    client,
  };
});

// Apply migrations before each test
beforeEach(async () => {
  await applyMigrations();
});

// Clean up the database after each test
afterEach(async () => {
  await db.execute(sql`drop schema if exists public cascade`);
  await db.execute(sql`create schema public`);
  await db.execute(sql`drop schema if exists drizzle cascade`);
});

// Free up resources after all tests are done
afterAll(async () => {
  client.close();
});
