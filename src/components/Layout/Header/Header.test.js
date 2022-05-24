import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { MainContext } from "./../../Context/Context";
import Header from "./Header";

describe("function called on click", () => {
  let basketEnter, basketContainer, basketLeave, iPhone11, iPhone11RedCase;
  const mockValue = {
    setSearch: jest.fn(),
    search: "",
  };

  beforeEach(() => {
    render(
      <MainContext.Provider value={mockValue}>
        <Header />
      </MainContext.Provider>
    );
  });

  it("viewcheck", () => {
    const header = screen.getByTestId("header");
    expect(header).toBeInTheDocument();
  });
});
