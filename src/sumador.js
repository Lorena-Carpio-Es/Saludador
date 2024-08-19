function saludar(nombre, genero, edad) {
  let saludo = "Hola";

  if (nombre) {
    saludo += `, ${nombre}`;
  }

  if (genero) {
    if (genero === "hombre") {
      saludo += " señor";
    } else if (genero === "mujer") {
      saludo += " señora";
    } else {
      saludo += "";
    }
  }

  if (edad) {
    if (edad < 18) {
      saludo += " joven!";
    } else if (edad >= 18 && edad < 65) {
      saludo += " adulto!";
    } else {
      saludo += " mayor!";
    }
  } else {
    saludo += "!";
  }

  return saludo;
}

export default saludar;
