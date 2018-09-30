var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require("fs");
app.use(bodyParser.json())


app.get('/getScore', function (req, res) {
  fs.readFile('secondPage.html', function (err, data) {
    res.write(data);
    res.end();
  });
})

app.post('/route', function (req, res) {
  const postBody = req.body.hello;
  //console.log(postBody);
});

app.listen(8080, () => {
  console.log('App running..')
})