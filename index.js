"use strict";
var fs = require('fs');
var path = require('path');
var template = fs.readFileSync('./hook-template', 'utf-8');

module.exports = function() {
  installHook('pre-commit');
  installHook('post-commit');
  installHook('pre-push');
  installHook('post-checkout');
  installHook('pre-receive');
  installHook('post-receive');
};

function installHook(hook) {
  try {
    fs.writeFileSync(path.resolve(process.cwd(), '.git/hooks/'+hook), template);
    fs.chmodSync(path.resolve(process.cwd(), '.git/hooks/'+hook), '755');
  } catch(error) {
    console.error('installing '+hook+' failed: ', error);
  }
}
