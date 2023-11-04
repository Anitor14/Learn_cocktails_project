import React from "react";
import CocktailList from "../components/CocktailList";
import SearchForm from "../components/SearchForm";

const Home = () => {
  return (
    <main>
      <h1>Home is the only way</h1>
      <SearchForm />
      <CocktailList />
    </main>
  );
};

export default Home;
