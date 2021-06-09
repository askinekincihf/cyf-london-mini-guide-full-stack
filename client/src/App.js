import "./App.css";
import React, { useState } from "react";
import Categories from "./components/Categories";
import DropdownMenu from "./components/DropdownMenu";
import Header from "./components/Header";
import Table from "./components/Table";
import dataAll from "./data";

function App() {
  const [optionState, setOptionState] = useState("");
  const [categoryState, setCategoryState] = useState(undefined);
  const [warning, setWarning] = useState(false);

  function handleCategoryChange(value) {
    setWarning(!optionState);
    setCategoryState(value);
  }
  function handleOptionChange(value) {
    setWarning(!value);
    setOptionState(value);
  }
  return (
    <div className="App">
      <Header />
      <DropdownMenu options={Object.keys(dataAll)} setOption={handleOptionChange} />
      {warning ? <p className="text-warning">First Select City</p> : null}
      <Categories
        setState={handleCategoryChange}
        categories={Object.keys(dataAll[Object.keys(dataAll)[0]])}
      />
      <Table data={dataAll.Heathrow.pharmacies} />
    </div>
  );
}

export default App;
