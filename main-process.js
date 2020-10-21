$(function () {
  let webview_1 = $('#webview_1')[0];

  //接受webview_1回传的异步消息
  webview_1.addEventListener('ipc-message', (event) => {
    alert(JSON.stringify(event));
  });
});
