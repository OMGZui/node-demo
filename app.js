/*
 * @Author: 小粽子
 * @Date: 2017-12-01 15:41:45
 * @Last Modified by: 小粽子
 * @Last Modified time: 2017-12-01 16:49:13
 */

var http = require('http')

http.createServer(function (req, res) {

    res.writeHead(200, {'Content-Type': 'text/plain;charset=utf-8'})

    res.end('傻狗\n')
}).listen(8888)

console.log('port 8888')