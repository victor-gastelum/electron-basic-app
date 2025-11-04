"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const sqlite3_1 = __importDefault(require("@vscode/sqlite3"));
const sqlite_proxy_1 = require("drizzle-orm/sqlite-proxy");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const electron_1 = require("electron");
const dbPath = path_1.default.join(electron_1.app.getPath("userData"), "app_data.db");
// 🔹 Crear archivo si no existe
if (!fs_1.default.existsSync(dbPath)) {
    fs_1.default.writeFileSync(dbPath, "");
    console.log("📁 Base de datos creada:", dbPath);
}
// 🔹 Abrir la base con @vscode/sqlite3
const sqlite = new sqlite3_1.default.Database(dbPath);
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
exports.db = (0, sqlite_proxy_1.drizzle)(callback);
