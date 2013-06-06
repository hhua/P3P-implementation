function home(response) {
  console.log("Request handler 'home' was called.");

  //response.sendfile(__dirname + '/html/test.html');
 
  response.set('P3P', 'CP="CAO DSP COR LAW CURa ADMa DEVo OUR SAMo IND COM NAV INT TST"');
  response.sendfile('./html/index.html');

}

function privacy(response) {
  console.log("Request handler 'privacy' was called.");

  //response.sendfile(__dirname + '/html/test.html');
 
  response.set('P3P', 'CP="CAO DSP COR LAW CURa ADMa DEVo OUR SAMo IND COM NAV INT TST"');
  response.sendfile('./html/privacy.html');

}

function p3p(response) {
  console.log("Request handler 'p3p' was called.");

  //response.sendfile(__dirname + '/html/test.html');
  response.set('P3P', 'CP="CAO DSP COR LAW CURa ADMa DEVo OUR SAMo IND COM NAV INT TST"');
  response.sendfile('./w3c/p3p.xml');

}

function xmlcoding(response) {
  console.log("Request handler 'xmlcoding' was called.");

  //response.sendfile(__dirname + '/html/test.html');
  response.set('P3P', 'CP="CAO DSP COR LAW CURa ADMa DEVo OUR SAMo IND COM NAV INT TST"');
  response.sendfile('./w3c/xmlcoding.xml');

}

exports.home = home;
exports.privacy = privacy;
exports.p3p = p3p;
exports.xmlcoding = xmlcoding;
