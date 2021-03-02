const fs = require("fs");
const { createServer } = require ("http");
const { join } = require("path");;

const server = createServer((req, res) => {
    const { url, method } = req
    if (url === "/" && method === "GET") {
        res.setHeader("Content-Type", "text/html");
        const readStream = fs.createReadStream(join(__dirname, "../Pages/index.html"));
        readStream.pipe(res);
        
    }else {
        res.setHeader("Content-Type", "text/html");
        const readStream = fs.createReadStream(join(__dirname, "../Pages/404.html"));
        readStream.pipe(res);
        

    };
    
});