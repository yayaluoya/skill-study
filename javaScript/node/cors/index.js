const fs = require('fs');
const http = require('http');
const path = require('path');

/**
 * 关于跨域的实验
 */

const CORS = {
  'Access-Control-Allow-Origin': '*', //指示响应的资源是否可以被给定的来源共享。
  'Access-Control-Allow-Credentials': 'true', //指示当请求的凭据标记为 true 时，是否可以暴露对该请求的响应给脚本。
  'Access-Control-Allow-Headers': '*', //用在对预检请求的响应中，指示实际的请求中可以使用哪些 HTTP 标头。
  'Access-Control-Allow-Methods': '*', //指定对预检请求的响应中，哪些 HTTP 方法允许访问请求的资源。
  'Access-Control-Expose-Headers': '', //通过列出标头的名称，指示响应中的哪些标头可以暴露给脚本。
  'Access-Control-Max-Age': '', //指示预检请求的结果能被缓存多久。
  'Access-Control-Request-Headers': '', //用于发起一个预检请求，告知服务器正式请求会使用哪些 HTTP 标头。
  'Access-Control-Request-Method': '', //用于发起一个预检请求，告知服务器正式请求会使用哪一种 HTTP 请求方法。
  Origin: '', //指示获取资源的请求是从什么源发起的。
  'Timing-Allow-Origin': '', //指定允许查看通过资源时间 API 获取的属性值的来源，否则由于跨源限制，这些属性值会被报告为零。
};

http
  .createServer((req, res) => {
    console.log('method', req.method);
    console.log('url', req.url);
    //
    let url = req.url;
    switch (req.method) {
      case 'GET':
        if (url == '/a') {
          res.writeHead(200, {
            ...CORS,
          });
          res.end('结果 测试');
        } else if (url == '/png') {
          fs.createReadStream(
            path.join(__dirname, '../../images/Quicker_20231108_095657.png'),
          ).pipe(res);
        }
        break;
      case 'OPTIONS':
        /**
         * 当预检请求不是200-300的状态码时及时有跨域的响应头也无效
         */
        res.writeHead(200, {
          // ...CORS,
        });
        res.end('结果 OPTIONS');
        break;
    }
  })
  .listen(1234);

http
  .createServer((req, res) => {
    let url = req.url;
    if (url == '/') {
      res.writeHead(200, {
        'content-type': 'text/html; charset=utf-8',
      });
      fs.createReadStream(path.join(__dirname, './index.html')).pipe(res);
    } else {
    }
  })
  .listen(1235);

console.log(`server http://localhost:${1234}`);
console.log(`web http://localhost:${1235}`);
