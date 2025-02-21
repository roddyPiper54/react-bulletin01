import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { NewPage } from "./NewPage";

export const App = () => {
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
                <Route path="/threads/new" element={<NewPage />} />
              </Routes>
            </section>
          </main>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
