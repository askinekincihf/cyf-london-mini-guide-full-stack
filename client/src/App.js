import './App.css';
import { useState } from "react";
import Categories from "./components/Categories";
import DropdownMenu from "./components/DropdownMenu";
import Header from "./components/Header";

function App() {
  const [option, setOption] = useState("");

  return (
    <div className="App">
      <Header />
      <DropdownMenu
        option={option}
        setOption={setOption}
      />
      <Categories />
    </div>
  );
}

export default App;
