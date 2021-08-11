const db = require("../models");
const models = require("./../models");
const Op = db.Sequelize.Op;

exports.createTimeRecord = (req, res) => {
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

  const time = {
    time_start: req.body.time_start,
    time_end: req.body.time_end,
    time_run: req.body.time_run,
  };

  models.TimeRecord.create(time)
    .then(() => {
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
    })
    .catch((err) => {
      res.status(200).send({
        code: 500,
        message:
          err.message || "Some error occurred while creating the Time Record.",
      });
    });
};

exports.findAllTimeRecord = (req, res) => {
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
          err.message || "Some error occurred while retrieving Time Record.",
      });
    });
};
