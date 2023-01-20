import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import axios from "axios";
import App from "../App";

test("should ", () => {
  render(<App />);
  expect(screen.getByText(/Id:/i)).toBeInTheDocument();
  expect(screen.getByText(/Name:/i)).toBeInTheDocument();
  expect(screen.getByText(/Year:/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/Find id.../i)).toBeInTheDocument();
});
