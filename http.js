//http module

var http = require('http');

//createServer, 参数是一个回调函数

var server = http.createServer(function (req, res) {
    console.log('server has been received your require:', req)

    res.end('hello world')

})

server.listen(3000, '127.0.0.1')