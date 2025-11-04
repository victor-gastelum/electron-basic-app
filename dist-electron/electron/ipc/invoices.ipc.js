import { ipcMain } from "electron";
import { getInvoices, addInvoice, deleteInvoice } from "../services/invoices.service";
ipcMain.handle("invoices:getAll", async () => getInvoices());
ipcMain.handle("invoices:add", async (_e, clientId, total) => addInvoice(clientId, total));
ipcMain.handle("invoices:delete", async (_e, id) => deleteInvoice(id));
