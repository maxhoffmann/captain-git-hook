"use strict";
var fs = require('fs');
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
    fs.writeFileSync('.git/hooks/'+hook, template);
    fs.chmodSync('.git/hooks/'+hook, '755');
  } catch(error) {
    console.error('installing '+hook+' failed: ', error);
  }
}
