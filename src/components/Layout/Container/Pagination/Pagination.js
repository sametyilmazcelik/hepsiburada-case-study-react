import React, { useContext, useState, useEffect } from "react";
import { MainContext } from "../../../Context/Context";
import "../Container.scss";
import "./Pagination.scss";

export default function Pagination() {
  const {
    products,
    currentPage,
    setCurrentPage,
    productsCount,
    setProductsCount,
  } = useContext(MainContext);
  const [totalPages, setTotalPages] = useState([1]);

  // fires when products change and changes productsCount
  useEffect(() => {
    setProductsCount(products.length);
    // eslint-disable-next-line
  }, [products]);

  // fires when productsCount changes and handles total page count
  useEffect(() => {
    let tempArray = [];
    for (let i = 0; i < Math.ceil(productsCount / 12); i++) {
      tempArray.push(i + 1);
    }
    setTotalPages(tempArray);
  }, [productsCount]);

  return (
    <nav>
      <ul className="pagination">
        <button
          data-testid="previous-page"
          onClick={() => {
            if (currentPage > 1) {
              setCurrentPage(currentPage - 1);
            } else {
              return;
            }
          }}
        >
          &lt;
        </button>
        {totalPages.map((number) => (
          <li key={number}>
            <button
              data-testid={"page-" + number}
              className={currentPage === number ? "active_page" : ""}
              onClick={() => {
                setCurrentPage(number);
              }}
            >
              {number}
            </button>
          </li>
        ))}
        <button
          data-testid="next-page"
          onClick={() => {
            if (currentPage < totalPages.length) {
              setCurrentPage(currentPage + 1);
            } else {
              return;
            }
          }}
        >
          &gt;
        </button>
      </ul>
    </nav>
  );
}
