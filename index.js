#!/usr/bin/env node
const path = require('path');
const argv = require('yargs').argv;
const startApp = require('./startApp');

const file = argv._[0]
const config = require(path.resolve(file));
const port = argv.port || 3000

startApp(config, port);



