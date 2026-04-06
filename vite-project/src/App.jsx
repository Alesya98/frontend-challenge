import { NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import { Cats } from "./Cats";
import { FavouriteCats } from "./FavouriteCats";



function App() {
  return (
    <>
      <header className="header">
        <div className="container header__inner">
          <nav className="page__link">
            <NavLink className='all active' to="/" end>
              Все котики
            </NavLink>
            <NavLink className="favourite" to="/favourite">
              Любимые
            </NavLink>
          </nav>
        </div>
      </header>
      <main>
        <div className="container page__inner">
          <Routes>
            <Route index element={<Cats />} />
            <Route path="/favourite" element={<FavouriteCats />} />
          </Routes>
        </div>
      </main>
    </>
  );
}

export default App;
