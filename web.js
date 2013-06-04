var server = require("./server/server");
var router = require("./server/router");
var requestHandlers = require("./server/requestHandlers");

var handle = {};
handle["/"] = requestHandlers.home;
handle["/privacy"] = requestHandlers.privacy;
handle["/p3p"] = requestHandlers.p3p;
handle["/xmlcoding"] = requestHandlers.xmlcoding;

server.start(router.route, handle);

