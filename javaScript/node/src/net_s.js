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
  // 这里注意c是一个双工流
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
  // 这里的写入和createServer时的处理方法一样是同步执行的
  // c.write('哈哈');
  c.on('data', (d) => {
    console.log('data->', d.toString());
  });
});

console.log('address', server.address());
