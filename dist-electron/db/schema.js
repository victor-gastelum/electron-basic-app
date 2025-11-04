"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.invoices = exports.clients = exports.users = void 0;
const sqlite_core_1 = require("drizzle-orm/sqlite-core");
// 🔹 Tabla de usuarios
exports.users = (0, sqlite_core_1.sqliteTable)("users", {
    id: (0, sqlite_core_1.integer)("id").primaryKey({ autoIncrement: true }),
    username: (0, sqlite_core_1.text)("username").notNull().unique(),
    password: (0, sqlite_core_1.text)("password").notNull(),
});
// 🔹 Clientes
exports.clients = (0, sqlite_core_1.sqliteTable)("clients", {
    id: (0, sqlite_core_1.integer)("id").primaryKey({ autoIncrement: true }),
    name: (0, sqlite_core_1.text)("name").notNull(),
    email: (0, sqlite_core_1.text)("email"),
});
// 🔹 Facturas
exports.invoices = (0, sqlite_core_1.sqliteTable)("invoices", {
    id: (0, sqlite_core_1.integer)("id").primaryKey({ autoIncrement: true }),
    clientId: (0, sqlite_core_1.integer)("client_id").references(() => exports.clients.id),
    total: (0, sqlite_core_1.real)("total").notNull(),
    date: (0, sqlite_core_1.text)("date").default("CURRENT_TIMESTAMP"),
});
