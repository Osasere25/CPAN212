const http = require("http");
const fs = require ("fs");
const path = require ("path");

const port = 3000;

const server = http.createServer((req, res) => {
    const fielPath = path.join(__dirname, "pages", '${req.url === "/" ? "index" : req.url.slice(1)}.html');
     

    fs.readFile(fielPath, (err, data) => { 
        if (err) {
            fs.readFile(path.join(__dirname, "pages", "404.html"), (err404, data404) => {
                res.writeHead(404, {"Content-Type": "text/html" });
                res.end(daat404);
            });

        } else {
            res.writeHead(200, { "Content-Type": "text/html"});
            res.end(data);
        }
    });
});

server.listen(port, () => {
    console.log('Server is running on http://localhost:$[port}');

});