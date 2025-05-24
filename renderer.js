// const information = document.getElementById('info')

//information.innerText = `This app is using Chrome (v${genrey.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()}})`

//console.log(versions.ping())




// window.addEventListener('online', () => {
//     information.innerText = "Online"
// })

// console.log(versions.checkConnection())

// if (versions.checkInternet()) {
//     console.log("true")
// } else {
//     console.log("false")
// }

const updateOnlineStatus = () => {
  document.getElementById('info').innerHTML = navigator.onLine ? 'online' : 'offline'
}

window.addEventListener('online', updateOnlineStatus)
window.addEventListener('offline', updateOnlineStatus)

updateOnlineStatus()






