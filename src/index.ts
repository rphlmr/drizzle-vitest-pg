import { faker } from "@faker-js/faker";
import { applyMigrations } from "database/migrate";

import {
  createUser,
  getAllUsers,
  getUser,
  updateUser,
  deleteUser,
} from "./user.service";

await applyMigrations();

await createUser(faker.person.fullName());

const newUser = await createUser(faker.person.fullName());
console.log("New user", newUser);

await updateUser(newUser.id, `${newUser.name} Jr.`);

console.log("All users", await getAllUsers());

console.log("User", await getUser(newUser.id));

await deleteUser(newUser.id);

console.log("All users", await getAllUsers());
