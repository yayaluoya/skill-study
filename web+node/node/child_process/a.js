#! /usr/bin/env node
console.log('开始');
setTimeout(() => {
  console.log('结束');
  setTimeout(() => {}, 1000);
}, 1000);
