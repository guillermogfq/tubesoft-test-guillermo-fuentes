import { getAllTimeRecords, createTimeRecords } from "./APIServices";

describe('testing api', () => {
    it("Get All time records its ok", () => {
        const getAll = getAllTimeRecords;

        getAll().then( response => {
            expect(response.code).toEqual(200);
        });

    });


    it("Create time records its ok", () => {
    const create = createTimeRecords;

    let data = {};

    create(data).then( response => {
      expect(response.code).toEqual(200);
    });
    });
});