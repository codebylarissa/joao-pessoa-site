import React from "react";

export function Header() {
  function exibirMenu() {
    const menu = document.getElementById("menu");
    if (menu) {
      menu.classList.toggle("oculto");
    }
  }

  return (
    <header>
      <a href="index.html" className="logo">
        <img src="img/log-mobile.png" alt="" className="img-logo-mobile" />
        <img src="img/logo-desktop.png" alt="" className="img-logo-desktop" />
      </a>
      <div className="navigation-menu">
        <button onClick={exibirMenu} id="menu-btn">
          <img src="img/hamburger.png" alt="Menu hamburger" />
        </button>
        <nav id="menu" className="oculto">
          <ul className="list-links">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="praias.html">Praias</a>
            </li>
            <li>
              <a href="pontos-turisticos.html">Pontos Turísticos</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;