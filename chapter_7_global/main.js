/*
 * @Author: 小粽子 
 * @Date: 2017-12-02 16:17:28 
 * @Last Modified by: 小粽子
 * @Last Modified time: 2017-12-02 16:42:02
 */


//  变量variable

// __filename和__dirname

console.log(__filename)
console.log(__dirname)

// setTimeout和clearTimeout

function printHello(){
    console.log('hello world!')
}


// setTimeout(printHello, 2000)

// var t = setTimeout(printHello, 2000)
// clearTimeout(t)

// setInterval和clearInterval

// setInterval(printHello, 2000)

// var interval = setInterval(printHello, 2000)
// console.log('我还在进行呢')
// clearInterval(interval)

// console
console.info("程序开始执行：");

var counter = 10;
console.log("计数: %d", counter);

console.time("获取数据");

var element = 0
for (let index = 1; index < 1000000; index++) {
    element += index
}
console.log('%d',element)

console.timeEnd('获取数据');

console.info("程序执行完毕。")

// process

// 输出到终端
process.stdout.write("Hello World!" + "\n");

// 通过参数读取
process.argv.forEach(function(val, index, array) {
   console.log(index + ': ' + val);
});

// 获取执行路径
console.log(process.execPath);

// 平台信息
console.log(process.platform);

// 输出当前目录
console.log('当前目录: ' + process.cwd());

// 输出当前版本
console.log('当前版本: ' + process.version);

// 输出内存使用情况
console.log(process.memoryUsage());