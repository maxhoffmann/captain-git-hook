"use strict";
var fs = require('fs');
var exec = require('child_process').exec;
var path = require('path');
var test = require('tape');

test('creates hooks', function(is) {
    is.plan(2);

    fs.exists(__dirname + '/.git', function(exists) {
        if (!exists) {
            fs.mkdirSync(__dirname + '/.git');
            fs.mkdirSync(__dirname + '/.git/hooks');
        }
    });

    exec('node ' + __dirname + '/../src/install', function(error, stdout, stderr) {
        var hooks = fs.readdirSync(__dirname + '/.git/hooks');
        var stat = fs.statSync(path.join(__dirname, '/.git/hooks', hooks[0]));

        is.equal(hooks.length, 4);
        is.equal(stat.mode, 33261); // 755
    });

});
