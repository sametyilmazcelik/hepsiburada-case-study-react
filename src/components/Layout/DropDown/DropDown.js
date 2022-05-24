import React, { useState, useContext } from "react";
import { MainContext } from "../../Context/Context";
import "./DropDown.scss";

const DropDown = (props) => {
  const {
    sortByPriceProducts,
    sortByDescriptionProducts,
    sortOption,
    setSortOption,
  } = useContext(MainContext);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelected = (value) => {
    setSortOption(value);
    switch (value) {
      case "leastPrice":
        sortByPriceProducts("price", "asc");
        break;
      case "highestPrice":
        sortByPriceProducts("price", "desc");
        break;
      case "AZ":
        sortByDescriptionProducts("desc", "asc");
        break;
      case "ZA":
        sortByDescriptionProducts("desc", "desc");
        break;
      default:
        break;
    }
  };
  return (
    <>
      <div>
        <div
          className="dropDown"
          data-testid="dropDownList"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          Sıralama
        </div>
        {isOpen && (
          <div className="options-wrap" data-testid="options">
            <span
              data-testid="minimum-price"
              onClick={() => handleSelected("leastPrice")}
              className={sortOption === "leastPrice" ? "active" : ""}
            >
              En Düşük Fiyat
            </span>
            <span
              data-testid="maximum-price"
              onClick={() => handleSelected("highestPrice")}
              className={sortOption === "highestPrice" ? "active" : ""}
            >
              En Yüksek Fiyat
            </span>
            <span
              data-testid="latest"
              onClick={() => handleSelected("AZ")}
              className={sortOption === "AZ" ? "active" : ""}
            >
              En Yeniler (A{">"}Z)
            </span>
            <span
              data-testid="latest-za"
              onClick={() => handleSelected("ZA")}
              className={sortOption === "ZA" ? "active" : ""}
            >
              En Yeniler (Z{"<"}A)
            </span>
          </div>
        )}
      </div>
    </>
  );
};

export default DropDown;
