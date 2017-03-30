'use strict';

const http = require('http');
const fs = require('fs');
// const file = fs.createWriteStream('file.pdf');
let fileCount = 0;

const server = http.createServer();
server.listen(3000);

server.on('request', function(req, res) {
    const file = fs.createWriteStream(`copy${fileCount}.pdf`);
    const fileSize = req.headers['content-length'];
    let uploadedSize = 0;

    req.pipe(file);

    req.on('data', (chunk) => {
        uploadedSize += chunk.length;
        console.log((uploadedSize / fileSize * 100).toFixed(2) + '%');
    });

    req.on('end', () => {
        console.log('archivo finalizado');
        fileCount++;
        res.end(JSON.stringify({transfer: 'finished'}));
    });

});
