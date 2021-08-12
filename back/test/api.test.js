const supertest = require("supertest");
const app = require('../app')

describe("Test the root path", () => {
  test("It should response the GET method", (done) => {
    supertest(app)
      .get("/")
      .then((response) => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});
describe("Test api", () => {
  test("List All Register response the GET method", (done) => {
    supertest(app)
      .get("/api/time-record")
      .then((response) => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  test("Create Register response the POST method", (done) => {
    supertest(app)
      .post("/api/time-record")
      .send({
        time_start: "00:00:00",
        time_end: "00:00:10",
        time_run: "00:00:10"
      })
      .then((response) => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});
