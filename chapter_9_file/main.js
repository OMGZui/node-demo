/*
 * @Author: 小粽子
 * @Date: 2017-12-02 16:51:09
 * @Last Modified by: 小粽子
 * @Last Modified time: 2017-12-02 17:10:50
 */

var fs = require("fs");

console.log("查看 ../ 目录");
fs.readdir("../", function (err, files) {
    if (err) {
        return console.error(err);
    }
    files
        .forEach(function (file) {
            console.log(file);
        });
});