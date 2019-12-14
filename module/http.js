//http module


var http = require('module/http');

// res.end, 必须写要不服务器一直会挂起
//createServer, 参数是一个回调函数


// text/html, 它会把listen的内容以html形式渲染
// text/plain, 它会把内容当成纯文本，会输出<h1>hello world</h1>

// http.createServer(function (req, res) {
//     console.log('server has been received your require:', req.url);
//     res.writeHead(200, {
//         "Content-Type":"text/html;charset=UTF8"
//     })
//     res.write("<h1>我是h1主标题</h1>")
//     res.write("<h2>我是h2主标题</h2>")
//     res.end('<h1>hello world</h1>')
// }).listen(3000, '127.0.0.1')

//监听端口： 端口号，地址

http.createServer(function (req, res) {
    res.writeHead(200, {
        "Content-type":"text/html;charset=UTF8"
    })
    res.write("<h1>自己写的http module</h1>");
    res.end('')
}).listen(3000,'127.0.0.1')
