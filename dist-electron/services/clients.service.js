"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getClients = getClients;
exports.addClient = addClient;
exports.deleteClient = deleteClient;
const client_1 = require("../db/client");
const schema_1 = require("../db/schema");
const drizzle_orm_1 = require("drizzle-orm");
async function getClients() {
    return client_1.db.select().from(schema_1.clients);
}
async function addClient(name, email) {
    return client_1.db.insert(schema_1.clients).values({ name, email });
}
async function deleteClient(id) {
    return client_1.db.delete(schema_1.clients).where((0, drizzle_orm_1.eq)(schema_1.clients.id, id));
}
