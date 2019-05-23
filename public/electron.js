const  { HANDLE_MINIMIZE } = require('../src/components/ElectronContants');
const { app, BrowserWindow, ipcMain, globalShortcut, } = require('electron');

const isDev = require('electron-is-dev');

let mainWindow;

const createWindow = () => {
  mainWindow = new BrowserWindow({
    backgroundColor: '#F7F7F7',
    minWidth: 880,
    titleBarStyle: 'hidden',
    frame: false,
    webPreferences: {
      nodeIntegration: true,
      webSecurity: true
    },
    height: 860,
    width: 1280,
  });

  mainWindow.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file:///${__dirname}/index.html`
  );
  if (isDev) {
    const {
      default: installExtension,
      REACT_DEVELOPER_TOOLS,
      REDUX_DEVTOOLS,
    } = require('electron-devtools-installer');

    installExtension(REACT_DEVELOPER_TOOLS);

    installExtension(REDUX_DEVTOOLS);

  }
  ipcMain.on(HANDLE_MINIMIZE, (e, arg) => {
    mainWindow.minimize();
  })

  globalShortcut.register('Esc', () => {
    mainWindow.close();
  });
  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  });
};


app.on('ready', () => {
  createWindow();
});

app.on('window-all-closed', () => {
  app.quit();
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});

ipcMain.on('load-page', (event, arg) => {
  mainWindow.loadURL(arg);
});
