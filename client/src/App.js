import "./App.css";
import React, { useState } from "react";
import Categories from "./components/Categories";
import DropdownMenu from "./components/DropdownMenu";
import Header from "./components/Header";
import Table from "./components/Table";

import dataAll from "./data";
const cityList = Object.keys(dataAll); // ["Harrow", "Heathrow", "Stratford"]
const categoryList = Object.keys(dataAll[Object.keys(dataAll)[0]]); //["pharmacies", "doctors","colleges","hospitals"]

function App() {
  const [optionState, setOptionState] = useState("");
  const [categoryState, setCategoryState] = useState(undefined);
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const API_URL = "https://londonmini.herokuapp.com"; // "https://localhost:5000";

  function handleCategoryChange(value) {
    setCategoryState(value);
  }
  function handleOptionChange(value) {
    setOptionState(value);
    if (!value) {
      setCategoryState(undefined);
    }
    if (cityList.includes(value)) {
      setIsLoading(true);
      fetch(`${API_URL}/${value}`)
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setIsLoading(false);
        })
        .catch((err) => console.log(err));
    }
  }
  return (
    <div className="App">
      <Header />
      <DropdownMenu options={cityList} setOption={handleOptionChange} />
      {optionState ? (
        <Categories categories={categoryList} setState={handleCategoryChange} />
      ) : null}
      <Table data={data[categoryState] ? data[categoryState] : []} />
      {isLoading ? <p>Loading...</p> : null}
    </div>
  );
}

export default App;
