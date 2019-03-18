const http = require('http');

http.createServer((req, res) => {
  let body = '';

  req.on('data', chunck => {
    body += chunck;
  }); 

  req.on('end', () => {
    res.end('server back datas')
    console.log(body);
  });
}).listen(3000);