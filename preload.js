const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('versions', {
    // node: () => process.versions.node,
    // chrome: () => process.versions.chrome,
    // electron: () => process.versions.electron,
    ping: () => ipcRenderer.invoke('ping'),
    // checkInternet: () => ipcRenderer.invoke('connection-status')
    handleOnline: () => ipcRenderer.invoke('online'),
    handleOffline: () => ipcRenderer.invoke('offline')

    // checkConnection: () => ipcRenderer.invoke('checkOnline', isOnline())
})

