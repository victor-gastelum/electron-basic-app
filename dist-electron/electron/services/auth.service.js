import { db } from "../db/client";
import { users } from "../db/schema";
import bcrypt from "bcryptjs";
import { eq } from "drizzle-orm";
export async function register(username, password) {
    const hashed = await bcrypt.hash(password, 10);
    await db.insert(users).values({ username, password: hashed });
}
export async function login(username, password) {
    const result = await db.select().from(users).where(eq(users.username, username));
    const user = result[0];
    if (!user)
        return null;
    const valid = await bcrypt.compare(password, user.password);
    return valid ? user : null;
}
