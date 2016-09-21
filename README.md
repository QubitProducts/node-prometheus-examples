# Prometheus Examples

There are two libraries for prometheus monitoring:

- prom-client: The basic prometheus client, this is needed if you wish to expose your own
  application specific metrics
- epmitheus: This is an express middleware for automatically instrumenting express web applications

To install the prometheus libraries use:

```
npm install --save @qutics/prom-client
npm install --save @qutics/epimetheus
```

This respository includes simple examples of how to instrument applications
using QubitDigital/prom-client and QubitDigital/node-epimetheus

- plain.js: This is simple instrumentation of a express service, with optional
  extra instrumentation
- push.js: This is an example of pushing metrics to the pushgateway

