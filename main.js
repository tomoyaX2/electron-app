const { app, BrowserWindow } = require('electron');

let mainWindow;


function main() {
  mainWindow = new BrowserWindow({
    width: 600,
    height: 600,
    frame: false
  })

  mainWindow.loadFile('index.html');
}

app.on('ready', main);

app.on('window-all-closed', () => {
  app.quit();
});
