var http = require('http');
var url = require('url');

//http://127.0.0.1:3000/student/1234567890
//http://127.0.0.1:3000/teacher/123456

http.createServer(function (req, res) {
    res.writeHead(200, {
        "Content-type": "text/html; charset=utf8"
    })
    var userUrl = req.url;
    var studentReg = /^\/student\/\d{10}$/;
    var teacherReg = /^\/teacher\/\d{6}$/;

    if(studentReg.test(userUrl)) {
        var studentId = userUrl.substr(9);
        console.log('studentId',userUrl,studentId)
        res.write('你查到学生的学号为:'+ studentId)
    }else if(teacherReg.test(userUrl)){
        var teacherId = userUrl.substr(9);
        console.log('studentId',userUrl,teacherId)

        res.write('你查到老师的学号为:'+ teacherId)

    }else {
        if(/^\/teacher/.test(userUrl)) {
            res.write('你输入老师的工号不正确')
        }else if (/^\/student/.test(userUrl)) {
            res.write('你输入学生的学号不正确')
        }else {
            res.write('查无此人');
        }
    }

    res.end()

}).listen(3000, '127.0.0.1')