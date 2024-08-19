import saludar from "./sumador.js";

describe("Saludar", () => {
  it("debería saludar con 'Hola!'", () => {
    expect(saludar()).toEqual("Hola!");
  });

  it("debería saludar por nombre", () => {
    expect(saludar("Juan")).toEqual("Hola, Juan!");
  });

  it("debería saludar por nombre y género masculino", () => {
    expect(saludar("Juan", "hombre")).toEqual("Hola, Juan joven!");
  });

  it("debería saludar por nombre y género femenino", () => {
    expect(saludar("Maria", "mujer")).toEqual("Hola, Maria señorita!");
  });

  it("debería saludar por nombre y género no especificado", () => {
    expect(saludar("Alex", "otro")).toEqual("Hola, Alex!");
  });
});
