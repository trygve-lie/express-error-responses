/* jshint node: true, strict: true */

"use strict";

var tap     = require('tap'),
    mod   	= require('../');



tap.test('main.errors.error()', function (t) {
    var result = mod.errors.error();
    t.type(result, 'Error');
    t.equal(result.type, 'GenericError');
    t.notOk(result.message);  // should be null
    t.end();
});
