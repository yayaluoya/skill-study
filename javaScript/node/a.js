const fs = require('fs');

let png = fs.readFileSync('F:/资源/微信图片_20230331140326.jpg');

console.log([...png.toString('ascii')].splice(0, 20));
