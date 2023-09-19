const net = require('node:net');

/**
 * 创建tcp的服务
 */

const server = net.createServer((c) => {
  // 'connection' listener.
  console.log('connect');
  c.on('end', () => {
    console.log('end');
  });
  c.on('error', (err) => {
    console.log('error-connect->', err);
  });
  c.write('hello\r\n');
  c.pipe(c);
});
server.on('error', (err) => {
  console.log('error->', err);
});
server.listen(8124, () => {
  console.log('start');
});

server.on('connection', (c) => {
  console.log('connection');
  c.write('哈哈');
});

console.log('address', server.address());
