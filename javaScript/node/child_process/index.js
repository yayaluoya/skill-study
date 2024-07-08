#! node
const child_process = require('child_process');
const path = require('path');
const fs = require('fs');

child_process.spawn; //衍生子进程
child_process.spawnSync; //同步调用
child_process.exec; //衍生一个 shell 并在 shell 上运行命令
child_process.execFile; //直接衍生命令，且无需先衍生 shell
child_process.execSync; //同步调用方式
child_process.execFileSync; //同步调用方式
child_process.fork; //衍生一个新的 Node.js 进程，并通过建立 IPC 通讯通道来调用指定的模块，该通道允许父进程与子进程之间相互发送信息。

console.log(process.env.ComSpec);

/** 打开一个新的cmd窗口 */
function f1() {
  // let childP = child_process.exec('start cmd /k "node -v"', {
  //     // shell: true,
  //     detached: true,//父子进程分离
  // });

  // let childP = child_process.spawn('cmd.exe', [
  //     '/k',
  //     `"node F:/work/_/skill-study/shell/src/js.js"`,
  // ], {
  //     shell: true,
  //     /**
  //      * 在 Windows 上，设置 options.detached 为 true 可以使子进程在父进程退出后继续运行。 子进程有自己的控制台窗口。 一旦启用一个子进程，它将不能被禁用。
  //      */
  //     detached: true,
  // });

  // let childP = child_process.spawn('node F:/work/_/skill-study/shell/src/js.js', {
  //     shell: true,
  //     detached: true,
  // });

  let childP = child_process.spawn('cmd /k node -v', {
    shell: true,
    detached: true,
  });

  childP.stdout.on('data', (data) => {
    console.log(data.toString());
    fs.writeFileSync(path.join(__dirname, 'log.txt'), data);
  });
  childP.stderr.on('data', (data) => {
    console.log(data.toString());
    fs.writeFileSync(path.join(__dirname, 'log.txt'), data);
  });
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
