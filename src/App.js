import logo from "./logo.svg";
import "./App.css";
import { Header } from "./Header";
import { Link, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

function Nav(props) {
  return (
    <nav>
      <ol>
        {props.data.map((e) => (
          <li key={e.id}>
            <Link to={`/read/${e.id}`}>{e.title}</Link>
          </li>
        ))}
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
  //1 useEffect 이용, 1번만
  //2 fetch 이용
  // topics state 갱신
  const [topics, setTopics] = useState();

  async function refresh() {
    const resp = await fetch("http://localhost:3333/topics");
    const data = await resp.json();
    setTopics(data);
  }
  useEffect(() => {
    refresh();
  }, []);
  console.log(`topics:`);
  console.log(topics);
  return (
    <div>
      <Header></Header>Hi
      <Nav data={topics}></Nav>
      <Routes>
        <Route path="/" element={<Welcome></Welcome>}></Route>
        <Route path="/read/1" element={<Read></Read>}></Route>
      </Routes>
    </div>
  );
}

export default App;
