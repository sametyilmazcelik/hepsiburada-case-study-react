import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { products as mainProductsList } from "../../../lib/products";
import { MainContext } from "./../../Context/Context";
import Container from "./Container";

describe("Viewtest", () => {
  const mockValue = {
    products: mainProductsList,
    filterOptions: [],
    setFilterOptions: jest.fn(),
    setProducts: jest.fn(),
    sortByPriceProducts: jest.fn(),
    setProductsCount: jest.fn(),
    sortByDescriptionProducts: jest.fn(),
    setColors: jest.fn(),
    setBrands: jest.fn(),
    colors: jest.mock,
    brands: jest.mock,
  };
  beforeEach(() => {
    render(
      <MainContext.Provider value={mockValue}>
        <Container />
      </MainContext.Provider>
    );
  });

  it("view check", () => {
    const view = screen.getByTestId("container");
    expect(view).toBeInTheDocument();
  });
});
