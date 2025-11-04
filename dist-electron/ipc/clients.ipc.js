"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const clients_service_1 = require("../services/clients.service");
electron_1.ipcMain.handle("clients:getAll", async () => (0, clients_service_1.getClients)());
electron_1.ipcMain.handle("clients:add", async (_e, name, email) => (0, clients_service_1.addClient)(name, email));
electron_1.ipcMain.handle("clients:delete", async (_e, id) => (0, clients_service_1.deleteClient)(id));
