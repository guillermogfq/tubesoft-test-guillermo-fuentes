module.exports = (sequelize, Sequelize) => {
  //Definition table timerecord for save registers from frontend
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
