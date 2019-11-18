'use strict';
var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyRjQM89rBErCNb7'}).base('apprf3lQRqhk30vva');

exports.email = (request, response) => {
  console.log(request.body);
  var data = [];
  request.body.forEach(function(event) {
    data.push({"fields" : event});
});

  for (var i = 0; i < Math.floor(data.length/10)+1; i++) {
    var temp = data.slice(Math.min(i*10, data.length), Math.min((i+1)*10, data.length))
    base('Delivery').create(temp, function(err, records) {
      if (err) {
        console.error(err);
        return;
      }
      records.forEach(function (record) {
        console.log(record.getId());
      });
    }); 
    
};
response.status(200).send('Hello World!');
  }
  

exports.http = (request, response) => {
  response.status(200).send('Hello World!');
};

exports.event = (event, callback) => {
  callback();
};
