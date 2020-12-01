const { getHeroeByIdAsync } = require("../../base-pruebas/09-promesas");
const { default: heroes } = require("../../data/heroes");

describe('pruebas con promesas', () => {
    test('debe retornar un heore async', (done) => {
        
        const id=1;
        getHeroeByIdAsync(id)
        .then(heroe=>{
            expect(heroe).toBe(heroes[0]);
            done();
        });
    });

    test('debete de optener un error si el heroe no existe ', (done) => {
        const id=10;
        getHeroeByIdAsync(id)
        .catch( error=>{
                expect(error).toBe('No se pudo encontrar el héroe');
                done();
            } );

        
    });
    
    
});
