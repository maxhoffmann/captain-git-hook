"use strict";
var fs = require('fs');
var path = require('path');
var template = fs.readFileSync('./hook-template', 'utf-8');

var projectDir = path.resolve(__dirname, '..', '..');
if (process.env.NODE_ENV === 'testing') {
  projectDir = path.join(__dirname, 'test');
}
var hookDir = path.resolve(projectDir, '.git/hooks/');

var hooks = [
  'pre-commit',
  'post-commit',
  'pre-push',
  'post-checkout'
];

module.exports = function() {
  hooks.forEach(function(hook) {
    installHook(hook);
  });
};

function installHook(hook) {
  try {
    fs.writeFileSync(path.join(hookDir, hook), template, { mode: '755' });
  } catch(error) {
    console.error('installing '+hook+' failed: ', error);
  }
}
