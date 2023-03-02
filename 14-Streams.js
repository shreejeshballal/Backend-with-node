const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
    //Solution 1
    // fs.readFile('./content/first.txt', (err, data) => {
    //     if (err) console.error(err);
    //     res.end(data);
    // })

    // Solution 2
    // const readable = fs.createReadStream('./content/first.txt');
    // readable.on('data', chunk => {
    //     res.writable(chunk);
    // });
    // readable.on('end', () => {
    //     res.end();
    // })
    // readable.on('error', (err) => {
    //     console.error(err);
    //     res.statusCode = 500;
    //     res.end("file ot foundd");
    // })

    // Solution 3
    const readable = fs.createReadStream('./content/first.txt');
    readable.pipe(res);
});

server.listen(8000, '127.0.0.1', () => {
    console.log('listening....');
})