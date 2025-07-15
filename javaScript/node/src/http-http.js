/**
 * 关于http和http2的差别测试
 */

const http = require('http');

http
  .createServer((req, res) => {
    let str = 'hello world\n';
    res.writeHead(200, {
      'Content-Length': str.length,
    });
    res.end(str);
    // setTimeout(() => {
    //     res.end(
    //         JSON.stringify({
    //             url: req.url,
    //             header: req.headers,
    //             time: Date.now(),
    //         }),
    //     );
    // }, 100);
  })
  .listen(2001);
