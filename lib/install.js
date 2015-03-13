"use strict";
var fs = require('fs');
var template = fs.readFileSync('./lib/template', 'utf-8');

module.exports = function() {
  if (process.env.npm_package_scripts_pre_commit) {
    try {
      fs.writeFileSync('.git/hooks/pre-commit', template);
    } catch(error) {
      console.error('couldn’t create git hook: ', error);
    }
  }
};
