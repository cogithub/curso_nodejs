// Importar el módulo a probar
import { Calculos } from "./calculos.js";

describe("Pruebas de Calculos", () => {
    let calculos;

    beforeEach(() => {
        calculos = new Calculos();
    });

    test("La sumatoria debe ser correcta", () => {
        const resultado = calculos.suma(5, 3);
        expect(resultado).toBe(8); // Verifica si el resultado es 8
    });

    test("La resta debe ser correcta", () => {
        const resultado = calculos.resta(5, 3);
        expect(resultado).toBe(2); // Verifica si el resultado es 2
    });
});
