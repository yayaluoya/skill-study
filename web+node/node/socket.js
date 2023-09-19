const net = require('node:net');

/**
 * 用套接字直接连tcp服务
 */

let s1 = new net.Socket();

s1.on('data', (d) => {
  console.log('s1d->', d.toString());
});

s1.on('error', (err) => {
  console.log('error->', err);
});

s1.on('close', (err) => {
  console.log('close->', err);
});

s1.connect({
  port: 8124,
  host: 'localhost',
});
