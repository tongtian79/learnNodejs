单线程，异步
异步用回调函数实现


step1()
.then(step2)
.then(step3)
.catch((e) => {
    Do something with error
})