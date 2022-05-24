import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { MainContext } from "./../../Context/Context";
import ProductCard from "./ProductCard";

describe("function called on click", () => {
  const mockValue = {
    basketItems: [],
    addToCart: jest.fn(),
  };

  beforeEach(() => {
    render(
      <MainContext.Provider value={mockValue}>
        <ProductCard
          product={{
            productId: 5,
            desc: "Xiaomi Redmi Note 10S 128 GB 6 GB Ram",
            brand: "Xiomi",
            color: "Kırmızı",
            colorEn: "red",
            image: "images/productImages/image1.png",
            price: "190,85",
            actualPrice: "130,00",
            sale: "12%",
          }}
        />
      </MainContext.Provider>
    );
  });

  it("add to cart", () => {
    const addToCart = jest.fn();
    const button = screen.getByTestId("add-to-card-5");
    userEvent.click(button);
    expect(addToCart).toHaveBeenCalledTimes(0);
  });
});
