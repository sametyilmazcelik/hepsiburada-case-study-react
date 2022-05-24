import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { MainContext } from "./../../Context/Context";
import Search from "./Search";

describe("function called on click", () => {
  let searchBox;
  beforeEach(() => {
    const mockValue = {
      setSearch: jest.fn(),
      search: jest.fn(),
    };

    render(
      <MainContext.Provider value={mockValue}>
        <Search />
      </MainContext.Provider>
    );

    searchBox = screen.getByTestId("searchBox");
  });

  it("search apple", () => {
    userEvent.type(searchBox, "apple");
    expect(searchBox.value).toBe("apple");
  });
});
