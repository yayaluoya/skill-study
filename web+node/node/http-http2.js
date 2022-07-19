/**
 * 关于http和http2的差别测试
 */

const http = require('http');
const spdy = require('spdy');
const fs = require('fs');
const path = require('path');

http.createServer((req, res) => {
    res.writeHead(200, {});
    setTimeout(() => {
        res.end(JSON.stringify({
            url: req.url,
            time: Date.now(),
        }));
    }, 100);
}).listen(2001);

spdy.createServer({
    key: fs.readFileSync(path.join(__dirname, './pem/privkey.pem')),
    cert: fs.readFileSync(path.join(__dirname, './pem/cacert.pem')),
}, (req, res) => {
    res.writeHead(200, {});
    setTimeout(() => {
        res.end(JSON.stringify({
            url: req.url,
            time: Date.now(),
        }));
    }, 100);
}).listen(2002);

console.log(`http1的服务 http://localhost:2001`);
console.log(`http2的服务 http://localhost:2002`);

// let t = Date.now();
// Promise.all(Array.from({ length: 100 }).fill(0).map((_, index) => {
//     return fetch(`http://localhost:2001/${index}`).then((res) => {
//         return res.json();
//     });
// })).then(() => {
//     console.log(Date.now() - t);
// });