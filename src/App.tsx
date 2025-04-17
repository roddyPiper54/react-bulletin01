import { BrowserRouter, Link, Route, Routes, useParams } from "react-router-dom";
import { Home } from "./Home";
import { NewThread } from "./NewThread";
import { Posts } from "./Posts";

export const App = () => {
  //スレッドid
  const { thread_id } = useParams();
  console.log(thread_id);

  return (
    <>
      <BrowserRouter>
        <div>
          <header className="l-header">
            <div className="container">
              <div className="logo">React掲示板</div>
            </div>
          </header>
          <nav className="gNavWrapper">
            <div className="container">
              <ul className="gNav">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/threads/new">newpage</Link>
                </li>
              </ul>
            </div>
          </nav>
          <main>
            <section className="container">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/threads/new" element={<NewThread />} />
                <Route path="/threads/:thread_id" element={<Posts />} />
                  {/*
                  Routeコンポーネントのpath属性。動的セグメントのルート定義(:~~形式で定義)。
                  :thread_id →react routerの動的パラメータ
                  動的セグメントの値はURLパラメータとしてキャプチャ→useParameterでフックして活用可能
                  urlが/threads/777なら,
                  uraParamsはthread_id="777"を返却
                  */}
              </Routes>
            </section>
          </main>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
