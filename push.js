'use strict';

var os = require('os');
var express = require('express')
var client = require('prom-client')
var epimetheus = require('epimetheus')

var gateway = new client.Pushgateway('http://localhost:9091/');

var startTime= new client.Gauge('examplejob_last_start_time', 'A gauge of something going on');
var durationGauge= new client.Gauge('examplejob_duration_seconds', 'A gauge of something going on');

var thingsCounter = new client.Counter('examplejob_processed_items_total', 'A counter for the things we have processed so far');
var internalQueueGauge = new client.Gauge('examplejob_internal_queue_items', 'A gauge internal things we need to work on');

var start = ((new Date).getTime() / 1000);
startTime.set(start);

// If this is going to take a while, we might want to do an early push to update the start time.
// We use pushAdd here, this prevents us overwriting any examplejob_last_success_time already stored
// in the push gateway.
gateway.pushAdd({ jobName: 'push-example'}, function(err, resp, body) {
    // You can check the push worked here
})

// ...
// Do things here
thingsCounter.inc(); // Inc with 1
// ...
internalQueueGauge.set(4);

// If we want to update the progress periodically, we can push every so often
// , if this is the case, you should consider turning this into a service and using
// regular pull based monitoring.
gateway.pushAdd({ jobName: 'push-example'}, function(err, resp, body) {
    // You can check the push worked here
})
// ...

var end = ((new Date).getTime() / 1000);
durationGauge.set(start - end);

var endTime = new client.Gauge('examplejob_last_success_time', 'A gauge of something going on');
endTime.set(end)
gateway.pushAdd({ jobName: 'push-example'}, function(err, resp, body) {
    // You can check the push worked here
})


