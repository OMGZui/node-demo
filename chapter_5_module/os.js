/*
 * @Author: 小粽子
 * @Date: 2017-12-02 17:03:50
 * @Last Modified by: 小粽子
 * @Last Modified time: 2017-12-02 17:10:54
 */

var os = require("os");

// CPU 的字节序
console.log('endianness : ' + os.endianness());

// 操作系统名
console.log('type : ' + os.type());

// 操作系统名
console.log('platform : ' + os.platform());

// 系统内存总量
console.log('total memory : ' + os.totalmem() / 1024 / 1024 / 1024 + " G.");

// 操作系统空闲内存量
console.log('free memory : ' + os.freemem() / 1024 / 1024 / 1024 + " G.");