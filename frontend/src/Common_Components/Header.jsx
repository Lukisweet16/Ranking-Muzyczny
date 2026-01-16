import { routes, route, navbar, link, Link } from "react-router-dom";
import "../styles/header.css";
const App = () => {
  return (
    <div className="header">
      <menu>
        <div className="menu__item">
          <Link to={"/login"}>LOGOWANIE</Link>
        </div>

        <div className="menu__item">
          <Link to={"/"}>
            <h1>
              <span className="menu__item__title">MATCH MY TASTE</span>
            </h1>
          </Link>
        </div>

        <div className="menu__item">
          <Link to={"/leaderboard"}>RANKING</Link>
        </div>
      </menu>
    </div>
  );
};

export default App;
