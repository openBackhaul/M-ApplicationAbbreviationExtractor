'use strict';

var utils = require('../utils/writer.js');
var TcpServer = require('../service/TcpServerService');
var oamLogService = require('onf-core-model-ap/applicationPattern/services/OamLogService');

module.exports.getTcpServerLocalAddress = function getTcpServerLocalAddress (req, res, next, uuid) {
  TcpServer.getTcpServerLocalAddress(uuid)
    .then(function (response) {
      utils.writeJson(res, response);
      oamLogService.recordOamRequest(req.url, req.body, 200, req.headers.authorization, req.method);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
      oamLogService.recordOamRequest(req.url, req.body, 500, req.headers.authorization, req.method);
    });
};

module.exports.getTcpServerLocalPort = function getTcpServerLocalPort (req, res, next, uuid) {
  TcpServer.getTcpServerLocalPort(uuid)
    .then(function (response) {
      utils.writeJson(res, response);
      oamLogService.recordOamRequest(req.url, req.body, 200, req.headers.authorization, req.method);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
      oamLogService.recordOamRequest(req.url, req.body, 500, req.headers.authorization, req.method);
    });
};

module.exports.putTcpServerLocalAddress = function putTcpServerLocalAddress (req, res, next, body, uuid) {
  TcpServer.putTcpServerLocalAddress(body, uuid)
    .then(function (response) {
      utils.writeJson(res, response);
      oamLogService.recordOamRequest(req.url, req.body, 200, req.headers.authorization, req.method);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
      oamLogService.recordOamRequest(req.url, req.body, 500, req.headers.authorization, req.method);
    });
};

module.exports.putTcpServerLocalPort = function putTcpServerLocalPort (req, res, next, body, uuid) {
  TcpServer.putTcpServerLocalPort(body, uuid)
    .then(function (response) {
      utils.writeJson(res, response);
      oamLogService.recordOamRequest(req.url, req.body, 200, req.headers.authorization, req.method);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
      oamLogService.recordOamRequest(req.url, req.body, 500, req.headers.authorization, req.method);
    });
};
