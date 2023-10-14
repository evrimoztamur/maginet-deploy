const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow() {
  const mainWindow = new BrowserWindow({
    useContentSize: true,
    autoHideMenuBar: true,
    width: 800,
    height: 584,
    minWidth: 800,
    minHeight: 584,
    center: true,
    title: 'Maginet',
    show: false,
    icon: path.join(__dirname, 'static/png/appicon.ico'),
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  mainWindow.setMenu(null);

  mainWindow.loadFile(path.join(__dirname, 'index.html'));
  mainWindow.webContents.openDevTools({ mode: "detach" });

  mainWindow.once('ready-to-show', () => {
    mainWindow.show()
  });

  globalShortcut.unregisterAll();
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', function () {
  app.quit()
})
