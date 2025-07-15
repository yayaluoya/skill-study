const https = require('node:https');
const fs = require('node:fs');
const path = require('path');

const options = {
  key: fs.readFileSync(path.join(__dirname, './pem/privkey.pem')),
  cert: fs.readFileSync(path.join(__dirname, './pem/cacert.pem')),
};

https
  .createServer(options, (req, res) => {
    res.writeHead(200);
    res.end('hello world\n');
  })
  .listen(2003);
