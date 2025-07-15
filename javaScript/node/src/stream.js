const fs = require('fs');
const path = require('path');
let fsReadStream = fs.createReadStream(path.join(__dirname, './interesting/a.txt'), {
  autoClose: false,
});

console.log(fsReadStream.readableEnded);

fsReadStream.pipe(fs.createWriteStream(path.join(__dirname, './interesting/b.txt')));
// .pipe(fs.createWriteStream(path.join(__dirname, './interesting/c.txt')))

fsReadStream.on('data', (d) => {
  console.log('1', d.toString());
});

setTimeout(() => {
  console.log(fsReadStream.readableEnded);
  fsReadStream.on('data', (d) => {
    console.log('2', d.toString());
  });

  fsReadStream.on('data', (d) => {
    console.log('3', d.toString());
  });
}, 1000);

fsReadStream.on('end', () => {
  console.log(fsReadStream.readableEnded);
  console.log('读取结束');
});
