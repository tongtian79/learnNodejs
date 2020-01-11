# learnNodejs
Nodejs begin learner
nodeJs是一个JS运行平台;、
node是服务器端JS平台

事件，异步，非阻塞I/O
Node自带了一个包管理工具，npm

核心模块：文件系统(fs, path), 网路(http),调试器
三种主流的Node程序：
1. web应用程序(Connect，Express,node服务器端框架)
2. 命令行工具和后台程序
3. 桌面程序

模块：可以是一个文件，也可以是个文件目录

路径 ./ 表明模块跟程序脚本放在同一目录下

如果一个模块既有exports又有module.exports,会返回module.exports, 而exports会被忽略

Node的世界两种响应逻辑管理方式: 回调和事件监听；
回调是一个函数，被当作参数传给异步函数，用来描述异步操作完成之后要做什么

异步逻辑的顺序化
串行执行：async
并行执行：把任务按照预期的顺序放入数组中

http module

Event loop
1. 所有任务都在主线程上执行，形成一个执行栈；
2. 在主线程之外还存在一个任务队列，系统把异步任务放到“任务队列”,然后主线程继续执行后续的任务；
3. 一旦“执行栈”中的所有任务执行完毕，系统就会读取“任务队列”，如果这时异步任务已经结束，就会从“任务队列”进入执行栈，恢复执行。
4. 主线程不断执行上面的第三步

node 调试
[方法一]
node --inspect --debug-brk, 会启动node调试器，并且停在第一行。
node --inspect app.js
node --inspect-brk app.js
打开浏览器
chrome://inspect

[方法二]
npm i inspect-process -g
inspect app.js

inspect-process会自动调用Chrome DevTools