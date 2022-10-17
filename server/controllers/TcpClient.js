'use strict';

var utils = require('../utils/writer.js');
var TcpClient = require('../service/TcpClientService');
var oamLogService = require('onf-core-model-ap/applicationPattern/services/OamLogService');

module.exports.getTcpClientRemoteAddress = function getTcpClientRemoteAddress (req, res, next, uuid) {
  TcpClient.getTcpClientRemoteAddress(uuid)
    .then(function (response) {
      utils.writeJson(res, response);
      oamLogService.recordOamRequest(req.url, req.body, 200, req.headers.authorization, req.method);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
      oamLogService.recordOamRequest(req.url, req.body, 500, req.headers.authorization, req.method);
    });
};

module.exports.getTcpClientRemotePort = function getTcpClientRemotePort (req, res, next, uuid) {
  TcpClient.getTcpClientRemotePort(uuid)
    .then(function (response) {
      utils.writeJson(res, response);
      oamLogService.recordOamRequest(req.url, req.body, 200, req.headers.authorization, req.method);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
      oamLogService.recordOamRequest(req.url, req.body, 500, req.headers.authorization, req.method);
    });
};

module.exports.putTcpClientRemoteAddress = function putTcpClientRemoteAddress (req, res, next, body, uuid) {
  TcpClient.putTcpClientRemoteAddress(body, uuid)
    .then(function (response) {
      utils.writeJson(res, response);
      oamLogService.recordOamRequest(req.url, req.body, 200, req.headers.authorization, req.method);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
      oamLogService.recordOamRequest(req.url, req.body, 500, req.headers.authorization, req.method);
    });
};

module.exports.putTcpClientRemotePort = function putTcpClientRemotePort (req, res, next, body, uuid) {
  TcpClient.putTcpClientRemotePort(body, uuid)
    .then(function (response) {
      utils.writeJson(res, response);
      oamLogService.recordOamRequest(req.url, req.body, 200, req.headers.authorization, req.method);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
      oamLogService.recordOamRequest(req.url, req.body, 500, req.headers.authorization, req.method);
    });
};
