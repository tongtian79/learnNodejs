//[实例1]  Promise 构造函数是同步执行的，而promise.then中的函数是异步执行;
new Promise ((resolve, reject) => {
    console.log('1');
    resolve();
    console.log('2')
}).then(() => {
    console.log('3')
})
console.log('4')


//[实例2] 构造函数中的resolve, reject只有在第1次执行时有效，多次调用没有任何作用：Promise的状态一旦改变则不能改变
new Promise((resolve, reject) => {
    resolve('success1')
    reject('error')
    resolve('success')
}).then(res => {
    console.log('then', res)
}).catch(err => {
    console.log('cathc', errr)
})