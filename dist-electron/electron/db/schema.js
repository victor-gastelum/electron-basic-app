import { sqliteTable, integer, text, real } from "drizzle-orm/sqlite-core";
// 🔹 Tabla de usuarios
export const users = sqliteTable("users", {
    id: integer("id").primaryKey({ autoIncrement: true }),
    username: text("username").notNull().unique(),
    password: text("password").notNull(),
});
// 🔹 Clientes
export const clients = sqliteTable("clients", {
    id: integer("id").primaryKey({ autoIncrement: true }),
    name: text("name").notNull(),
    email: text("email"),
});
// 🔹 Facturas
export const invoices = sqliteTable("invoices", {
    id: integer("id").primaryKey({ autoIncrement: true }),
    clientId: integer("client_id").references(() => clients.id),
    total: real("total").notNull(),
    date: text("date").default("CURRENT_TIMESTAMP"),
});
