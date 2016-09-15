'use strict';

const Cube = require('.');

let cube = new Cube([{a: 1, b: {aa: 1, bb: 'first'}}, {a: 2, b: {aa: 2, bb: 'second'}}]);

console.log(cube.accumulate('b').accumulate('bb').get());