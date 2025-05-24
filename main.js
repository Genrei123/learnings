const { app, BrowserWindow, ipcMain } = require('electron/main')
const path = require('node:path')
require('dotenv').config()
require('update-electron-app')()


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





