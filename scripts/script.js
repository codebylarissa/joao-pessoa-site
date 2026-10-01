var menuBtn = document.getElementById("menu-btn");
var menu = document.getElementById("menu")

function exibirMenu() {
  menu.classList.toggle("oculto");
}

menuBtn.addEventListener("click", exibirMenu);