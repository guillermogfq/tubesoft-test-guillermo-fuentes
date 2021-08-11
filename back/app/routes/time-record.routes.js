module.exports = (app) => {
  const timeRecordController = require("../controllers/time-record.controller.js");

  var router = require("express").Router();

  router.post("/", timeRecordController.createTimeRecord);
  router.get("/", timeRecordController.findAllTimeRecord);

  app.use("/api/time-record", router);
};
