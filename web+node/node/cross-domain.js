const http = require('http');

/**
 * 关于跨域的实验
 */

const cors = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Methods': '*'
}

http.createServer((req, res) => {
    console.log(req.method);
    switch (req.method) {
        case 'GET':
            res.writeHead(200, {
                ...cors,
            });
            break;
        case 'OPTIONS':
            /**
             * 当预检请求不是200-300的状态码时及时有跨域的响应头也无效
             */
            res.writeHead(100, {
                ...cors,
            });
            break;
    }
    res.end('哈哈哈');
})
    .listen(1234);

console.log(`http://localhost:${1234}`);