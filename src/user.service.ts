import { db } from "database/db";
import { users } from "database/schema";
import { eq } from "drizzle-orm";

export async function createUser(name: string) {
  const [newUser] = await db.insert(users).values({ name }).returning();

  return newUser;
}

export async function getUser(id: number) {
  return db.query.users.findFirst({
    where: eq(users.id, id),
  });
}

export async function getAllUsers() {
  return db.query.users.findMany();
}

export async function updateUser(id: number, name: string) {
  const [updatedUser] = await db
    .update(users)
    .set({ name })
    .where(eq(users.id, id))
    .returning();

  return updatedUser;
}

export async function deleteUser(id: number) {
  return db.delete(users).where(eq(users.id, id));
}
