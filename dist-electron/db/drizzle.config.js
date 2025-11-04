"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    schema: "./electron/db/schema.ts",
    out: "./electron/db/migrations",
    dialect: "sqlite",
    dbCredentials: {
        url: "./app_data.db",
    },
};
