#!/usr/bin/env node

"use strict";
var path = require('path');
var spawn = require('child_process').spawn;

var hookName = path.basename(__filename);
var config = require(path.resolve(process.cwd(), 'package'));

if (!config.scripts[hookName]) {
  process.exit(0);
}


var npmrun = spawn('npm', ['-s', 'run', hookName], {
  stdio: 'inherit'
});

npmrun.on('close', function(code) {
  process.exit(code);
});
