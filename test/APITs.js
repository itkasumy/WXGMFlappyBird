export class APITs {
  getUserInfo() {
    wx.getUserInfo({
      success: res => {
        console.log(res);
      },
      fail: err => {
        console.log(err);
      }
    })
  }

  login() {
    wx.login({
      success: res => {
        console.log(res);
      },
      fail: err => {
        // console.log(err);
      },
      complete: () => {}
    });
  }

  getSettings() {
    wx.getSetting({
      success: res => {
        console.log(res);
      }
    });
  }

  httpTs() {
    // wx.request({
    //   url: 'http://127.0.0.1:3000/', //开发者服务器接口地址",
    //   data: 'ksm', //请求的参数",
    //   method: 'POST',
    //   // dataType: 'json', //如果设为json，会尝试对返回的数据做一次 JSON.parse
    //   success: res => {
    //     console.log(res);
    //   },
    //   fail: () => {},
    //   complete: () => {}
    // });

    wx.request({
      url: 'http://www.baidu.com', //开发者服务器接口地址",
      method: 'GET',
      success: res => {
        console.log(res);
      },
      fail: () => { },
      complete: () => { }
    });
  }

  socketTs() {
    wx.connectSocket({
      url: 'ws://127.0.0.1:9999',
      success: res => {
        console.log('客户端连接成功:', res);
      },
      fail: err => {},
      complete: () => {}
    });

    wx.onSocketOpen(res => {
      console.log('WebSocket连接已打开！');
      wx.sendSocketMessage({
        data: 'Hello, I\'m ksm',
        success: function(res){
          // success
        }
      });

      wx.onSocketMessage(res => {
        console.log('收到服务器内容：' + res.data);
      });
    });
  }
  
  downLoad() {
    wx.downloadFile({
      url: "https://cdn.pixabay.com/photo/2017/03/21/15/08/child-2162410_1280.jpg", // 下载资源的 url
      success: res => {
        console.log(JSON.stringify(res));
      },
      fail: () => {},
      complete: () => {}
    });
  }

}