import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { products as mainProductsList } from "../../../lib/products";
import { MainContext } from "./../../Context/Context";
import Filter from "./Filter";

describe("function called on click", () => {
  beforeEach(() => {
    const mockValue = {
      products: mainProductsList,
      filterOptions: [],
      setFilterOptions: jest.fn(),
      setProducts: jest.fn(),
      sortByPriceProducts: jest.fn(),
      sortByDescriptionProducts: jest.fn(),
      setColors: jest.fn(),
      setBrands: jest.fn(),
      colors: jest.mock,
      brands: jest.mock,
    };

    render(
      <MainContext.Provider value={mockValue}>
        <Filter />
      </MainContext.Provider>
    );
  });

  it("filterby brand", () => {
    const redColorFilter = screen.getByTestId("color-red");
    userEvent.click(redColorFilter);
  });
});
