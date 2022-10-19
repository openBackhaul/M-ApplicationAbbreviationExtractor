'use strict';

var utils = require('../utils/writer.js');
var BasicServices = require('../service/BasicServicesService');
var executionAndTraceService = require('onf-core-model-ap/applicationPattern/services/ExecutionAndTraceService');

module.exports.embedYourself = function embedYourself (req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  BasicServices.embedYourself(body, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(function (response) {
      utils.writeJson(res, response);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, 200, req.body, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, 500, req.body, response);
    });
};

module.exports.endSubscription = function endSubscription (req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  BasicServices.endSubscription(body, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(function (response) {
      utils.writeJson(res, response);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, 200, req.body, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, 500, req.body, response);
    });
};

module.exports.informAboutApplication = function informAboutApplication (req, res, next, user, originator, xCorrelator, traceIndicator, customerJourney) {
  BasicServices.informAboutApplication(user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(function (response) {
      utils.writeJson(res, response);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, 200, req.body, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, 500, req.body, response);
    });
};

module.exports.informAboutApplicationInGenericRepresentation = function informAboutApplicationInGenericRepresentation (req, res, next, user, originator, xCorrelator, traceIndicator, customerJourney) {
  BasicServices.informAboutApplicationInGenericRepresentation(user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(function (response) {
      utils.writeJson(res, response);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, 200, req.body, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, 500, req.body, response);
    });
};

module.exports.informAboutReleaseHistory = function informAboutReleaseHistory (req, res, next, user, originator, xCorrelator, traceIndicator, customerJourney) {
  BasicServices.informAboutReleaseHistory(user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(function (response) {
      utils.writeJson(res, response);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, 200, req.body, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, 500, req.body, response);
    });
};

module.exports.informAboutReleaseHistoryInGenericRepresentation = function informAboutReleaseHistoryInGenericRepresentation (req, res, next, user, originator, xCorrelator, traceIndicator, customerJourney) {
  BasicServices.informAboutReleaseHistoryInGenericRepresentation(user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(function (response) {
      utils.writeJson(res, response);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, 200, req.body, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, 500, req.body, response);
    });
};

module.exports.inquireOamRequestApprovals = function inquireOamRequestApprovals (req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  BasicServices.inquireOamRequestApprovals(body, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(function (response) {
      utils.writeJson(res, response);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, 200, req.body, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, 500, req.body, response);
    });
};

module.exports.listLtpsAndFcs = function listLtpsAndFcs (req, res, next, user, originator, xCorrelator, traceIndicator, customerJourney) {
  BasicServices.listLtpsAndFcs(user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(function (response) {
      utils.writeJson(res, response);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, 200, req.body, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, 500, req.body, response);
    });
};

module.exports.redirectOamRequestInformation = function redirectOamRequestInformation (req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  BasicServices.redirectOamRequestInformation(body, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(function (response) {
      utils.writeJson(res, response);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, 200, req.body, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, 500, req.body, response);
    });
};

module.exports.redirectServiceRequestInformation = function redirectServiceRequestInformation (req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  BasicServices.redirectServiceRequestInformation(body, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(function (response) {
      utils.writeJson(res, response);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, 200, req.body, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, 500, req.body, response);
    });
};

module.exports.redirectTopologyChangeInformation = function redirectTopologyChangeInformation (req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  BasicServices.redirectTopologyChangeInformation(body, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(function (response) {
      utils.writeJson(res, response);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, 200, req.body, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, 500, req.body, response);
    });
};

module.exports.registerYourself = function registerYourself (req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  BasicServices.registerYourself(body, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(function (response) {
      utils.writeJson(res, response);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, 200, req.body, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, 500, req.body, response);
    });
};

module.exports.updateClient = function updateClient (req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  BasicServices.updateClient(body, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(function (response) {
      utils.writeJson(res, response);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, 200, req.body, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, 500, req.body, response);
    });
};

module.exports.updateOperationClient = function updateOperationClient (req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  BasicServices.updateOperationClient(body, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(function (response) {
      utils.writeJson(res, response);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, 200, req.body, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, 500, req.body, response);
    });
};

module.exports.updateOperationKey = function updateOperationKey (req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  BasicServices.updateOperationKey(body, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(function (response) {
      utils.writeJson(res, response);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, 200, req.body, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, 500, req.body, response);
    });
};
