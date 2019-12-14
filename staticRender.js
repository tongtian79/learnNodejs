var http = require("module/http");
var fs = require("fs");

var server = http.createServer(function (req, res) {
    if(req.url === '/kong.jpg') {
        fs.readFile('./img/kong.jpg', function (err, data) {
            res.writeHead(200, {"Content-type":"image/jpg"});
            res.end(data)
        })

    }else if (req.url === '/fang') {
        fs.readFile("./test.html", function (err, data) {
            res.writeHead(200, {"Content-type": "text/html;charset=UTF-8"});
            res.end(data)
        })
    }else {
        res.writeHead(404, {
            "Content-type":"text/html;charset=UTF-8"
        })
        res.end("没有这个文件")
    }

})

server.listen(3000, "127.0.0.1")