import { render, screen } from "@testing-library/react";
import React from "react";
import { MainContext } from "./../Context/Context";
import ProductsList from "./ProductsList";

describe("function called on click", () => {
  let basketEnter, basketContainer, basketLeave, iPhone11, iPhone11RedCase;
  const mockValue = {
    products: [],
    currentPage: 1,
  };

  beforeEach(() => {
    render(
      <MainContext.Provider value={mockValue}>
        <ProductsList />
      </MainContext.Provider>
    );
  });

  it("viewcheck", () => {
    const header = screen.getByTestId("product-list");
    expect(header).toBeInTheDocument();
  });
});
