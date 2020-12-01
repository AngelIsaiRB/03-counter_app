const { getUser, getUsuarioActivo } = require("../../base-pruebas/05-funciones");


describe("pruebas en 05-funciones ", ()=>{

    test('debe de retornar un objeto ', () => {
        
        const userTest ={
            uid: 'ABC123',
        username: 'El_Papi1502'
        }

        const user =getUser();

        expect(user).toEqual(userTest);

    });

    test('debe retornar un objeto con nombre que elija el usuario ', () => {
            const nombre= "isai";
            const userTest ={
                uid: 'ABC567',
            username: nombre
            }
            const userActivo = getUsuarioActivo(nombre);
            expect(userActivo).toEqual(userTest);
    })
    
    

});