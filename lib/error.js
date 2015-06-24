/* jshint node: true, strict: true */

"use strict";

var util = require('core-util-is');



/**
  * Error Object for generic or unclasified errors
  *
  * @param {Error} error An pre-existing Error Object to extend
  * @param {String} message A message to append to the Error Object
  * @param {String} type Which type of Error Object this should be
  */

module.exports.error = function (error, message, type) {
    if (!util.isError(error)) {
        error = new Error();
    }

    if (util.isString(message)) {
        error.message = message;
    }

    error.type = type ? type : 'GenericError';

    return error;
};



/**
  * Error Object for when a validation of a value fails
  *
  * @param {Error} error An pre-existing Error Object to extend
  * @param {String} message A message to append to the Error Object
  */

module.exports.validationError = function (error, message) {
    return this.error(error, message, 'ValidationError');
};



/**
  * Error Object for when something is not found
  *
  * @param {Error} error An pre-existing Error Object to extend
  * @param {String} message A message to append to the Error Object
  */

module.exports.notFoundError = function (error, message) {
    return this.error(error, message, 'NotFoundError');
};



/**
  * Error Object for when something is not authorized
  *
  * @param {Error} error An pre-existing Error Object to extend
  * @param {String} message A message to append to the Error Object
  */

module.exports.unauthorizedError = function (error, message) {
    return this.error(error, message, 'UnauthorizedError');
};



/**
  * Error Object for range errors
  *
  * @param {Error} error An pre-existing Error Object to extend
  * @param {String} message A message to append to the Error Object
  */

module.exports.rangeError = function (error, message) {
    error = error ? error : new RangeError();
    return this.error(error, message, 'RangeError');
};



/**
  * Error Object for when there is a conflict / duplicate
  *
  * @param {Error} error An pre-existing Error Object to extend
  * @param {String} message A message to append to the Error Object
  */

module.exports.conflictError = function (error, message) {
    error = error ? error : new RangeError();
    return this.error(error, message, 'ConflictError');
};
