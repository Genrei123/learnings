const { app, BrowserWindow, ipcMain } = require('electron/main')
const path = require('node:path')
const { updateElectronApp } = require('update-electron-app')
require('dotenv').config()

updateElectronApp({
    repo: 'Genrei123/learnings',
    updateInterval: `5 minutes`,
    logger: console
})


const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })

    console.log(process.env.GITHUB_TOKEN)

    win.loadFile('index.html')
}


app.whenReady().then(() => {
    ipcMain.handle('ping', () => console.log('pong'))

    createWindow()
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})





