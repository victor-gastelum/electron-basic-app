"use strict";
const { contextBridge, ipcRenderer } = require('electron');
contextBridge.exposeInMainWorld("api", {
    auth: {
        login: (u, p) => ipcRenderer.invoke("auth:login", u, p),
        register: (u, p) => ipcRenderer.invoke("auth:register", u, p),
    },
    clients: {
        getAll: () => ipcRenderer.invoke("clients:getAll"),
        add: (name, email) => ipcRenderer.invoke("clients:add", name, email),
        delete: (id) => ipcRenderer.invoke("clients:delete", id),
    },
    invoices: {
        getAll: () => ipcRenderer.invoke("invoices:getAll"),
        add: (clientId, total) => ipcRenderer.invoke("invoices:add", clientId, total),
        delete: (id) => ipcRenderer.invoke("invoices:delete", id),
    },
});
