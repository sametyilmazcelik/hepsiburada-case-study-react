import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { MainContext } from "./../../Context/Context";
import DropDown from "./DropDown";

describe("Dropdown Test", () => {
  let dropDownList, minPrice, maxPrice, latestZa, latest;
  const mockValue = {
    handleSelected: jest.fn(),
    sortByPriceProducts: jest.fn(),
    sortByDescriptionProducts: jest.fn(),
    sortOption: jest.fn(),
    setSortOption: jest.fn(),
  };

  beforeEach(() => {
    render(
      <MainContext.Provider value={mockValue}>
        <DropDown />
      </MainContext.Provider>
    );

    dropDownList = screen.getByTestId("dropDownList");
  });

  it("open dropdown menu", () => {
    userEvent.click(dropDownList);
    const options = screen.getByTestId("options");
    minPrice = screen.getByTestId("minimum-price");
    maxPrice = screen.getByTestId("maximum-price");
    latestZa = screen.getByTestId("latest-za");
    latest = screen.getByTestId("latest");
    expect(options).toBeVisible();
  });
});
