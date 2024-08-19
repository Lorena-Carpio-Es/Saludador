import saludar from "./sumador.js";

describe("Saludar", () => {
  it("debería saludar con 'Hola!'", () => {
    expect(saludar()).toEqual("Hola!");
  });

  it("debería saludar por nombre", () => {
    expect(saludar("Juan")).toEqual("Hola, Juan!");
  });

  it("debería saludar por nombre y género masculino", () => {
    expect(saludar("Juan", "hombre")).toEqual("Hola, Juan señor!");
  });

  it("debería saludar por nombre y género femenino", () => {
    expect(saludar("Maria", "mujer")).toEqual("Hola, Maria señora!");
  });

  it("debería saludar por nombre y género no especificado", () => {
    expect(saludar("Alex", "otro")).toEqual("Hola, Alex!");
  });

  it("debería saludar por nombre, género masculino y edad joven", () => {
    expect(saludar("Carlos", "hombre", 17)).toEqual("Hola, Carlos señor joven!");
  });

  it("debería saludar por nombre, género femenino y edad adulta", () => {
    expect(saludar("Ana", "mujer", 30)).toEqual("Hola, Ana señora adulta!");
  });

  it("debería saludar por nombre, género no especificado y edad mayor", () => {
    expect(saludar("Sofía", "otro", 70)).toEqual("Hola, Sofía mayor!");
  });
});
