/* jshint node: true, strict: true */

"use strict";



/**
  * Sends a 400 status response
  *
  * @param {Object} req HTTP request object
  * @param {Object} res HTTP response object
  */

module.exports.status400 = function (req, res, next) {
    var accepts = req.xhr ? 'json' : req.accepts(['html', 'json', 'text']);
    switch(accepts) {
        case 'json':
            res.status(400).json({status : '400 - Bad request'});
            break;
        case 'text':
            res.status(400).send('400 - Bad request');
            break;
        case 'html':
            res.status(400).send('400 - Bad request');
//            res.status(400).render('status-400');
            break;
        default:
            res.status(406).send('406 - Not Acceptable');
    }
};



/**
  * Sends a 401 status response
  *
  * @param {Object} req HTTP request object
  * @param {Object} res HTTP response object
  */

module.exports.status401 = function (req, res, next) {
    var accepts = req.xhr ? 'json' : req.accepts(['html', 'json', 'text']);
    switch(accepts) {
        case 'json':
            res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
            res.status(401).json({status : '401 - Unauthorized'});
            break;
        case 'text':
            res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
            res.status(401).send('401 - Unauthorized');
            break;
        case 'html':
            res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
            res.status(401).send('401 - Unauthorized');
//            res.status(401).render('status-401');
            break;
        default:
            res.status(406).send('406 - Not Acceptable');
    }
};



/**
  * Sends a 403 status response
  *
  * @param {Object} req HTTP request object
  * @param {Object} res HTTP response object
  */

module.exports.status403 = function (req, res, next) {
    var accepts = req.xhr ? 'json' : req.accepts(['html', 'json', 'text']);
    switch(accepts) {
        case 'json':
            res.status(403).json({message: '403 - Forbidden'});
            break;
        case 'text':
            res.status(403).send('403 - Forbidden');
            break;
        case 'html':
//            res.status(403).render('status-403');
            res.status(403).send('403 - Forbidden');
            break;
        default:
            res.status(406).send('406 - Not Acceptable');
    }
};



/**
  * Sends a 404 status response
  *
  * @param {Object} req HTTP request object
  * @param {Object} res HTTP response object
  */

module.exports.status404 = function (req, res, next) {
    var accepts = req.xhr ? 'json' : req.accepts(['html', 'json', 'text']);
    switch(accepts) {
        case 'json':
            res.status(404).json({message: '404 - Not found'});
            break;
        case 'text':
            res.status(404).send('404 - Not found');
            break;
        case 'html':
            res.status(404).send('404 - Not found');
//            res.status(404).render('status-404');
            break;
        default:
            res.status(406).send('406 - Not Acceptable');
    }
};



/**
  * Sends a 409 status response
  *
  * @param {Object} req HTTP request object
  * @param {Object} res HTTP response object
  */

module.exports.status409 = function (req, res, next) {
    var accepts = req.xhr ? 'json' : req.accepts(['html', 'json', 'text']);
    switch(accepts) {
        case 'json':
            res.status(409).json({message: '409 - Conflict'});
            break;
        case 'text':
            res.status(409).send('409 - Conflict');
            break;
        case 'html':
            res.status(409).send('409 - Conflict');
//            res.status(409).render('status-409');
            break;
        default:
            res.status(406).send('406 "Not Acceptable"');
    }
};



/**
  * Sends a 500 status response
  *
  * @param {Object} req HTTP request object
  * @param {Object} res HTTP response object
  */

module.exports.status500 = function (req, res, next) {
    var accepts = req.xhr ? 'json' : req.accepts(['html', 'json', 'text']);
    switch(accepts) {
        case 'json':
            res.status(500).json({message: '500 - Internal server error'});
            break;
        case 'text':
            res.status(500).send('500 - Internal server error');
            break;
        case 'html':
            res.status(500).send('500 - Internal server error');
//            res.status(500).render('status-500');
            break;
        default:
            res.status(406).send('406 - Not Acceptable');
    }
};



/** 
  * Middleware for sending the correct HTTP resonse base on which
  * Error Object that terminated the route.
  *
  * @param {Error} error A Error Object
  * @param {Object} req HTTP request object
  * @param {Object} res HTTP response object
  * @param {function} next Next function in the route
  */

module.exports.response = function (error, req, res, next) {
    switch (error.type) {
        case 'ValidationError':
        case 'RangeError':
            module.exports.status400(req, res);
            break;
        case 'UnauthorizedError':
            module.exports.status401(req, res);
            break;
        case 'ForbiddenError':
            module.exports.status403(req, res);
            break;
        case 'NotFoundError':
            module.exports.status404(req, res);
            break;
        case 'ConflictError':
            module.exports.status409(req, res);
            break;
        default:
            module.exports.status500(req, res);
    }
};
