import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import NavBar from "./components/UI/molecules/navbar/Navbar";
import Hero from './components/UI/organisms/hero/Hero';
import { NavItems } from "./components/UI/atoms/menu/menu";

function App() {
  return (
    <div className="App">
      <Router>
      <NavBar NavItems={NavItems} />
      <Hero />
      </Router>
    </div>
  );
}

export default App;
