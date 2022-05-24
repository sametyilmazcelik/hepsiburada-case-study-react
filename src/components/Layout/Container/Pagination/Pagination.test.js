import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { MainContext } from "./../../../Context/Context";
import Pagination from "./Pagination";

describe("Pagination Test", () => {
  let nextPage, previousPage;
  const mockValue = {
    products: jest.fn(),
    currentPage: jest.fn(),
    setCurrentPage: jest.fn(),
    productsCount: jest.fn(),
    setProductsCount: jest.fn(),
    setSearch: jest.fn(),
    search: jest.fn(),
    totalPages: jest.fn(),
    setTotalPages: jest.fn(),
  };

  beforeEach(() => {
    render(
      <MainContext.Provider value={mockValue}>
        <Pagination />
      </MainContext.Provider>
    );

    nextPage = screen.getByTestId("next-page");
    previousPage = screen.getByTestId("previous-page");
  });

  it("navigate to next page", () => {
    userEvent.click(nextPage);
  });

  it("navigate to previous page", () => {
    userEvent.click(previousPage);
  });
});
