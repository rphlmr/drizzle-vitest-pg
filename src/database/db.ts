import { PGlite } from "@electric-sql/pglite";
import { drizzle } from "drizzle-orm/pglite";
import * as schema from "database/schema";

const client = new PGlite("src/database/data.db");
const db = drizzle(client, { schema });
type DB = typeof db;

export { db, type DB, client };
