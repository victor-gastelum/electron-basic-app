const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld("api", {
  auth: {
    login: (u: string, p: string) => ipcRenderer.invoke("auth:login", u, p),
    register: (u: string, p: string) => ipcRenderer.invoke("auth:register", u, p),
  },
  clients: {
    getAll: () => ipcRenderer.invoke("clients:getAll"),
    add: (name: string, email: string) => ipcRenderer.invoke("clients:add", name, email),
    delete: (id: number) => ipcRenderer.invoke("clients:delete", id),
  },
  invoices: {
    getAll: () => ipcRenderer.invoke("invoices:getAll"),
    add: (clientId: number, total: number) => ipcRenderer.invoke("invoices:add", clientId, total),
    delete: (id: number) => ipcRenderer.invoke("invoices:delete", id),
  },
});