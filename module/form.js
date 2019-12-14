var http = require('http');
var url = require('url');

//url.parse(req.url, true) => 可以把url转化为对象;
http.createServer(function (req, res) {
    res.writeHead(200, {
        "Content-type": "text/html;charset=UTF8"
    })
    var queryObj = url.parse(req.url, true).query;
    var name = queryObj.name;
    var age = queryObj.age;
    var sex = queryObj.sex;
    res.end('服务器收到了表格'+ name + age + sex);
}).listen(3000, '127.0.0.1')