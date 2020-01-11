# learnNodejs
Nodejs begin learner

http module

Event loop
1. 所有任务都在主线程上执行，形成一个执行栈；
2. 在主线程之外还存在一个任务队列，系统把异步任务放到“任务队列”,然后主线程继续执行后续的任务；
3. 一旦“执行栈”中的所有任务执行完毕，系统就会读取“任务队列”，如果这时异步任务已经结束，就会从“任务队列”进入执行栈，恢复执行。
4. 主线程不断执行上面的第三步

node 调试
[方法一]
node --inspect app.js
node --inspect-brk app.js
打开浏览器
chrome://inspect

[方法二]
npm i inspect-process -g
inspect app.js

inspect-process会自动调用Chrome DevTools