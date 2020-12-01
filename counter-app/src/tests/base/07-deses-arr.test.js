const { retornaArreglo } = require("../../base-pruebas/07-deses-arr");

describe("pruebas en desestructuracion" , ()=>{

    test('debe retornar un string yy un numero ', () => {
        const [letras, numeros] = retornaArreglo();


        expect( typeof letras).toBe("string");
        expect( typeof  numeros).toBe("number");
        // expect(arr).toEqual(["ABC",123])
    })
    

})