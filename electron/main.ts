import { app, BrowserWindow } from "electron";
import path from "path";

let win: BrowserWindow | null = null;

async function createWindow() {
  win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  if (!app.isPackaged) {
    // 👇 Modo desarrollo (React con Vite)
    await win.loadURL("http://localhost:5173");
    win.webContents.openDevTools(); // opcional, muestra consola
  } else {
    // 👇 Modo producción (build estático)
    await win.loadFile(path.join(__dirname, "../dist/index.html"));
  }
}

app.whenReady().then(createWindow);
