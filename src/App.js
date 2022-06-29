import logo from "./logo.svg";
import "./App.css";
import { Header } from "./Header";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <ol>
        <li>
          <Link to="/read/1">html</Link>
        </li>
      </ol>
    </nav>
  );
}

function Read() {
  return (
    <article>
      <h2>Read</h2>
      Hello, Read
    </article>
  );
}

function Welcome() {
  return (
    <article>
      <h2>Welcome</h2>
      Hello, Web
    </article>
  );
}
function App() {
  return (
    <div>
      <Header></Header>Hi
      <Nav></Nav>
      <Welcome></Welcome>
      <Read></Read>
    </div>
  );
}

export default App;
