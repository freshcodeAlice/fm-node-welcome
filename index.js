'use strict';
const {MyMath} = require('./MyMath');
const sum = MyMath.sum(2,2);

/*
require(path);

HOW REQUIRE WORKS:

resolving -> loading -> wrappening -> evaluation -> caching

RESOLVING:
    1) Core modules
    2) File 
        *.js | *.json
    3) Directory
        3.1) package.json -> "main"
        3.2) index.js | index.json
    4) node_modules
    5) throw new Error();
*/