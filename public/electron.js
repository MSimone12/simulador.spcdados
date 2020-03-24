const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

const path = require('path')
const url = require('url')
const isDev = require('electron-is-dev')

const isOnline = require('is-online')

let mainWindow

async function createWindow() {
  const { height, width } = electron.screen.getPrimaryDisplay().workAreaSize
  mainWindow = new BrowserWindow({
    width,
    height,
    icon: path.join(__dirname, '../public/logoSPC.png'),
    webPreferences: { nodeIntegration: true }
  })

  if (isDev) mainWindow.webContents.openDevTools()

  const activeUrl = 'https://simulador-spcdados.herokuapp.com'

  const offlineUrl = url.format({
    pathname: path.join(__dirname, '../build/index.html'),
    protocol: 'file:',
    slashes: true
  })

  const mainUrl = await isOnline().then(online => {
    if (online) {
      return isDev ? 'http://localhost:3000' : activeUrl
    }
    return offlineUrl
  })

  await mainWindow.loadURL(mainUrl)
  mainWindow.on('closed', () => (mainWindow = null))
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})
