const express = require('express');
require('dotenv').config();
request = require('request');
const axios = require('axios');
axios.defaults.headers.common['x-api-key']="f0bc523e-e9de-4cc1-a189-e872c93d7b25";

const app = express();
const bodyParser = require('body-parser');
var wget=require('node-wget');
var url = require('url');
var path = require('path');

app.use(function(req, res, next){
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, Authorization, x-access-token');
  next();
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.post("/api/ping", function(req, res){
    var tokenId = req.body.tokenId;
	// f0bc523e-e9de-4cc1-a189-e872c93d7b25
axios.get('https://api.todaqfinance.net/files/e124eb86ff56fd6c2693bc0cbc529ddb88216d60130d8f305eb87f44fd9b66c0')
  .then(response => {
//	  var payload = JSON.stringify(response.data);
 //   console.log(payload);
//	  res.json({"data": payload});
	      //  var payload = JSON.stringify(response.data);
   console.log(response.data);
          res.json(response.data);
  })
  .catch(error => {
    console.log("this is an error " + error);
  });
});
app.use(express.static(__dirname + "/public" ));

app.listen(3000, function(){
  console.log("App starts at port :" +3000);
});
