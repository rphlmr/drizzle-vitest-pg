import { PGlite } from "@electric-sql/pglite";
import { drizzle } from "drizzle-orm/pglite";
import * as schema from "database/schema";

const client = new PGlite();
// Uncomment to use a local db on your machine. This does not work with StackBlitz.
// const client = new PGlite("src/database/data.db");
const db = drizzle(client, { schema });

export { db, client };
