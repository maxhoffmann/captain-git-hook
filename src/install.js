"use strict";

var fs = require('fs');
var path = require('path');

var template = fs.readFileSync(__dirname + '/hook-template.js', 'utf-8');

var hooks = [
    'pre-commit',
    'post-commit',
    'post-merge',
    'pre-push'
];

var projectDir = getProjectDir();

forEachHook(projectDir, hooks, installHook);

function getProjectDir() {
    if (process.env.NODE_ENV === 'testing') {
        return path.join(__dirname, '../test');
    }

    var from = __dirname;
    var to = '..';

    try {
        fs.accessSync(path.resolve(from, path.join(to, '.git')));
    }
    catch(error) {
        to = '../../..';
    }

    return path.resolve(from, to);
}

function forEachHook(projectDir, hooks, action) {
    var gitDir = path.resolve(projectDir, '.git/');

    try {
        fs.accessSync(gitDir);
    }
    catch(error) {
        console.error('No git repo found, or missing permissions', projectDir);
        return;
    }

    hooks.forEach(action.bind(null, gitDir));
}

function installHook(gitDir, hook) {
    var hookDir = path.resolve(gitDir, 'hooks/');

    try {
        fs.writeFileSync(path.join(hookDir, hook), template, {
            mode: '755'
        });
        console.log('installed ' + path.join(hookDir, hook));
    } catch (error) {
        console.error('installing ' + hook + ' failed: ', error);
    }
}
