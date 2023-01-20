import React from "react";
import { render, screen } from "@testing-library/react";

import App from "../App";

test("should render Id, Name, Year headers and Input with Find id placeholder", () => {
  render(<App />);
  expect(screen.getByText(/Id:/i)).toBeInTheDocument();
  expect(screen.getByText(/Name:/i)).toBeInTheDocument();
  expect(screen.getByText(/Year:/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/Find id.../i)).toBeInTheDocument();
});
