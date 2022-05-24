import React, { useContext } from "react";
import { MainContext } from "../Context/Context";
import ProductCard from "./Product/ProductCard";
import "./ProductsList.scss";

const ProductsList = () => {
  const { products, currentPage } = useContext(MainContext);

  const indexOfLastProduct = currentPage * 12;
  const indexOfFirstProduct = indexOfLastProduct - 12;
  return (
    <>
      <div className="products-main-container" data-testid="product-list">
        {products
          .slice(indexOfFirstProduct, indexOfLastProduct)
          .map((product, index) => {
            return <ProductCard key={index} product={product} />;
          })}
      </div>
    </>
  );
};

export default ProductsList;
