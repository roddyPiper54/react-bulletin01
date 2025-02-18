import { useEffect, useState } from "react";
import { BrowserRouter, Link, Route, Routes, useParams } from "react-router-dom";

//import reactLogo from "./assets/react.svg";
// import "./App.css";
import "./components/route/Route";
import { Home } from "./Home";
import { NewPage } from "./NewPage";
import { Thread } from "./Thread";
import { UrlParameter } from "./UrlParameter";

export const App = () => {
  const [threads, SetThreads] = useState([]);
  // const [threads, SetThreads] = useState([]);

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

  //パラメータ取得
  //const { thread_id } = useParams();

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
                <Route path="/Thread" element={<Thread />} />
                <Route path="/UrlParameter" element={<UrlParameter />} />
              </Routes>
            </section>
          </main>
          <footer className="l-footer">
            <div className="container">footer</div>
          </footer>
        </div>
      </BrowserRouter>
      {/* Routerコンポーネント内で定義したURLとそれに対応するコンポーネントへ切り替わるようになります。BrowserRouterコンポーネント外のコンポーネントへは切り替わることはりません。 */}
    </>
  );
};

export default App;
