import { test, expect } from "vitest";
import {
  createUser,
  deleteUser,
  getAllUsers,
  updateUser,
} from "src/user.service";

test("create user", async () => {
  const user = await createUser("John Doe");

  expect(user.id).toEqual(1);
});

test("list users - empty", async () => {
  const users = await getAllUsers();

  expect(users.length).toEqual(0);
});

test("list users - one user", async () => {
  await createUser("John Doe");
  const users = await getAllUsers();

  expect(users.length).toEqual(1);
});

test("update user", async () => {
  const user = await createUser("John Doe");
  const updatedUser = await updateUser(user.id, "John Doe Jr.");

  expect(updatedUser.name).toEqual("John Doe Jr.");
});

test("delete user", async () => {
  const user = await createUser("John Doe");
  await deleteUser(user.id);
  const users = await getAllUsers();

  expect(users.length).toEqual(0);
});
