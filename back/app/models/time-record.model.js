module.exports = (sequelize, Sequelize) => {
  const TimeRecord = sequelize.define("timerecord", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    time_start: {
      type: Sequelize.TIME,
    },
    time_end: {
      type: Sequelize.TIME,
    },
    time_run: {
      type: Sequelize.TIME,
    }
  });

  return TimeRecord;
};
