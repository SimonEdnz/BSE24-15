const promClient=require("prom-client") ;
const { asyncHandler } =require("../utils/asyncHandler");

const register = new promClient.Registry();

register.setDefaultLabels({
  app: "LetsChat",
});

promClient.collectDefaultMetrics({ register });

const httpRequestDurationMicroseconds = new promClient.Histogram({
  name: "http_request_duration_ms",
  help: "Duration of HTTP requests in ms",
  labelNames: ["method", "route", "code"],
  buckets: [0.1, 5, 15, 50, 100, 200, 300, 400, 500], // buckets for response time from 0.1ms to 500ms
});

const startRequestMonitoringTimer = (
  req,
  res,
  next
) => {
  res.locals.startTimeInMs = Date.now();
  next();
};
const endRequestMonitoringTimer = (
  req,
  res,
  next
) => {
  const responseTimeInMs = Date.now() - res.locals.startTimeInMs;
  const statusCode = res.statusCode.toString();

  httpRequestDurationMicroseconds
    .labels(req.method, req.url, statusCode)
    .observe(responseTimeInMs);

  next();
};

const getMetrics = asyncHandler(
  async (req, res, next) => {
    res.setHeader("Content-Type", register.contentType);

    const responseTimeInMs = Date.now() - res.locals.startTimeInMs;
    const statusCode = res.statusCode.toString();

    httpRequestDurationMicroseconds
      .labels(req.method, req.url, statusCode)
      .observe(responseTimeInMs);

    const metrics = await register.metrics();
    res.status(200).send(metrics);
  }
);


module.exports = {endRequestMonitoringTimer,startRequestMonitoringTimer,getMetrics};
