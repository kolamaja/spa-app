import React, { useEffect, useState } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import axios from "axios";
import { ProductModal } from "./components/ProductModal";

import { PaginatedProducts } from "./utils/PaginatedProducts";
import { Product } from "./utils/Product";

function App() {
  const [products, setProducts] = useState<PaginatedProducts>();
  const [id, setId] = useState("");
  const [page, setPage] = useState(1);
  const [isModalShown, setIsModalShown] = useState(false);
  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    axios
      .get(`https://reqres.in/api/products/${id}`, {
        params: { page: page, per_page: 5 },
      })
      .then((response) => setProductsData(response.data));
  }, [id, page]);

  function setModal(product: Product) {
    setProduct(product);
    setIsModalShown(true);
  }

  function setProductsData(products: PaginatedProducts) {
    if (Array.isArray(products.data)) setProducts(products);
    else setProducts({ ...products, data: [products.data] });
  }

  return (
    <div className="App">
      <div className="bg-slate-200 bg-opacity-30">
        <div className="container mx-auto">
          <div className="flex flex-col  items-center my-4">
            <input
              name="idFilter"
              className="border-b-2 w-1/12 border-amber-500 outline-none"
              placeholder="Find id..."
              onChange={(input) => setId(input.target.value)}
              type="number"
            />
          </div>
          <div className="flex flex-col items-center ">
            <div className="flex flex-row w-1/2 justify-evenly border-2 border-black">
              <h1 className="border-2 border-black w-full">Id:</h1>
              <h1 className="border-2 border-black w-full">Name:</h1>
              <h1 className="border-2 border-black w-full">Year:</h1>
            </div>
            {products?.data.map((product: Product) => (
              <>
                <button
                  key={product.id}
                  onClick={() => {
                    setModal(product);
                  }}
                  className="w-1/2 transition-all hover:scale-105"
                >
                  <div
                    className="flex flex-row text-left  justify-evenly  "
                    style={{ backgroundColor: product.color }}
                  >
                    <h1 className="border-2 border-black w-full">
                      {product.id}
                    </h1>
                    <h1 className="border-2 border-black w-full">
                      {product.name}
                    </h1>
                    <h1 className="border-2 border-black w-full">
                      {product.year}
                    </h1>
                  </div>
                </button>
              </>
            ))}
          </div>
          <div className="flex flex-row justify-center my-4 space-x-24 text-4xl text-amber-500">
            {page === 1 ? (
              <button
                onClick={() => setPage(page - 1)}
                className="hover:scale-105 hover:text-amber-600 active:scale-110 invisible"
              >
                <FaArrowAltCircleLeft />
              </button>
            ) : (
              <button
                onClick={() => setPage(page - 1)}
                className="hover:scale-105 hover:text-amber-600 active:scale-110"
              >
                <FaArrowAltCircleLeft />
              </button>
            )}
            <h1 className="text-xl text-black">Page: {page}</h1>
            {page === products?.total_pages ? (
              <button
                onClick={() => setPage(page + 1)}
                className="hover:scale-105 transition-all hover:text-amber-600 active:scale-110 invisible"
              >
                <FaArrowAltCircleRight />
              </button>
            ) : (
              <button
                onClick={() => setPage(page + 1)}
                className="hover:scale-105 transition-all hover:text-amber-600 active:scale-110"
              >
                <FaArrowAltCircleRight />
              </button>
            )}
          </div>
        </div>
        {isModalShown && product ? (
          <>
            <ProductModal
              id={product.id}
              name={product.name}
              year={product.year}
              color={product.color}
              pantone_value={product.pantone_value}
            />
            <div className="fixed inset-0  flex justify-center items-center">
              <button
                className=" mt-48 font-bold rounded-full bg-amber-500 hover:scale-105 hover:bg-amber-600 p-2 w-min h-min "
                onClick={() => setIsModalShown(false)}
              >
                Close
              </button>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}

export default App;
