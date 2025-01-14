import { useState } from "react";
//import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  //const [count, setCount] = useState(0);

  const [threads, SetThreads] = useState();

  //API Thread一覧取得
  // const threads = () => {
  fetch("https://railway.bulletinboard.techtrain.dev/")
    .then((response) => {
      console.log(response.status);

      if (!response.ok) {
        console.log("bad");
      } else {
        console.log(response);
        return response;
      }
    })
    .then((json) => {
      if (json) {
        SetThreads(json);
      }
    });
  // };

  return (
    <>
      <header>
        <title>
          <h1>React Bulletion 01</h1>
        </title>
      </header>
      <main>
        <section>
          <h1>スレッド一覧</h1>
          <p></p>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </section>
      </main>
      <footer>footer</footer>
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
      </div> */}
      {/* <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
    </>
  );
}

export default App;
