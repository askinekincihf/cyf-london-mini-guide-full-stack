import './App.css';
import Categories from "./components/Categories";
import DropdownMenu from "./components/DropdownMenu";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <DropdownMenu />
      <Categories />
    </div>
  );
}

export default App;
