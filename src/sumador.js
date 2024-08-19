function saludar(nombre, genero) {
  let saludo = "Hola";

  if (nombre) {
    saludo += `, ${nombre}`;
  }

  if (genero) {
    if (genero === "hombre") {
      saludo += " joven!";
    } else if (genero === "mujer") {
      saludo += " señorita!";
    } else {
      saludo += "!";
    }
  } else {
    saludo += "!";
  }

  return saludo;
}

export default saludar;
