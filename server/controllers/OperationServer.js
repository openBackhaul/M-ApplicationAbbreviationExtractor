'use strict';

var utils = require('../utils/writer.js');
var OperationServer = require('../service/OperationServerService');
var oamLogService = require('onf-core-model-ap/applicationPattern/services/OamLogService');
var responseBuilder = require('onf-core-model-ap/applicationPattern/rest/server/ResponseBuilder');
var responseCodeEnum = require('onf-core-model-ap/applicationPattern/rest/server/ResponseCode');

module.exports.getOperationServerLifeCycleState = function getOperationServerLifeCycleState (req, res, next, uuid) {
  OperationServer.getOperationServerLifeCycleState(uuid)
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

module.exports.getOperationServerOperationKey = function getOperationServerOperationKey (req, res, next, uuid) {
  OperationServer.getOperationServerOperationKey(uuid)
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

module.exports.getOperationServerOperationName = function getOperationServerOperationName (req, res, next, uuid) {
  OperationServer.getOperationServerOperationName(uuid)
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

module.exports.putOperationServerLifeCycleState = function putOperationServerLifeCycleState (req, res, next, body, uuid) {
  OperationServer.putOperationServerLifeCycleState(body, uuid)
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

module.exports.putOperationServerOperationKey = function putOperationServerOperationKey (req, res, next, body, uuid) {
  OperationServer.putOperationServerOperationKey(body, uuid)
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
