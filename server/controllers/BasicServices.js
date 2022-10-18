'use strict';

var utils = require('../utils/writer.js');
var executionAndTraceService = require('onf-core-model-ap/applicationPattern/services/ExecutionAndTraceService');

var BasicServices = require('onf-core-model-ap-bs/basicServices/BasicServicesService');
var responseBuilder = require('onf-core-model-ap/applicationPattern/rest/server/ResponseBuilder');
var responseCodeEnum = require('onf-core-model-ap/applicationPattern/rest/server/ResponseCode');
var restResponseHeader = require('onf-core-model-ap/applicationPattern/rest/server/ResponseHeader');

module.exports.embedYourself = function embedYourself (req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  let startTime = process.hrtime();

  BasicServices.embedYourself(body, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(async function (response) {
      let responseCode = responseCodeEnum.code.NO_CONTENT;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      responseBuilder.buildResponse(res, responseCode, response, responseHeader);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, response);
    })
    .catch(async function (response) {
      let responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      responseBuilder.buildResponse(res, responseCode, response, responseHeader);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, response);
    });
};

module.exports.endSubscription = function endSubscription (req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  let startTime = process.hrtime();

  BasicServices.endSubscription(body, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(async function (response) {
        let responseCode = responseCodeEnum.code.NO_CONTENT;
        let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
        responseBuilder.buildResponse(res, responseCode, response, responseHeader);
        executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, response);
    })
    .catch(async function (response) {
        let responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
        let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
        responseBuilder.buildResponse(res, responseCode, response, responseHeader);
        executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, response);
    });
};

module.exports.informAboutApplication = function informAboutApplication (req, res, next, user, originator, xCorrelator, traceIndicator, customerJourney) {
  let startTime = process.hrtime();

  BasicServices.informAboutApplication(body, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(async function (response) {
        let responseCode = responseCodeEnum.code.OK;
        let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
        responseBuilder.buildResponse(res, responseCode, response, responseHeader);
        executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, response);
    })
    .catch(async function (response) {
        let responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
        let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
        responseBuilder.buildResponse(res, responseCode, response, responseHeader);
        executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, response);
    });
};

module.exports.informAboutApplicationInGenericRepresentation = function informAboutApplicationInGenericRepresentation (req, res, next, user, originator, xCorrelator, traceIndicator, customerJourney) {
  let startTime = process.hrtime();

  BasicServices.informAboutApplicationInGenericRepresentation(body, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(async function (response) {
        let responseCode = responseCodeEnum.code.OK;
        let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
        responseBuilder.buildResponse(res, responseCode, response, responseHeader);
        executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, response);
    })
    .catch(async function (response) {
        let responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
        let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
        responseBuilder.buildResponse(res, responseCode, response, responseHeader);
        executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, response);
    });
};

module.exports.informAboutReleaseHistory = function informAboutReleaseHistory (req, res, next, user, originator, xCorrelator, traceIndicator, customerJourney) {
  let startTime = process.hrtime();

  BasicServices.informAboutReleaseHistory(body, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(async function (response) {
        let responseCode = responseCodeEnum.code.OK;
        let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
        responseBuilder.buildResponse(res, responseCode, response, responseHeader);
        executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, response);
    })
    .catch(async function (response) {
        let responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
        let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
        responseBuilder.buildResponse(res, responseCode, response, responseHeader);
        executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, response);
    });
};

module.exports.informAboutReleaseHistoryInGenericRepresentation = function informAboutReleaseHistoryInGenericRepresentation (req, res, next, user, originator, xCorrelator, traceIndicator, customerJourney) {
  let startTime = process.hrtime();

  BasicServices.informAboutReleaseHistoryInGenericRepresentation(body, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(async function (response) {
        let responseCode = responseCodeEnum.code.OK;
        let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
        responseBuilder.buildResponse(res, responseCode, response, responseHeader);
        executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, response);
    })
    .catch(async function (response) {
        let responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
        let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
        responseBuilder.buildResponse(res, responseCode, response, responseHeader);
        executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, response);
    });
};

module.exports.inquireOamRequestApprovals = function inquireOamRequestApprovals (req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  let startTime = process.hrtime();

  BasicServices.inquireOamRequestApprovals(body, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(async function (response) {
        let responseCode = responseCodeEnum.code.NO_CONTENT;
        let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
        responseBuilder.buildResponse(res, responseCode, response, responseHeader);
        executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, response);
    })
    .catch(async function (response) {
        let responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
        let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
        responseBuilder.buildResponse(res, responseCode, response, responseHeader);
        executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, response);
    });
};

module.exports.listLtpsAndFcs = function listLtpsAndFcs (req, res, next, user, originator, xCorrelator, traceIndicator, customerJourney) {
  let startTime = process.hrtime();

  BasicServices.listLtpsAndFcs(body, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(async function (response) {
        let responseCode = responseCodeEnum.code.OK;
        let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
        responseBuilder.buildResponse(res, responseCode, response, responseHeader);
        executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, response);
    })
    .catch(async function (response) {
        let responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
        let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
        responseBuilder.buildResponse(res, responseCode, response, responseHeader);
        executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, response);
    });
};

module.exports.redirectOamRequestInformation = function redirectOamRequestInformation (req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  let startTime = process.hrtime();

  BasicServices.redirectOamRequestInformation(body, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(async function (response) {
        let responseCode = responseCodeEnum.code.NO_CONTENT;
        let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
        responseBuilder.buildResponse(res, responseCode, response, responseHeader);
        executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, response);
    })
    .catch(async function (response) {
        let responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
        let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
        responseBuilder.buildResponse(res, responseCode, response, responseHeader);
        executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, response);
    });
};

module.exports.redirectServiceRequestInformation = function redirectServiceRequestInformation (req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  let startTime = process.hrtime();

  BasicServices.redirectServiceRequestInformation(body, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(async function (response) {
        let responseCode = responseCodeEnum.code.NO_CONTENT;
        let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
        responseBuilder.buildResponse(res, responseCode, response, responseHeader);
        executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, response);
    })
    .catch(async function (response) {
        let responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
        let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
        responseBuilder.buildResponse(res, responseCode, response, responseHeader);
        executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, response);
    });
};

module.exports.redirectTopologyChangeInformation = function redirectTopologyChangeInformation (req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  let startTime = process.hrtime();

  BasicServices.redirectTopologyChangeInformation(body, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(async function (response) {
        let responseCode = responseCodeEnum.code.NO_CONTENT;
        let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
        responseBuilder.buildResponse(res, responseCode, response, responseHeader);
        executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, response);
    })
    .catch(async function (response) {
        let responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
        let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
        responseBuilder.buildResponse(res, responseCode, response, responseHeader);
        executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, response);
    });
};

module.exports.registerYourself = function registerYourself (req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  let startTime = process.hrtime();

  BasicServices.registerYourself(body, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(async function (response) {
        let responseCode = responseCodeEnum.code.NO_CONTENT;
        let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
        responseBuilder.buildResponse(res, responseCode, response, responseHeader);
        executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, response);
    })
    .catch(async function (response) {
        let responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
        let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
        responseBuilder.buildResponse(res, responseCode, response, responseHeader);
        executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, response);
    });
};

module.exports.updateClient = function updateClient (req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  let startTime = process.hrtime();

  BasicServices.updateClient(body, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(async function (response) {
        let responseCode = responseCodeEnum.code.NO_CONTENT;
        let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
        responseBuilder.buildResponse(res, responseCode, response, responseHeader);
        executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, response);
    })
    .catch(async function (response) {
        let responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
        let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
        responseBuilder.buildResponse(res, responseCode, response, responseHeader);
        executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, response);
    });
};

module.exports.updateOperationClient = function updateOperationClient (req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  let startTime = process.hrtime();

  BasicServices.updateOperationClient(body, user, originator, xCorrelator, traceIndicator, customerJourney)
        .then(async function (response) {
            let responseCode = responseCodeEnum.code.NO_CONTENT;
            let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
            responseBuilder.buildResponse(res, responseCode, response, responseHeader);
            executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, response);
        })
        .catch(async function (response) {
            let responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
            let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
            responseBuilder.buildResponse(res, responseCode, response, responseHeader);
            executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, response);
        });
};

module.exports.updateOperationKey = function updateOperationKey (req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  let startTime = process.hrtime();

  BasicServices.updateOperationKey(body, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(async function (response) {
        let responseCode = responseCodeEnum.code.NO_CONTENT;
        let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
        responseBuilder.buildResponse(res, responseCode, response, responseHeader);
        executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, response);
    })
    .catch(async function (response) {
        let responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
        let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
        responseBuilder.buildResponse(res, responseCode, response, responseHeader);
        executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, response);
    });
};
