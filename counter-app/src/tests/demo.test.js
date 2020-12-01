// console.log("run test")


describe("pruebas en el archivo demo.test.js",()=>{
    
    
    test('deben ser iguales los strings ', () => {
        // 1. inizialicacion 
        const mensaje="hola mundo";
    
        // 2. estimulo
        const mensaje2 = `hola mundo`;
    
        // 3. observar el comportamiento
        expect(mensaje).toBe(mensaje2);
    });

    
});
