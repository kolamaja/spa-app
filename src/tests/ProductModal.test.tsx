import { render, screen } from "@testing-library/react";
import React from "react";
import { ProductModal } from "../components/ProductModal";
test("render modal with selected product data", () => {
  render(
    <ProductModal
      id={3}
      name={"red"}
      year={2003}
      color={"#FF0000"}
      pantone_value={"19-1664"}
    />
  );
  const id = screen.getByText(3);
  const name = screen.getByText(/red/i);
  const year = screen.getByText(2003);
  const color = screen.getByText(/#FF0000/i);
  const pantone_value = screen.getByText(/19-1664/i);
 
  expect(id).toBeInTheDocument();
  expect(name).toBeInTheDocument();
  expect(year).toBeInTheDocument();
  expect(color).toBeInTheDocument();
  expect(pantone_value).toBeInTheDocument();
});
