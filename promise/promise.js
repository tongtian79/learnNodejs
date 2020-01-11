// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('haha')
//     })
// }, 1000)
//
// promise.then('hahah')
//     .then(console.log)

function callback() {
    console.log('Done');
}
console.log('before setTimeout()');
setTimeout(callback, 1000); // 1秒钟后调用callback函数
console.log('after setTimeout()');
