import sqlite3 from "@vscode/sqlite3";
import { drizzle } from "drizzle-orm/sqlite-proxy";
import fs from "fs";
import path from "path";
import { app } from "electron";
const dbPath = path.join(app.getPath("userData"), "app_data.db");
// 🔹 Crear archivo si no existe
if (!fs.existsSync(dbPath)) {
    fs.writeFileSync(dbPath, "");
    console.log("📁 Base de datos creada:", dbPath);
}
// 🔹 Abrir la base con @vscode/sqlite3
const sqlite = new sqlite3.Database(dbPath);
// 🔹 Adaptador con la firma correcta para Drizzle 0.44+
const callback = async (sql, params, method) => {
    switch (method) {
        case "run":
            await new Promise((resolve, reject) => {
                sqlite.run(sql, params, err => (err ? reject(err) : resolve()));
            });
            return { rows: [] };
        case "all":
        case "values":
            const allRows = await new Promise((resolve, reject) => {
                sqlite.all(sql, params, (err, rows) => err ? reject(err) : resolve(rows));
            });
            return { rows: allRows };
        case "get":
            const row = await new Promise((resolve, reject) => {
                sqlite.get(sql, params, (err, r) => err ? reject(err) : resolve(r));
            });
            return { rows: row ? [row] : [] };
        default:
            throw new Error(`Método no soportado: ${method}`);
    }
};
// 🔹 Instancia de Drizzle lista para usar
export const db = drizzle(callback);
