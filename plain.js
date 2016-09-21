'use strict';

var os = require('os');
var express = require('express')
var client = require('@qutics/prom-client')
var epimetheus = require('@qutics/epimetheus')

var counter = new client.Counter('example_processed_things_total', 'Counter of things');

let app = express()
epimetheus.instrumentWithClient(app,client)

app.get('/', function (req, res) {
  counter.inc(); // Inc with 1
  res.send('Hello World!');
});

app.listen(8181, function (){
  console.log('app running')
})

