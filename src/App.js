import * as ReactDOM from "react-dom";
import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Search from "./Components/Search/Search";
import Categories from "./Components/Categories/Categories";
import Benefits from "./Components/Benefits/Benefits";

export default function App() {
  return (
    <>
      <Navbar />
      <Search />
      <Categories />
    </>
  );
}
