import "./App.css";
import NavBar from "./componenets/NavBar";
import SideList from "./componenets/SideList";
import HomePage from "./componenets/HomePage";
function App() {
  return (
    <div>
      <NavBar />
      <div className="side-and-main">
        <SideList />
        <HomePage />
      </div>
    </div>
  );
}

export default App;
