"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const invoices_service_1 = require("../services/invoices.service");
electron_1.ipcMain.handle("invoices:getAll", async () => (0, invoices_service_1.getInvoices)());
electron_1.ipcMain.handle("invoices:add", async (_e, clientId, total) => (0, invoices_service_1.addInvoice)(clientId, total));
electron_1.ipcMain.handle("invoices:delete", async (_e, id) => (0, invoices_service_1.deleteInvoice)(id));
