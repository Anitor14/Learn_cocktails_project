import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import { useState } from "react";
//import pages.
import Navbar from "./components/Navbar";
import { About, Error, Home, SingleCocktail } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/error" element={<Error />}></Route>
        <Route path="/singleCocktails" element={<SingleCocktail />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
