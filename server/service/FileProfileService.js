'use strict';


/**
 * Returns the description of the file
 *
 * uuid String 
 * returns inline_response_200_18
 **/
exports.getFileProfileFileDescription = function(uuid) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "file-profile-1-0:file-description" : "Holds administrator-names, user-names, authorization codes and allowed-methods."
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Returns the identifier of the file
 *
 * uuid String 
 * returns inline_response_200_17
 **/
exports.getFileProfileFileIdentifier = function(uuid) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "file-profile-1-0:file-identifier" : "applicationData"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Returns the path of the file
 *
 * uuid String 
 * returns inline_response_200_19
 **/
exports.getFileProfileFilePath = function(uuid) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "file-profile-1-0:file-path" : "../application-data/application-data.json"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Returns the allowed operation on the file
 *
 * uuid String 
 * returns inline_response_200_22
 **/
exports.getFileProfileOperation = function(uuid) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "file-profile-1-0:operation" : "file-profile-1-0:OPERATION_TYPE_READ_ONLY"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Returns the password for acccessing the file
 *
 * uuid String 
 * returns inline_response_200_21
 **/
exports.getFileProfilePassword = function(uuid) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "file-profile-1-0:password" : "stupid_phrase"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Returns the user name for acccessing the file
 *
 * uuid String 
 * returns inline_response_200_20
 **/
exports.getFileProfileUserName = function(uuid) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "file-profile-1-0:user-name" : "firstname.surname"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Configures path of the file
 *
 * body Fileprofileconfiguration_filepath_body 
 * uuid String 
 * no response value expected for this operation
 **/
exports.putFileProfileFilePath = function(body,uuid) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Configures the allowed operation on the file
 *
 * body Fileprofileconfiguration_operation_body 
 * uuid String 
 * no response value expected for this operation
 **/
exports.putFileProfileOperation = function(body,uuid) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Configures the password for acccessing the file
 *
 * body Fileprofileconfiguration_password_body 
 * uuid String 
 * no response value expected for this operation
 **/
exports.putFileProfilePassword = function(body,uuid) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Configures the user name for acccessing the file
 *
 * body Fileprofileconfiguration_username_body 
 * uuid String 
 * no response value expected for this operation
 **/
exports.putFileProfileUserName = function(body,uuid) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

