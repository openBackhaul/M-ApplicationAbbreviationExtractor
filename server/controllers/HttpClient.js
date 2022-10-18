'use strict';

var utils = require('../utils/writer.js');
var HttpClient = require('../service/HttpClientService');
var oamLogService = require('onf-core-model-ap/applicationPattern/services/OamLogService');
var responseBuilder = require('onf-core-model-ap/applicationPattern/rest/server/ResponseBuilder');
var responseCodeEnum = require('onf-core-model-ap/applicationPattern/rest/server/ResponseCode');
var fileOperation = require('onf-core-model-ap/applicationPattern/databaseDriver/JSONDriver');

module.exports.getHttpClientApplicationName = function getHttpClientApplicationName (req, res, next, uuid) {
  HttpClient.getHttpClientApplicationName(uuid, req.url)
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

module.exports.getHttpClientReleaseNumber = function getHttpClientReleaseNumber (req, res, next, uuid) {
  HttpClient.getHttpClientReleaseNumber(uuid, req.url)
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

module.exports.putHttpClientReleaseNumber = function putHttpClientReleaseNumber (req, res, next, body, uuid) {
  HttpClient.putHttpClientReleaseNumber(body, uuid, req.url)
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
