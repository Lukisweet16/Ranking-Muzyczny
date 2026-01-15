import "./header.css";
const App = () => {
  return (
    <div className="header">
      <menu>
        <div className="menu__item">
          <a href="">LOGOWANIE</a>
        </div>
        <div className="menu__item">
          <h1>
            <span className="menu__item__title">MATCH MY TASTE</span>
          </h1>
        </div>

        <div className="menu__item">
          <a href="">RANKING</a>
        </div>
      </menu>
    </div>
  );
};

export default App;
