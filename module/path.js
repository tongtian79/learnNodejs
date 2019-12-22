var fs = require("fs");

// __dirname是绝对路径

fs.readFile(__dirname + '/test.txt', function (err, data) {
    console.log(data)
    console.log(data.toString())
})