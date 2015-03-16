"use strict";
var fs = require('fs-extra');
var path = require('path');
var test = require('tape');

test('creates hooks', function(is) {
  is.plan(2);

  fs.removeSync('test/.git');
  fs.ensureDirSync('test/.git/hooks');

  require('../');

  var hooks = fs.readdirSync('test/.git/hooks');
  var stat = fs.statSync(path.join(__dirname, '.git/hooks', hooks[0]));

  is.equal(hooks.length, 3);
  is.equal(stat.mode, 33261); // 755
});
