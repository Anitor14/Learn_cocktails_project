import React from "react";
import { useRef, useEffect } from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchTerm, searchTerm } = useGlobalContext();
  const searchValue = useRef("");
  useEffect(() => {
    searchValue.current.focus();
  }, []);

  function searchCocktail(e) {
    setSearchTerm(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">search your favorite cocktail</label>
          <input
            type="text"
            name="name"
            id="name"
            value={searchTerm}
            ref={searchValue}
            onChange={searchCocktail}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
