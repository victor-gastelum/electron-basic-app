"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const auth_service_1 = require("../services/auth.service");
electron_1.ipcMain.handle("auth:login", async (_e, username, password) => {
    const user = await (0, auth_service_1.login)(username, password);
    if (!user)
        throw new Error("Credenciales inválidas");
    return { id: user.id, username: user.username };
});
electron_1.ipcMain.handle("auth:register", async (_e, username, password) => {
    await (0, auth_service_1.register)(username, password);
    return true;
});
