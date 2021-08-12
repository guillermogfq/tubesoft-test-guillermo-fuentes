import React from "react";
import ReactDOM from "react-dom";
import { cleanup, fireEvent, render } from "@testing-library/react";
import renderer from "react-test-renderer";
import Chronometer from "./Chronometer";

describe("testing request to click", () => {
  afterEach(cleanup);

  test("renders without crashing Chronometer Component", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Chronometer />, div);
  });

});
