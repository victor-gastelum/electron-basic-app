import { app, BrowserWindow } from "electron";
import path from "path";

// Importa IPC handlers
import "./ipc/auth.ipc";
import "./ipc/clients.ipc";
import "./ipc/invoices.ipc";

async function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  if (process.env.NODE_ENV === "development") {
    await win.loadURL("http://localhost:5173");
  } else {
    await win.loadFile(path.join(__dirname, "../dist/index.html"));
  }
}

app.whenReady().then(createWindow);
