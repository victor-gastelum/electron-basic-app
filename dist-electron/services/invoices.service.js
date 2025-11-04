"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getInvoices = getInvoices;
exports.addInvoice = addInvoice;
exports.deleteInvoice = deleteInvoice;
const client_1 = require("../db/client");
const schema_1 = require("../db/schema");
const drizzle_orm_1 = require("drizzle-orm");
async function getInvoices() {
    return client_1.db.select().from(schema_1.invoices);
}
async function addInvoice(clientId, total) {
    return client_1.db.insert(schema_1.invoices).values({ clientId, total });
}
async function deleteInvoice(id) {
    return client_1.db.delete(schema_1.invoices).where((0, drizzle_orm_1.eq)(schema_1.invoices.id, id));
}
