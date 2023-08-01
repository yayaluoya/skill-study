#!/usr/bin/env node
console.log('我是文件c.js');
const net = require('net');
const path = require('path');

// process.send?.(
//     JSON.stringify({
//         msg: 'c.js向父组件发送消息',
//     }),
// );

let socket = net.connect(path.join('\\\\?\\pipe', process.cwd(), 'myctl'));

socket.end(
    JSON.stringify({
        msg: 'c.js向父组件发送消息',
    }),
);
