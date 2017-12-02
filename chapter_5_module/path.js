/*
 * @Author: 小粽子
 * @Date: 2017-12-02 17:06:24
 * @Last Modified by: 小粽子
 * @Last Modified time: 2017-12-02 17:10:47
 */

var path = require("path");

// 格式化路径
console.log('normalization : ' + path.normalize('/test/test1//2slashes/1slash/tab/..'));

// 连接路径
console.log('joint path : ' + path.join('/test', 'test1', '2slashes/1slash', 'tab', '..'));

// 转换为绝对路径
console.log('resolve : ' + path.resolve('main.js'));

// 路径中文件的后缀名
console.log('ext name : ' + path.extname('main.js'));