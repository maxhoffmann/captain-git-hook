"use strict";
var fs = require('fs');
var template = fs.readFileSync('./hook-template', 'utf-8');

module.exports = function() {
  if (process.env.npm_package_scripts_pre_commit) {
    installHook('pre-commit');
  }
  if (process.env.npm_package_scripts_post_commit) {
    installHook('post-commit');
  }
  if (process.env.npm_package_scripts_pre_push) {
    installHook('pre-push');
  }
  if (process.env.npm_package_scripts_post_checkout) {
    installHook('post-checkout');
  }
  if (process.env.npm_package_scripts_pre_receive) {
    installHook('pre-receive');
  }
  if (process.env.npm_package_scripts_post_receive) {
    installHook('post-receive');
  }
};

function installHook(hook) {
  try {
    fs.writeFileSync('.git/hooks/'+hook, template);
    fs.chmodSync('.git/hooks/'+hook, '755');
  } catch(error) {
    console.error('installing '+hook+' failed: ', error);
  }
}
