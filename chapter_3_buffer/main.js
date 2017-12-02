/*
 * @Author: 小粽子
 * @Date: 2017-12-01 17:25:18
 * @Last Modified by: 小粽子
 * @Last Modified time: 2017-12-02 15:02:08
 */

//  缓冲区buffer 写入
var buf = new Buffer(255)

var len = buf.write('傻狗啊你')

console.log("字节数：" + len)

// 缓冲区读取
console.log(buf.toString('utf8', 0, 3)) //傻

// 缓冲区转换
var buf2 = new Buffer('hello')

console.log(buf2.toJSON()) //{ type: 'Buffer', data: [ 104, 101, 108, 108, 111 ] }

// 缓冲区合并
var buf3 = new Buffer('傻狗')

var buf4 = new Buffer('你好')

var buf5 = Buffer.concat([buf3, buf4])

console.log(buf5.toString('utf8', 0)) //傻狗你好

// 缓冲区比较
var result1 = Buffer.compare(new Buffer('1'), new Buffer('2'))

console.log(result1) //-1

// 缓冲区拷贝
buf3.copy(buf4) // buf3的内容拷贝入buf4
console.log(buf4.toString('utf8', 0)) //傻狗

// 缓冲区裁剪
console.log((buf.slice(0, 9)).toString('utf8', 0)) //傻狗啊

// 缓冲区长度
console.log(buf.length) //255
console.log(buf3.length) //6