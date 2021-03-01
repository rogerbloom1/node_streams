const fs = require("fs");
const { createServer } = require ("http");


const server = createServer((req, res) => {
    const { url, method } = req
    if (url === "/" && method === "GET") {
        const readStream = fs.createReadStream(path.join(__dirname, "/index.html")
        );
        readStream.pipe(res);
        return
    };
    res.end();node
});