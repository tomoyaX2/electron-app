
const { app, BrowserWindow, ipcMain, } = require('electron');

const isDev = require('electron-is-dev');

let mainWindow;

const createWindow = () => {
  let windowFullScreenSizeStatus = false;

  mainWindow = new BrowserWindow({
    backgroundColor: '#F7F7F7',
    titleBarStyle: 'hidden',
    frame: true,
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
  mainWindow.setMenuBarVisibility(false)

  ipcMain.on('handle-minimize', () =>
    mainWindow.minimize()
  );
  ipcMain.on('handle-close-window', () =>
  mainWindow.close());

  ipcMain.on('handle-change-screen-size', (e, windowStatus) => {
    windowFullScreenSizeStatus = windowFullScreenSizeStatus !== windowStatus;
    windowFullScreenSizeStatus  ? mainWindow.maximize() : mainWindow.unmaximize();
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
