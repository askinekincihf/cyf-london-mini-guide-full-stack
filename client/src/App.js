import './App.css';
import { useState } from "react";
import Categories from "./components/Categories";
import DropdownMenu from "./components/DropdownMenu";
import Header from "./components/Header";
import Table from "./components/Table"

function App() {
  const [option, setOption] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(undefined);

  function handleCategoryChange(e) {
    setSelectedCategory(e.target.id);
  }

  return (
    <div className="App">
      <Header />
      <DropdownMenu
        option={option}
        setOption={setOption}
      />
      <Categories handleClick={handleCategoryChange} />
      <Table />
    </div>
  );
}

export default App;
