import './App.css';
import { useState, useEffect } from "react";
import Categories from "./components/Categories";
import DropdownMenu from "./components/DropdownMenu";
import Header from "./components/Header";
import Table from "./components/Table";

function App() {
  const [data, setData] = useState([])
  const [option, setOption] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  function handleCategoryChange(e) {
    setSelectedCategory(e.target.id);
  }
  // Fetch the data from Glitch
  // useEffect(() => {
  //   fetch(`https://askinekinci-london-mini-guide.glitch.me/${option}`)
  //     .then(res => res.json())
  //     .then(data => setData(data));
  // }, [option]);

  //Fetch the data from the server
  // Option 1
  // useEffect(() => {
  //   fetchItems()
  // }, [option]);

  // const fetchItems = async () => {
  //   const fetchedData = await fetch(`/${option}`);
  //   const displayedData = await fetchedData.json();
  //   setData(displayedData)
  // };

  // Option -2
   useEffect(() => {
    fetch(`/${option}`)
      .then(res => res.json())
      .then(data => setData(data));
  }, [option]);

  return (
    <div className="App">
      <Header />
      <DropdownMenu
        option={option}
        setOption={setOption}
      />
      <Categories
        handleClick={handleCategoryChange}
        categoryNames={Object.keys(data)}
        option={option}
      />
      <Table
        data={data[selectedCategory]}
        option={option}
        categoryNames={Object.keys(data)}
      />
    </div>
  );
}

export default App;
