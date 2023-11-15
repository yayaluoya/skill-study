const net = require('node:net');

/**
 * 用net模块连接tcp服务，其实和用socket直接连没啥区别
 */

let c = net.connect({
  port: 8124,
  host: 'localhost',
});

c.on('connect', () => {
  console.log('connect');
  c.write('嘿嘿嘿');
});

c.on('data', (d) => {
  console.log('data->', d.toString());
});

c.on('close', () => {
  console.log('close');
});

c.on('error', (err) => {
  console.log('error->', err);
});
