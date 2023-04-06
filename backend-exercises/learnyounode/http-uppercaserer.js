const http = require('node:http');



const req = http.createServer({ method: 'POST' }, (req, res) => {
    // res.setEncoding('utf8');
    // res.on('data', (chunk) => {
    //     console.log(`BODY: ${chunk}`);
    // });
    // res.on('end', () => {
    //     console.log('No more data in response.');
    // });

    const map = require('through2-map')
    inStream.pipe(map(function (chunk) {
        return chunk.toString().split('').reverse().join('')
    })).pipe(outStream)


}).listen(process.argv[2])
