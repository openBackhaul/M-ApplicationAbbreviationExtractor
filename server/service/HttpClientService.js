'use strict';

var fileOperation = require('onf-core-model-ap/applicationPattern/databaseDriver/JSONDriver');


/**
 * Returns name of application to be addressed
 *
 * uuid String 
 * returns inline_response_200_25
 **/
exports.getHttpClientApplicationName = function(uuid, requestUrl) {
  return new Promise(async function (resolve, reject) {
    try {
      var value = await fileOperation.readFromDatabaseAsync(requestUrl);
      var response = {};
      response['application/json'] = {
        "http-client-interface-1-0:application-name": value
      };
      if (Object.keys(response).length > 0) {
        resolve(response[Object.keys(response)[0]]);
      } else {
        resolve();
      }
    } catch (error) {}
    reject();
  });
}


/**
 * Returns release number of application to be addressed
 *
 * uuid String 
 * returns inline_response_200_26
 **/
exports.getHttpClientReleaseNumber = function(uuid, requestUrl) {
  return new Promise(async function (resolve, reject) {
    try {
      var value = await fileOperation.readFromDatabaseAsync(requestUrl);
      var response = {};
      response['application/json'] = {
        "http-client-interface-1-0:release-number": value
      };
      if (Object.keys(response).length > 0) {
        resolve(response[Object.keys(response)[0]]);
      } else {
        resolve();
      }
    } catch (error) {}
    reject();
  });
}


/**
 * Configures release number of application to be addressed
 *
 * body Httpclientinterfaceconfiguration_releasenumber_body 
 * uuid String 
 * no response value expected for this operation
 **/
exports.putHttpClientReleaseNumber = function(body, uuid, requestUrl) {
  return new Promise(async function (resolve, reject) {
    try {
      await fileOperation.writeToDatabaseAsync(requestUrl, body, false);
      resolve();
    } catch (error) {}
    reject();
  });
}
