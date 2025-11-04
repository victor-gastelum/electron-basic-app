import { ipcMain } from "electron";
import { login, register } from "../services/auth.service";

ipcMain.handle("auth:login", async (_e, username, password) => {
  const user = await login(username, password);
  if (!user) throw new Error("Credenciales inválidas");
  return { id: user.id, username: user.username };
});

ipcMain.handle("auth:register", async (_e, username, password) => {
  await register(username, password);
  return true;
});
