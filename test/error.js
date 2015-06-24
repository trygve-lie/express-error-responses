/* jshint node: true, strict: true */

"use strict";

var tap     = require('tap'),
    error   = require('../lib/error.js');



tap.test('error.error() - no parameters provided', function (t) {
    var result = error.error();
    t.type(result, 'Error');
    t.equal(result.type, 'GenericError');
    t.notOk(result.message);  // should be null
	t.end();
});
