function home(response) {
  console.log("Request handler 'home' was called.");

  //response.sendfile(__dirname + '/html/test.html');
  response.sendfile('./html/index.html');

}

function p3p(response) {
  console.log("Request handler 'p3p' was called.");

  //response.sendfile(__dirname + '/html/test.html');
  response.sendfile('./w3c/p3p.xml');

}

function xmlcoding(response) {
  console.log("Request handler 'xmlcoding' was called.");

  //response.sendfile(__dirname + '/html/test.html');
  response.sendfile('./w3c/xmlcoding.xml');

}

exports.home = home;
exports.p3p = p3p;
exports.xmlcoding = xmlcoding;
