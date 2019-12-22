var http = require("http");
var fs = require("fs");

//iterator files under module;

http.createServer(function (req, res) {
    fs.readdir('./mkdir/', function (err, files) {
        //files是一个存放文件夹名的数组;

        var wenjianjia = [];
        (function iterator(i) {

            if(i == files.length) {
                console.log(wenjianjia)
                return;
            }


            fs.stat('./mkdir/' + files[i], function (err, stats) {
                console.log('stats',stats);
                console.log('./mkdir/' + files[i])
                if(stats.isDirector()) {
                    wenjianjia.push(files[i])
                }
                iterator(i+1);
            })

        })(0)

    })

    res.end();

}).listen(3000, '127.0.0.1')