/**
 * Created by Administrator on 2019/12/16.
 */
var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
  //fs.readFile('../README.md', (err, data) => {
  //  res.write(data);
  //  res.end();
  //})

  //fs.mkdir('./mkdir');

  fs.stat('./mkdir',(err, data) => {
    console.log(data.isDirectory())
  })
  res.end();

}).listen(3000, '127.0.0.1')