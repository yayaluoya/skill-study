/**
 * 关于http和http2的差别测试
 */

const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {});
    setTimeout(() => {
        res.end(JSON.stringify({
            url: req.url,
            header: req.headers,
            time: Date.now(),
        }));
    }, 100);
}).listen(2002);