import "./App.css";
import NavBar from "./componenets/NavBar";
import SideList from "./componenets/SideList";
import HomePage from "./componenets/HomePage";
import GridList from "./componenets/GridList";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="side-and-main">
        <SideList />
        <HomePage />
        <GridList />
      </div>
    </div>
  );
}

export default App;
