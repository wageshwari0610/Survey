import "./App.css";
import NavBar from "./componenets/NavBar";
import SideList from "./componenets/SideList";
import HomePage from "./componenets/HomePage";
import BoxCard from "./componenets/Card";

function App() {
  return (
    <div>
      <NavBar />
      <SideList />
      <HomePage />
      <BoxCard />
    </div>
  );
}

export default App;
