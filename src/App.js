import "./App.css";
import NavBar from "./componenets/NavBar";
import SideList from "./componenets/SideList";
import HomePage from "./componenets/HomePage";
import GridList from "./componenets/GridList";

function App() {
  return (
    <div className="App">
      <NavBar />
      <SideList />
      <HomePage />
      <GridList />
    </div>
  );
}

export default App;
