var p1 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 500, 'P1')
})

var p2 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 600, 'P2')
})

Promise.all([p1, p2]).then(results => {console.log(results)})

