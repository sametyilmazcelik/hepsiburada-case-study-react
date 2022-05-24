import React, { useContext } from "react";
import Search from "../SearchBox/Search";
import Basket from "../Basket/Basket";
import "./Header.scss";
import VectorLogo from "../../../assets/logo/Vector.svg";
import DropDown from "../DropDown/DropDown";
import { MainContext } from "./../../Context/Context";

export default function Header() {
  const { search } = useContext(MainContext);

  return (
    <>
      <div className="header" data-testid="header">
        <div className="header-flex" data-testid="header">
          <div className="logo-wrap">
            <img alt="vector logo" className="vector-logo" src={VectorLogo} />
          </div>
          <Search />
          <Basket />
        </div>
      </div>
      <div className="product-wrapper">
        <div>
          <h3 className="product-name">Cep Telefonu</h3>
          {search.length > 2 && (
            <h4 className="product-search">
              Aranan kelime:<span className="product-answer">{search}</span>
            </h4>
          )}
          <div className="product-section"> </div>
        </div>
        <DropDown />
      </div>
    </>
  );
}
