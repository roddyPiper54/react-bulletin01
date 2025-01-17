import { useEffect, useState } from "react";
//import reactLogo from "./assets/react.svg";
import "./App.css";

export const App = () => {
  //const [count, setCount] = useState(0);

  const [threads, SetThreads] = useState([]);

  //API Thread一覧取得
  useEffect(() => {
    fetch("https://railway.bulletinboard.techtrain.dev/threads")
      .then((response) => {
        if (!response.ok) {
          console.log("bad");
        } else {
          return response.json();
        }
      })
      .then((json) => {
        if (json) {
          SetThreads(json);
        }
      })
      .catch((error) => console.error(error));
    // };
  }, []);

  return (
    <>
      <header>
        <title>
          <h1>React Bulletion 01</h1>
        </title>
      </header>
      <main>
        <section>
          <h1 className="title">スレッド一覧</h1>
          <p></p>
          <ul className="threadlist">
            {threads.map((thread, index) => (
              <li key={index}>{thread.title}</li>
            ))}
          </ul>
        </section>
      </main>
      <footer>footer</footer>
    </>
  );
};

export default App;
