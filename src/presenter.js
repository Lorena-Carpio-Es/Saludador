import saludar from "./sumador.js";

const nombreInput = document.querySelector("#nombre");
const generoSelect = document.querySelector("#genero");
const edadInput = document.querySelector("#edad");
const idiomaSelect = document.querySelector("#idioma");
const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = nombreInput.value.trim();
  const genero = generoSelect.value;
  const edad = parseInt(edadInput.value, 10);
  const idioma = idiomaSelect.value;

  div.innerHTML = "<p>" + saludar(nombre, genero, edad, idioma) + "</p>";
});
