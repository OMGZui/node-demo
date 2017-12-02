/*
 * @Author: 小粽子 
 * @Date: 2017-12-02 16:10:31 
 * @Last Modified by:   小粽子 
 * @Last Modified time: 2017-12-02 16:10:31 
 */

var server = require("./server");
var router = require("./router");
 
server.start(router.route);