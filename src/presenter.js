import saludar from "./sumador.js";

const nombreInput = document.querySelector("#nombre");
const generoSelect = document.querySelector("#genero");
const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = nombreInput.value.trim();
  const genero = generoSelect.value;

  div.innerHTML = "<p>" + saludar(nombre, genero) + "</p>";
});
