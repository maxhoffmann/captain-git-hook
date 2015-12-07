"use strict";

var fs = require('fs');
var path = require('path');
var template = fs.readFileSync(__dirname + '/hook-template.js', 'utf-8');

var projectDir = getProjectDir();
if (process.env.NODE_ENV === 'testing') {
    projectDir = path.join(__dirname, '../test');
}

var hookDir = path.resolve(projectDir, '.git/hooks/');

var hooks = [
    'pre-commit',
    'post-commit',
    'post-merge',
    'pre-push'
];

hooks.forEach(function(hook) {
    installHook(hook);
});

function installHook(hook) {
    try {
        fs.writeFileSync(path.join(hookDir, hook), template, {
            mode: '755'
        });
        console.log('installed ' + path.join(hookDir, hook));
    } catch (error) {
        console.error('installing ' + hook + ' failed: ', error);
    }
}

function getProjectDir() {
    var from = __dirname;
    var to = '..';

    if (!fs.existsSync('.git')) {
        to = '../../..';
    }

    return path.resolve(from, to);
}
