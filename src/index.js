const { app, BrowserWindow, globalShortcut, protocol } = require('electron');
const path = require('path');

if (require('electron-squirrel-startup')) {
  app.quit();
}

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    useContentSize: true,
    autoHideMenuBar: true,
    width: 864,
    height: 584,
    minWidth: 864,
    minHeight: 584,
    center: true,
    title: 'Maginet',
    icon: './src/static/png/favicon.png',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  mainWindow.setMenu(null);

  mainWindow.loadFile(path.join(__dirname, 'index.html'));
  // mainWindow.webContents.openDevTools();

  globalShortcut.unregisterAll();
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});