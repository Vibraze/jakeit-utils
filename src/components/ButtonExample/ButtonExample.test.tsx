import React from "react";
import { render } from "@testing-library/react";
import ButtonExample from "./ButtonExample";

describe("ButtonExample", () => {
  test("renders the Video component", () => {
    render(<ButtonExample backgroundColor="blue" color="white" width="400px" height="200px" fontSize="16px">hello</ButtonExample>);
  });
});

describe("ButtonExample-Default", () => {
  test("renders the Video component", () => {
    render(<ButtonExample >This is default</ButtonExample>);
  });
});