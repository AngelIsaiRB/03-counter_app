
 import {getSaludo} from '../../base-pruebas/02-template-string.js';

describe("pruebas en 02-temple-strig", ()=>{

    test('prueba en el metodo getSaludo', () => {

        const nombre ="isai";
        
        const saludo = getSaludo(nombre);
        
        expect(saludo).toBe("Hola "+nombre);
        
    });

    // get saludo debe retornar Hola carlos si no hay arguemnto nombre

    test('retorna Hola carlos si no argumento', () => {
          const saludo = getSaludo();  
          expect(saludo).toBe("Hola carlos");
    })
    
    

})