import { ipcMain } from "electron";
import { getClients, addClient, deleteClient } from "../services/clients.service";

ipcMain.handle("clients:getAll", async () => getClients());
ipcMain.handle("clients:add", async (_e, name, email) => addClient(name, email));
ipcMain.handle("clients:delete", async (_e, id) => deleteClient(id));
