// function test(resolve, reject) {
//     var timeOut = Math.random() * 2;
//     console.log('set timeout to ' + timeOut + ' seconds');
//     setTimeout(() => {
//         if(timeOut <0.1) {
//             console.log("call resolve() ...");
//             resolve('200 ok')
//         }else {
//             console.log("call reject() ...");
//             reject("time in " + timeOut + ' seconds')
//         }
//     }, timeOut*1000)
// }
//
// new Promise(test)
//     .then((result) => {
//         console.log("success " + result)
//     })
//     .catch((reason) => {
//         console.log("fail " + reason)
//     })

// new Promise(function (resolve, reject) {
//     var timeOut = Math.random() * 2;
//     console.log('set timeout to ' + timeOut + ' seconds');
//     setTimeout(() => {
//         if (timeOut < 0.1) {
//             console.log("call resolve() ...");
//             resolve('200 ok')
//         } else {
//             console.log("call reject() ...");
//             reject("time in " + timeOut + ' seconds')
//         }
//     }, timeOut * 1000)
// }).then((r) => {
//     console.log('Done ' + r)
// }).catch(reason => {
//     console.log('failed' + reason)
// })