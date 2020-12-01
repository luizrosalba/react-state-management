import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import ProductList from "../components/ProductList";
import Cart from "../components/Cart";
import { requestProducts } from "../Actions";

const Ecommerce = () => {
 
  const dispatch = useDispatch();

  useEffect(() => {
    getProducts();

    /// pega os produtos de um bucket na internet asincrono 
    async function getProducts() {
      try {
        const response = await fetch(
          "https://my-json-server.typicode.com/ScottiBR/react-state-management/productList"
        );

        const products = await response.json();
         /// dispara as actions 
         /// pega as actions e envia para store
        if (products) dispatch(requestProducts(products));
      } catch (Error) {
        console.log(Error);
      }
    }
  }, [dispatch]);

  return (
    <div>
      <h2>Shopping</h2>
      <hr />
      <ProductList />
      <hr />
      <Cart />
    </div>
  );
};

export default Ecommerce;
