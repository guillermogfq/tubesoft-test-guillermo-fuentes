const db = require("../models");
const models = require("./../models");
const Op = db.Sequelize.Op;

//Create endpoint
exports.createTimeRecord = (req, res) => {
  //Validate if exist data in body
  if (
    !req.body.time_start ||
    !req.body.time_end ||
    !req.body.time_run
  ) {
    res.status(200).send({
      code: 400,
      message: "Content is empty or not enough parameters sent.",
    });
    return;
  }

  //Retrieve data from body of request
  const time = {
    time_start: req.body.time_start,
    time_end: req.body.time_end,
    time_run: req.body.time_run,
  };

  //Save register in BD
  models.TimeRecord.create(time)
    .then(() => {
        //If all is OK, response with All register from BD
        models.TimeRecord.findAll({
            attributes: ["id", "time_start", "time_end", "time_run"],
        })
        .then((data) => {
          res.send({
            code: 200,
            message: "Get all Time Record successful",
            data: data,
          });
        })
        .catch((err) => {
          res.status(200).send({
            code: 500,
            message:
              err.message ||
              "Some error occurred while retrieving Time Record.",
          });
        });
    })//If has error, response with error message
    .catch((err) => {
      res.status(200).send({
        code: 500,
        message:
          err.message || "Some error occurred while creating the Time Record.",
      });
    });
};

//List endpoint
exports.findAllTimeRecord = (req, res) => {
  //Retrieve all register from BD
  models.TimeRecord.findAll({
    attributes: ["id", "time_start", "time_end", "time_run"],
  })//If all its OK, retrieve success message with data
    .then((data) => {
      res.send({
        code: 200,
        message: "Get all Time Record successful",
        data: data,
      });
    })//If has error, response error message
    .catch((err) => {
      res.status(200).send({
        code: 500,
        message:
          err.message || "Some error occurred while retrieving Time Record.",
      });
    });
};
