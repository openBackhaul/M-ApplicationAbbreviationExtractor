'use strict';

var path = require('path');
var http = require('http');
var appCommons = require('onf-core-model-ap/applicationPattern/commons/AppCommons');

var oas3Tools = require('oas3-tools');
var serverPort = 8080;

// swaggerRouter configuration
var options = {
    routing: {
        controllers: path.join(__dirname, './controllers'),
        useStubs: false
    }, swaggerUI: {
        swaggerUIPath: '/docs',//null,
        tryItOutEnabled: true
    },
    openApiValidator: appCommons.openApiValidatorOptions
};

var expressAppConfig = oas3Tools.expressAppConfig(path.join(__dirname, 'api/openapi.yaml'), options);
var app = expressAppConfig.getApp();

appCommons.setupExpressApp(app);

// Initialize the Swagger middleware
http.createServer(app).listen(serverPort, function () {
    console.log('Your server is listening on port %d (http://localhost:%d)', serverPort, serverPort);
    console.log('Swagger-ui is available on http://localhost:%d/docs', serverPort);
});

global.databasePath = './database/load.json'
