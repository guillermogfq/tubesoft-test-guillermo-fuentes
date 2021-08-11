import React from "react";
import ReactDOM from "react-dom";
import TimeRecords from "./TimeRecords";

describe('testing behaviour', () => {
    it("renders without crashing TimeRecords Component", () => {
        const div = document.createElement("div");
        ReactDOM.render(<TimeRecords />, div);
    });
});