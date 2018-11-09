#!/usr/bin/env node
var assert = require('assert');
var path = require('path');
var sassTrue = require('sass-true');


var sassFile = path.join(__dirname, '_test.scss');
sassTrue.runSass({file: sassFile}, describe, it);