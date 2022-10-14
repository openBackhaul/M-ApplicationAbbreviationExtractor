'use strict';

var utils = require('../utils/writer.js');
var IndividualServices = require('../service/IndividualServicesService');
var executionAndTraceService = require('onf-core-model-ap/applicationPattern/services/ExecutionAndTraceService');

module.exports.bequeathYourDataAndDie = function bequeathYourDataAndDie (req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  IndividualServices.bequeathYourDataAndDie(body, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(function (response) {
      utils.writeJson(res, response);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, 200, req.body, responseBody);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, 500, req.body, responseBody);
    });
};

module.exports.listApplications = function listApplications (req, res, next, user, originator, xCorrelator, traceIndicator, customerJourney) {
  IndividualServices.listApplications(user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(function (response) {
      utils.writeJson(res, response);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, 200, req.body, responseBody);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, 500, req.body, responseBody);
    });
};

module.exports.startApplicationInGenericRepresentation = function startApplicationInGenericRepresentation (req, res, next, user, originator, xCorrelator, traceIndicator, customerJourney) {
  IndividualServices.startApplicationInGenericRepresentation(user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(function (response) {
      utils.writeJson(res, response);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, 200, req.body, responseBody);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, 500, req.body, responseBody);
    });
};
