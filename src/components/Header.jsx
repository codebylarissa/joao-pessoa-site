import { useState } from "react";
import { Link } from "react-router-dom";
import logoMobile from "../assets/img/logo-mobile.png";
import logoDesktop from "../assets/img/logo-desktop.png";
import menuHamburguer from "../assets/img/hamburguer.png";

export function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  function alternarMenu() {
    setMenuAberto((estadoAnterior) => !estadoAnterior);
  }

  function fecharMenu() {
    setMenuAberto(false);
  }

  return (
    <header>
      <Link className="logo" to="/" onClick={fecharMenu}>
        <img src={logoMobile} alt="Logo Visite João Pessoa" className="img-logo-mobile" />
        <img src={logoDesktop} alt="Logo Visite João Pessoa" className="img-logo-desktop" />
      </Link>

      <div className="navigation-menu">
        <button
          type="button"
          onClick={alternarMenu}
          id="menu-btn"
          aria-expanded={menuAberto}
        >
          <img src={menuHamburguer} alt="Menu hamburguer" />
        </button>

        <nav id="menu" className={menuAberto ? "" : "oculto"}>
          <ul className="list-links">
            <li>
              <Link to="/" onClick={fecharMenu}>Home</Link>
            </li>
            <li>
              <Link to="/praias" onClick={fecharMenu}>Praias</Link>
            </li>
            <li>
              <Link to="/pontos-turisticos" onClick={fecharMenu}>Pontos Turísticos</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}