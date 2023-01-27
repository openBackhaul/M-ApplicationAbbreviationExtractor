'use strict';

var utils = require('../utils/writer.js');
var Core = require('../service/CoreService');
var oamLogService = require('onf-core-model-ap/applicationPattern/services/OamLogService');

module.exports.getControlConstruct = function getControlConstruct (req, res, next) {
  Core.getControlConstruct()
    .then(function (response) {
      utils.writeJson(res, response);
      oamLogService.recordOamRequest(req.url, req.body, responseCode, req.headers.authorization, req.method);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
      oamLogService.recordOamRequest(req.url, req.body, responseCode, req.headers.authorization, req.method);
    });
};

module.exports.getProfileInstance = function getProfileInstance (req, res, next, uuid) {
  Core.getProfileInstance(uuid)
    .then(function (response) {
      utils.writeJson(res, response);
      oamLogService.recordOamRequest(req.url, req.body, responseCode, req.headers.authorization, req.method);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
      oamLogService.recordOamRequest(req.url, req.body, responseCode, req.headers.authorization, req.method);
    });
};
