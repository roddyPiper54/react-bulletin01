import { useEffect, useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
//import reactLogo from "./assets/react.svg";
// import "./App.css";
import "./components/route/Route";
import { Home } from "./Home";
import { NewPage } from "./NewPage";

export const App = () => {
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
  }, []);

  return (
    <>
      <BrowserRouter>
        <div>
          <header className="l-header">
            <div className="container">
              <div className="logo">React Bulletion 01</div>
            </div>
          </header>
          <nav className="gNavWrapper">
            <div className="container">
              <ul className="gNav">
                <li>
                  <Link to="/">home</Link>
                </li>
                <li>
                  <Link to="/newpage">newpage</Link>
                </li>
              </ul>
            </div>
          </nav>
          <main>
            <section className="container">
              <Routes>
                <Route path="/" element={<Home threads={threads} />} />
                <Route path="/newpage" element={<NewPage />} />
              </Routes>
            </section>
          </main>
          <footer className="l-footer">
            <div className="container">footer</div>
          </footer>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
