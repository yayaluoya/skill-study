const iohook = require('iohook');
const robotjs = require('robotjs');
const fs = require('fs');
const path = require('path');

let type = {
    keycode: 46,
    rawcode: 8,
    type: 'keydown',
    altKey: true,
    shiftKey: true,
    ctrlKey: false,
    metaKey: false,
};

function addLog(log) {
    let str = fs.readFileSync(path.join(__dirname, 'a.txt')).toString();
    str += JSON.stringify(log);
    str += '\n';
    fs.writeFileSync(path.join(__dirname, 'a.txt'), str);
}

let f = (event) => {
    addLog(event);
    iohook.off('keydown', f);
    console.log('down', event.keycode);
    if (!event.ctrlKey && event.keycode == 16) {
        setTimeout(() => {
            robotjs.keyTap('q');
        }, 3000);
    }
};

iohook.on('keyup', () => {
    console.log('up');
    iohook.off('keydown', f);
    iohook.on('keydown', f);
});

// Register and start hook
iohook.start();
