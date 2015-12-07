#!/usr/bin/env node

"use strict";
var path = require('path');
var npm = require('npm');

var hookName = path.basename(__filename);
var config = require(path.resolve(process.cwd(), 'package'));

if (!config.scripts[hookName]) {
    process.exit(0);
}

var npmConfig = {
    loglevel: 'silent',
    progress: false
};

npm.load(npmConfig, function() {
    npm.run(hookName, function(error) {
        if (error) {
            process.exit(1);
        }

        console.log('\nHook pass with success !!\n');
        process.exit(0);
    });
});
