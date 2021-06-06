import './App.css';
import { useState, useEffect } from "react";
import Harrow from "./data/Harrow.json"
import Heathrow from "./data/Heathrow.json"
import Stratford from "./data/Stratford.json"
import Categories from "./components/Categories";
import DropdownMenu from "./components/DropdownMenu";
import Header from "./components/Header";
import Table from "./components/Table"

function App() {
  const [data, setData] = useState([])
  const [option, setOption] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  function handleCategoryChange(e) {
    setSelectedCategory(e.target.id);
  }

  useEffect(() => {
    fetch(`https://askinekinci-london-mini-guide.glitch.me/${option}`)
      .then(res => res.json())
      .then(data => setData(data));
  }, [option])

  console.log(data)

  return (
    <div className="App">
      <Header />
      <DropdownMenu
        option={option}
        setOption={setOption}
      />
      <Categories
        handleClick={handleCategoryChange}
        categoryNames={Object.keys(Heathrow)}
      />
      <Table
        data={data[selectedCategory]}
      />
    </div>
  );
}

export default App;
