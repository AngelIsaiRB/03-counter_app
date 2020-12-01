const { getImagen } = require("../../base-pruebas/11-async-await");

describe('pruebas con async y await and fecth ', () => {


    test('should returnar el url de la imagen ', async () => {
        
        const url = await  getImagen();
        
        // expect( typeof url).toBe("string");
        expect(url.includes("https://")).toBe(true);

    });
    
});
