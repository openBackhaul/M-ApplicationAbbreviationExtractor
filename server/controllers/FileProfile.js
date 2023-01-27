'use strict';

var utils = require('../utils/writer.js');
var FileProfile = require('../service/FileProfileService');

module.exports.getFileProfileFileDescription = function getFileProfileFileDescription (req, res, next, uuid) {
  FileProfile.getFileProfileFileDescription(uuid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getFileProfileFileIdentifier = function getFileProfileFileIdentifier (req, res, next, uuid) {
  FileProfile.getFileProfileFileIdentifier(uuid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getFileProfileFilePath = function getFileProfileFilePath (req, res, next, uuid) {
  FileProfile.getFileProfileFilePath(uuid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getFileProfileOperation = function getFileProfileOperation (req, res, next, uuid) {
  FileProfile.getFileProfileOperation(uuid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getFileProfilePassword = function getFileProfilePassword (req, res, next, uuid) {
  FileProfile.getFileProfilePassword(uuid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getFileProfileUserName = function getFileProfileUserName (req, res, next, uuid) {
  FileProfile.getFileProfileUserName(uuid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.putFileProfileFilePath = function putFileProfileFilePath (req, res, next, body, uuid) {
  FileProfile.putFileProfileFilePath(body, uuid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.putFileProfileOperation = function putFileProfileOperation (req, res, next, body, uuid) {
  FileProfile.putFileProfileOperation(body, uuid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.putFileProfilePassword = function putFileProfilePassword (req, res, next, body, uuid) {
  FileProfile.putFileProfilePassword(body, uuid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.putFileProfileUserName = function putFileProfileUserName (req, res, next, body, uuid) {
  FileProfile.putFileProfileUserName(body, uuid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
