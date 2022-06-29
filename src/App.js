import logo from "./logo.svg";
import "./App.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>
        <Link to="/">WEB</Link>
      </h1>
    </header>
  );
}

function App() {
  return (
    <div>
      <Header></Header>Hi
    </div>
  );
}

export default App;
