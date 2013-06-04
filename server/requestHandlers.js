function home(response) {
  console.log("Request handler 'home' was called.");

  //response.sendfile(__dirname + '/html/test.html');
 
  response.set('P3P', 'CP="CAO DSP COR LAW CURa ADMa DEVa PSAo PSDo IVAi IVDi CONo TELo OUR SAMo BUS IND PHY ONL UNI FIN COM NAV INT DEM CNT PRE GOV LOC TST"');
  response.sendfile('./html/index.html');

}

function privacy(response) {
  console.log("Request handler 'privacy' was called.");

  //response.sendfile(__dirname + '/html/test.html');
 
  response.set('P3P', 'CP="CAO DSP COR LAW CURa ADMa DEVa PSAo PSDo IVAi IVDi CONo TELo OUR SAMo BUS IND PHY ONL UNI FIN COM NAV INT DEM CNT PRE GOV LOC TST"');
  response.sendfile('./html/privacy.html');

}

function p3p(response) {
  console.log("Request handler 'p3p' was called.");

  //response.sendfile(__dirname + '/html/test.html');
  response.set('P3P', 'CP="CAO DSP COR LAW CURa ADMa DEVa PSAo PSDo IVAi IVDi CONo TELo OUR SAMo BUS IND PHY ONL UNI FIN COM NAV INT DEM CNT PRE GOV LOC TST"');
  response.sendfile('./w3c/p3p.xml');

}

function xmlcoding(response) {
  console.log("Request handler 'xmlcoding' was called.");

  //response.sendfile(__dirname + '/html/test.html');
  response.set('P3P', 'CP="CAO DSP COR LAW CURa ADMa DEVa PSAo PSDo IVAi IVDi CONo TELo OUR SAMo BUS IND PHY ONL UNI FIN COM NAV INT DEM CNT PRE GOV LOC TST"');
  response.sendfile('./w3c/xmlcoding.xml');

}

exports.home = home;
exports.privacy = privacy;
exports.p3p = p3p;
exports.xmlcoding = xmlcoding;
