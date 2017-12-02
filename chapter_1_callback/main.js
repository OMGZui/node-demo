/*
 * @Author: 小粽子 
 * @Date: 2017-12-01 16:22:28 
 * @Last Modified by: 小粽子
 * @Last Modified time: 2017-12-01 16:31:58
 */

//  Node.js回调


//  阻塞

var fs = require('fs')

var data = fs.readFileSync('./input.txt')

console.log(data.toString())
console.log('程序阻塞执行结束！')

// 非阻塞

fs.readFile('./input.txt', function(err, data){
    if(err){
        return console.error(err)
    }

    console.log(data.toString())
})

console.log('程序非阻塞执行结束！')


// 输出

// 可以看出阻塞的形式是先读取文件再输出语句，而非阻塞是不按顺序的

// /*
//  * @Author: 小粽子 
//  * @Date: 2017-12-01 16:23:52 
//  * @Last Modified by:   小粽子 
//  * @Last Modified time: 2017-12-01 16:23:52 
//  */

// 程序阻塞执行结束！
// 程序非阻塞执行结束！
// /*
//  * @Author: 小粽子 
//  * @Date: 2017-12-01 16:23:52 
//  * @Last Modified by:   小粽子 
//  * @Last Modified time: 2017-12-01 16:23:52 
//  */
