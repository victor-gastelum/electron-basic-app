import { db } from "../db/client";
import { clients } from "../db/schema";
import { eq } from "drizzle-orm";

export async function getClients() {
  return db.select().from(clients);
}

export async function addClient(name: string, email: string) {
  return db.insert(clients).values({ name, email });
}

export async function deleteClient(id: number) {
  return db.delete(clients).where(eq(clients.id, id));
}
