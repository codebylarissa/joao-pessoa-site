import { Link } from "react-router-dom";
import logoMobile from "../assets/img/logo-mobile.png";
import logoDesktop from "../assets/img/logo-desktop.png";
import menuHamburguer from "../assets/img/hamburguer.png";

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
        <img src={logoMobile} alt="" className="img-logo-mobile" />
        <img src={logoDesktop} alt="" className="img-logo-desktop" />
      </Link>
      <div className="navigation-menu">
        <button onClick={exibirMenu} id="menu-btn">
          <img src={menuHamburguer} alt="Menu hamburguer" />
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


