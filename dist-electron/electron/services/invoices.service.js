import { db } from "../db/client";
import { invoices } from "../db/schema";
import { eq } from "drizzle-orm";
export async function getInvoices() {
    return db.select().from(invoices);
}
export async function addInvoice(clientId, total) {
    return db.insert(invoices).values({ clientId, total });
}
export async function deleteInvoice(id) {
    return db.delete(invoices).where(eq(invoices.id, id));
}
