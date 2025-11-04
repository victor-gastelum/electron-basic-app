"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = register;
exports.login = login;
const client_1 = require("../db/client");
const schema_1 = require("../db/schema");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const drizzle_orm_1 = require("drizzle-orm");
async function register(username, password) {
    const hashed = await bcryptjs_1.default.hash(password, 10);
    await client_1.db.insert(schema_1.users).values({ username, password: hashed });
}
async function login(username, password) {
    const result = await client_1.db.select().from(schema_1.users).where((0, drizzle_orm_1.eq)(schema_1.users.username, username));
    const user = result[0];
    if (!user)
        return null;
    const valid = await bcryptjs_1.default.compare(password, user.password);
    return valid ? user : null;
}
