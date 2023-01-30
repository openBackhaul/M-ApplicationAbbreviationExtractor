'use strict';

const onfAttributeFormatter = require("onf-core-model-ap/applicationPattern/onfModel/utility/OnfAttributeFormatter");
const controlConstruct = require("onf-core-model-ap/applicationPattern/onfModel/models/ControlConstruct");
const layerProtocol = require("onf-core-model-ap/applicationPattern/onfModel/models/LayerProtocol");
const onfAttributes = require("onf-core-model-ap/applicationPattern/onfModel/constants/OnfAttributes");

/**
 * Initiates process of embedding a new release
 *
 * body V1_bequeathyourdataanddie_body 
 * user String User identifier from the system starting the service call
 * originator String 'Identification for the system consuming the API, as defined in  [/core-model-1-4:control-construct/logical-termination-point={uuid}/layer-protocol=0/http-client-interface-1-0:http-client-interface-pac/http-client-interface-configuration/application-name]' 
 * xCorrelator String UUID for the service execution flow that allows to correlate requests and responses
 * traceIndicator String Sequence of request numbers along the flow
 * customerJourney String Holds information supporting customer’s journey to which the execution applies
 * no response value expected for this operation
 **/
exports.bequeathYourDataAndDie = function(body,user,originator,xCorrelator,traceIndicator,customerJourney) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Provides list of applications abbreviation that are available in the current application
 *
 * user String User identifier from the system starting the service call
 * originator String 'Identification for the system consuming the API, as defined in  [/core-model-1-4:control-construct/logical-termination-point={uuid}/layer-protocol=0/http-client-interface-1-0:http-client-interface-pac/http-client-interface-configuration/application-name]' 
 * xCorrelator String UUID for the service execution flow that allows to correlate requests and responses
 * traceIndicator String Sequence of request numbers along the flow
 * customerJourney String Holds information supporting customer’s journey to which the execution applies
 * returns List
 **/
exports.listApplications = function(user, originator, xCorrelator, traceIndicator, customerJourney, requesturl) {

  return new Promise(async function(resolve, reject) {
    let response = {};
    try {
      /****************************************************************************************
       * Query configured HTTP clients
       ****************************************************************************************/
      // query HTTP clients
      let applicationList = await getHttpClientList();

      /****************************************************************************************
       * Set 'application/json' response body
       ****************************************************************************************/
      response['application/json'] = onfAttributeFormatter.modifyJsonObjectKeysToKebabCase(applicationList);
    } catch (error) {
      console.log(error);
    }

    if (Object.keys(response).length > 0) {
      resolve(response[Object.keys(response)[0]]);
    } else {
      resolve();
    }
  });
}


/****************************************************************************************
 * Functions utilized by individual services
 ****************************************************************************************/

/**
 * @description This function returns the list of HTTP Clients.
 * @return {Promise} return the list of HTTP Clients
 **/
function getHttpClientList() {
  return new Promise(async function (resolve, reject) {
    let httpClientList = [];

    try {
      // This class instantiate objects that holds the application name and abbreviation.
      let clientApplicationInformation = class ClientApplicationInformation {
        applicationName;
        applicationNameAbbreviation;

       /**
        * @constructor
        * @param {String} applicationName name of the client application.
        * @param {String} applicationNameAbbreviation release number of the application.
        */
      constructor(applicationName, applicationNameAbbreviation) {
        this.applicationName = applicationName;
        this.applicationNameAbbreviation = applicationNameAbbreviation;
      }
    };

    let logicalTerminationPointList = await controlConstruct.getLogicalTerminationPointListAsync(
                                                layerProtocol.layerProtocolNameEnum.HTTP_CLIENT);
    if (logicalTerminationPointList != undefined) {
      for(let logicalTerminationPoint of logicalTerminationPointList) {
        let layerProtocol = logicalTerminationPoint[onfAttributes.LOGICAL_TERMINATION_POINT.LAYER_PROTOCOL][0];
        let httpClientPac = layerProtocol[onfAttributes.LAYER_PROTOCOL.HTTP_CLIENT_INTERFACE_PAC];

        if (httpClientPac != undefined) {
          let httpClientCapability = httpClientPac[onfAttributes.HTTP_CLIENT.CONFIGURATION];
          let applicationName = httpClientCapability[onfAttributes.HTTP_CLIENT.APPLICATION_NAME];

          if (applicationName != undefined) {
            let applicationNameAbbreviation = getUpperLetters(applicationName);
            let clientApplication = new clientApplicationInformation(applicationName, applicationNameAbbreviation);
            httpClientList.push(clientApplication);
          }
        }
      }
    }

    resolve(httpClientList);
  } catch (error) {
    reject(error);
  }
 });
}

function getUpperLetters(name) {
  let tmp = "";

  for(var c of name) {
    if (c == c.toUpperCase())
      tmp += c;
  }

  return tmp;
}
