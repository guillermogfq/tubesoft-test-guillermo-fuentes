const axios = require("axios");

export const getAllTimeRecords = () => {
  return axios
    .get("http://127.0.0.1:8080/api/time-record")
    .then((res) => res.data)
    .catch((error) => error);
};

export const createTimeRecords = (data) => {
  return axios
    .post("http://127.0.0.1:8080/api/time-record", data)
    .then((res) => res.data)
    .catch((error) => error);
};
