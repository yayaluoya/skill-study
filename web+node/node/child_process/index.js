#! node
const child_process = require('child_process');
const path = require('path');
const fs = require('fs');

/** 打开一个新的cmd窗口 */
function f1() {
    let childP = child_process.spawn('cmd /k; node F:/work/_/skill-study/web+node/node/child_process/a.js', {
        shell: true,
        detached: true,
    });

    // childP.stdout.on('data', (data) => {
    //     fs.writeFileSync(path.join(__dirname, 'log.txt'), data);
    // });
    // childP.stderr.on('data', (data) => {
    //     fs.writeFileSync(path.join(__dirname, 'log.txt'), data);
    // });
}

function f2() {
    const ls = child_process.spawn('cmd', {
        // cwd: path.dirname(__dirname),
        cwd: 'F:/work',
    });

    ls.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
    });

    ls.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
    });

    ls.on('close', (code) => {
        console.log(`子进程退出，退出码 ${code}`);
    });

    setTimeout(() => {
        ls.stdin.write('echo hhh\n');
    }, 1000);
}

f1();