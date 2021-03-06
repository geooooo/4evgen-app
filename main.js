const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

function createWindow () {
    win = new BrowserWindow({
        width: 800,
        height: 600,
        devTools: false,
        title: "Перемежитель"
    });
    win.setMenu(null);

    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }));
}

app.on('ready', createWindow);
