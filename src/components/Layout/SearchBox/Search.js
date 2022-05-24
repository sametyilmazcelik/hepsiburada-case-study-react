import React, { useContext } from "react";
import { MainContext } from "../../Context/Context";
import "./Search.scss";

export default function Search() {
  const { setSearch } = useContext(MainContext);

  return (
    <div className="search">
      <input
        className="searchBox"
        type="text"
        id="searchBox"
        data-testid="searchBox"
        placeholder="25 milyon’dan fazla ürün içerisinde ara"
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}
