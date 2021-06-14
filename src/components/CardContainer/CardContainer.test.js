import React from "react";
import { render } from "@testing-library/react";
import CardContainer from "./CardContainer";

describe("CardContainer tests", () => {
  it("should render", () => {
    expect(render(<CardContainer />)).toBeTruthy();
  });
});
