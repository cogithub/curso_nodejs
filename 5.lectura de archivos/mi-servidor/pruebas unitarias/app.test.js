import { Calculos } from "./calculos.js";
import { describe, test, expect, beforeEach } from "@jest/globals";
import pkg from '@jest/globals';

describe("mi-test", () => {
    let calculos;
    beforeEach(() => {
        calculos = new Calculos();
    });

    test("*** la sumatoria debe dar ...", () => {
        const resultadoSuma = calculos.suma(5, 3);
        expect(resultadoSuma).toBe(8);
    });
});
