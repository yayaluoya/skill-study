const { spawn, exec, spawnSync, execFile } = require('child_process');
const path = require('path');
const net = require('net');

console.log('node衍生shell的执行路径', process.env.ComSpec);

/** 用node执行某个文件 */
spawn('node', [path.join(__dirname, './c.js')], {
    stdio: 'inherit',
});
//创建IPC服务
let server = net
    .createServer((socket) => {
        console.log('连接');
        let data = '';
        socket.setEncoding('utf-8');
        socket.on('data', (d) => {
            console.log('收到数据', d);
            data += d;
        });
        socket.on('end', () => {
            console.log('数据传输完成', data);
            server.close();
        });
    })
    .listen(path.join('//?/pipe/', process.cwd(), 'myctl'));

// let _ = execFile('node', [path.join(__dirname, './c.js')]);
// _.stdout.on('data', (d) => {
//     console.log(d.toString());
// });

// /** 用powershell查看目录结构 */
// spawn('powershell', ['dir'], {
//     stdio: 'inherit',
// });

// /** 打印一个消息 */
// spawn('echo', ['哈哈哈哈'], {
//     stdio: 'inherit',
// });

// /** 打开计算器 */
// spawn('calc', {
//     stdio: 'inherit',
// });

// /** 打印帮助 */
// spawn('help', ['cd'], {
//     stdio: 'inherit',
// });
