let { ipcRenderer } = require('electron');

//const os = require("os");
// alert(os.type());
ipcRenderer.on('hi-webview', (event, arg) => {
  ipcRenderer.sendToHost('has-privilege');
});
