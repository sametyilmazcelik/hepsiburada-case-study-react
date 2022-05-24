import React from "react";
import ProductsList from "../../Products/ProductsList";
import Pagination from "../Container/Pagination/Pagination";
import "./Container.scss";

const Container = (props) => {
  return (
    // Product list contexten came here and sent to productList
    <div data-testid="container">
      <ProductsList />
      <Pagination />
    </div>
  );
};

export default Container;
