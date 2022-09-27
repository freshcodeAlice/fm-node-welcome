'use strict';
const _ = require('lodash');
const {sum} = require('./utils');
const div = document.querySelector('#root');
div.append(`Random number: ${_.random(1, 10, false)}`);

console.log(sum(4, 5, 6, 7, 8));