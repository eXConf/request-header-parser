var express = require('express')
var app = express()
var port = process.env.PORT || 8080
var ip, lang, system, ip2

app.get('/', function(req, res) {
  ip = req.connection.remoteAddress
  ip2 = req.headers['x-forwarded-for']
  lang = req.headers['accept-language'].split(',')[0]
  system = req.headers['user-agent'].match(/\((.*?)\)/)[1]
  //^^parse user-agent and take what is between parentheses
  //console.log(ip + '\n' + lang + '\n' + system)
  var output = { 'ipaddress': ip, 'language': lang, 'software': system, 'ip2': ip2 }
  res.send(output)
})


app.listen(port, function() {

})
