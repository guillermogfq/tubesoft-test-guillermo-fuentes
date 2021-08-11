import React from "react";
import ReactDOM from "react-dom";
import Chronometer from "./Chronometer";

it("renders without crashing Chronometer Component", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Chronometer />, div);
});
