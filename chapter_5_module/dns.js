/*
 * @Author: 小粽子
 * @Date: 2017-12-02 17:08:13
 * @Last Modified by: 小粽子
 * @Last Modified time: 2017-12-02 17:10:44
 */

var dns = require('dns');

dns.lookup('www.omgzui.pub', function onLookup(err, address, family) {
    console.log('ip 地址:', address);
    dns.reverse(address, function (err, hostnames) {
        if (err) {
            console.log(err.stack);
        }

        console.log('反向解析 ' + address + ': ' + JSON.stringify(hostnames));
    });
});