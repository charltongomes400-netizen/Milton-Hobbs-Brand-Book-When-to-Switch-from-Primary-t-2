import { storage } from "./storage";
import { hashPassword } from "./auth";

export async function seedAdmin(): Promise<void> {
  const username = process.env.ADMIN_USERNAME;
  const password = process.env.ADMIN_PASSWORD;

  if (!username || !password) return;

  const existing = await storage.getUserByUsername(username);
  if (existing) return;

  const hashed = await hashPassword(password);
  await storage.createUser({ username, password: hashed });
  console.log(`[auth] seeded admin user "${username}"`);
}

const isMain = process.argv[1] && import.meta.url === `file://${process.argv[1]}`;
if (isMain) {
  seedAdmin()
    .then(() => {
      process.exit(0);
    })
    .catch((err) => {
      console.error("seedAdmin failed:", err);
      process.exit(1);
    });
}
