import { Link } from "react-router-dom";

export function Header() {
  function exibirMenu() {
    const menu = document.getElementById("menu");
    if (menu) {
      menu.classList.toggle("oculto");
    }
  }

  return (
    <header>
      <Link className="logo" to="/">
        <img src="img/log-mobile.png" alt="" className="img-logo-mobile" />
        <img src="img/logo-desktop.png" alt="" className="img-logo-desktop" />
      </Link>
      <div className="navigation-menu">
        <button onClick={exibirMenu} id="menu-btn">
          <img src="img/hamburger.png" alt="Menu hamburger" />
        </button>
        <nav id="menu" className="oculto">
          <ul className="list-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/praias">Praias</Link>
            </li>
            <li>
              <Link to="/pontos-turisticos">Pontos Turísticos</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
