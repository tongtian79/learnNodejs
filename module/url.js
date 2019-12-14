// url module

var http = require('http');
var url = require('url');

// 新的WHATWG URL 分析器写法
// var URL = require('url').URL;

//所有的路由设计都是通过req.url
//识别URL，用到url模块，与queryString模块

http.createServer(function (req, res) {

    res.writeHead(200, {
        "Content-type": "text/html; charset=utf8"
    })

    // url.parse()可以将url分割成很多部分
    var path = url.parse(req.url);

    // req.write(path)

    console.log('pathname:',path.pathname)
    console.log('port:',path.port);
    console.log('search:',path.search);
    //如果parse第二个参数是true,就可以url，query转化成obj
    console.log('query:', url.parse(req.url, true).query);
    res.end('');

}).listen(3000, '127.0.0.1')
