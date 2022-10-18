'use strict';

var utils = require('../utils/writer.js');
var OperationClient = require('../service/OperationClientService');
var oamLogService = require('onf-core-model-ap/applicationPattern/services/OamLogService');
var responseBuilder = require('onf-core-model-ap/applicationPattern/rest/server/ResponseBuilder');
var responseCodeEnum = require('onf-core-model-ap/applicationPattern/rest/server/ResponseCode');

module.exports.getOperationClientDetailedLoggingIsOn = function getOperationClientDetailedLoggingIsOn (req, res, next, uuid) {
  OperationClient.getOperationClientDetailedLoggingIsOn(uuid)
    .then(function (response) {
      let responseCode = responseCodeEnum.code.OK;
      responseBuilder.buildResponse(res, responseCode, response);
      oamLogService.recordOamRequest(req.url, req.body, responseCode, req.headers.authorization, req.method);
    })
    .catch(function (response) {
      let responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
      responseBuilder.buildResponse(res, responseCode, response);
      oamLogService.recordOamRequest(req.url, req.body, responseCode, req.headers.authorization, req.method);
    });
};

module.exports.getOperationClientLifeCycleState = function getOperationClientLifeCycleState (req, res, next, uuid) {
  OperationClient.getOperationClientLifeCycleState(uuid)
    .then(function (response) {
      let responseCode = responseCodeEnum.code.OK;
      responseBuilder.buildResponse(res, responseCode, response);
      oamLogService.recordOamRequest(req.url, req.body, responseCode, req.headers.authorization, req.method);
    })
    .catch(function (response) {
      let responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
      responseBuilder.buildResponse(res, responseCode, response);
      oamLogService.recordOamRequest(req.url, req.body, responseCode, req.headers.authorization, req.method);
    });
};

module.exports.getOperationClientOperationKey = function getOperationClientOperationKey (req, res, next, uuid) {
  OperationClient.getOperationClientOperationKey(uuid)
    .then(function (response) {
      let responseCode = responseCodeEnum.code.OK;
      responseBuilder.buildResponse(res, responseCode, response);
      oamLogService.recordOamRequest(req.url, req.body, responseCode, req.headers.authorization, req.method);
    })
    .catch(function (response) {
      let responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
      responseBuilder.buildResponse(res, responseCode, response);
      oamLogService.recordOamRequest(req.url, req.body, responseCode, req.headers.authorization, req.method);
    });
};

module.exports.getOperationClientOperationName = function getOperationClientOperationName (req, res, next, uuid) {
  OperationClient.getOperationClientOperationName(uuid)
    .then(function (response) {
      let responseCode = responseCodeEnum.code.OK;
      responseBuilder.buildResponse(res, responseCode, response);
      oamLogService.recordOamRequest(req.url, req.body, responseCode, req.headers.authorization, req.method);
    })
    .catch(function (response) {
      let responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
      responseBuilder.buildResponse(res, responseCode, response);
      oamLogService.recordOamRequest(req.url, req.body, responseCode, req.headers.authorization, req.method);
    });
};

module.exports.getOperationClientOperationalState = function getOperationClientOperationalState (req, res, next, uuid) {
  OperationClient.getOperationClientOperationalState(uuid)
    .then(function (response) {
      let responseCode = responseCodeEnum.code.OK;
      responseBuilder.buildResponse(res, responseCode, response);
      oamLogService.recordOamRequest(req.url, req.body, responseCode, req.headers.authorization, req.method);
    })
    .catch(function (response) {
      let responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
      responseBuilder.buildResponse(res, responseCode, response);
      oamLogService.recordOamRequest(req.url, req.body, responseCode, req.headers.authorization, req.method);
    });
};

module.exports.putOperationClientDetailedLoggingIsOn = function putOperationClientDetailedLoggingIsOn (req, res, next, body, uuid) {
  OperationClient.putOperationClientDetailedLoggingIsOn(body, uuid)
    .then(function (response) {
      let responseCode = responseCodeEnum.code.OK;
      responseBuilder.buildResponse(res, responseCode, response);
      oamLogService.recordOamRequest(req.url, req.body, responseCode, req.headers.authorization, req.method);
    })
    .catch(function (response) {
      let responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
      responseBuilder.buildResponse(res, responseCode, response);
      oamLogService.recordOamRequest(req.url, req.body, responseCode, req.headers.authorization, req.method);
    });
};

module.exports.putOperationClientOperationKey = function putOperationClientOperationKey (req, res, next, body, uuid) {
  OperationClient.putOperationClientOperationKey(body, uuid)
    .then(function (response) {
      let responseCode = responseCodeEnum.code.OK;
      responseBuilder.buildResponse(res, responseCode, response);
      oamLogService.recordOamRequest(req.url, req.body, responseCode, req.headers.authorization, req.method);
    })
    .catch(function (response) {
      let responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
      responseBuilder.buildResponse(res, responseCode, response);
      oamLogService.recordOamRequest(req.url, req.body, responseCode, req.headers.authorization, req.method);
    });
};

module.exports.putOperationClientOperationName = function putOperationClientOperationName (req, res, next, body, uuid) {
  OperationClient.putOperationClientOperationName(body, uuid)
    .then(function (response) {
      let responseCode = responseCodeEnum.code.OK;
      responseBuilder.buildResponse(res, responseCode, response);
      oamLogService.recordOamRequest(req.url, req.body, responseCode, req.headers.authorization, req.method);
    })
    .catch(function (response) {
      let responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
      responseBuilder.buildResponse(res, responseCode, response);
      oamLogService.recordOamRequest(req.url, req.body, responseCode, req.headers.authorization, req.method);
    });
};
