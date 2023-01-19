import React from "react";
import { Product } from "../utils/Product";

export const ProductModal: React.FC<Product> = (props) => {
  return (
    <div
      key={props.name}
      className="fixed inset-0  bg-black bg-opacity-20 backdrop-blur-sm flex justify-center items-center"
    >
      <div
        className="flex flex-col max-w-md items-center justify-center p-4 bg-opacity-100 shadow-md w-1/4 "
        style={{ backgroundColor: props.color }}
      >
        <div className="flex flex-row  my-1">
          <h1 className=" font-bold">Id: </h1>
          <h1>{props.id}</h1>
        </div>
        <div className="flex flex-row text-lg  my-1">
          <h1 className="font-bold">Name: </h1>
          <h1>{props.name}</h1>
        </div>
        <div className="flex flex-row text-lg my-1">
          <h1 className="font-bold">Year:</h1>
          <h1>{props.year}</h1>
        </div>
        <div className="flex flex-row text-lg my-1">
          <h1 className="font-bold">Color: </h1>
          <h1>{props.color}</h1>
        </div>
        <div className="flex flex-row text-lg my-1 mb-10">
          <h1 className=" font-bold">Pantone: </h1>
          <h1>{props.pantone_value}</h1>
        </div>
      </div>
    </div>
  );
};
