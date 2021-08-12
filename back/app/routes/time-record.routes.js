module.exports = (app) => {
  const timeRecordController = require("../controllers/time-record.controller.js");

  var router = require("express").Router();

  //Route for create Time Record
  router.post("/", timeRecordController.createTimeRecord);
  //Route for list all Time Record
  router.get("/", timeRecordController.findAllTimeRecord);
  //Base path route api
  app.use("/api/time-record", router);
};
