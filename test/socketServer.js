const webSocketServer = require('ws').Server;

const ws = new webSocketServer({port: 9999 });

ws.on('connection', ws => {
  console.log('客户端已经连接到了...');
  ws.on('message', msg => {
    console.log(msg);
  });
  
  setTimeout(() => {
    ws.send('Hello ksm, this is my hello!')
  }, 5000);
});
