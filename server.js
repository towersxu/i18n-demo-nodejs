/**
 * Created by taox on 15-7-16.
 */
var http = require('http'),
  i18n = require('i18n'),
  url = require('url'),
  app;

// minimal config
i18n.configure({
  locales: ['en', 'de','zh-cn'],
  directory: __dirname + '/locales'
});

// simple server
app = http.createServer(function (req, res) {
  // init & guess
  console.log(req.headers);
  i18n.init(req, res);

  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<head><meta charset="utf-8"/></head>');
  res.write('<h1>Node.js</h1>');
  var a = res.__('username');
  console.log(a);
  res.end(a);
});
app.listen(3001);