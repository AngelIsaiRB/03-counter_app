const { getHeroeById, getHeroesByOwner } = require("../../base-pruebas/08-imp-exp");
const { default: heroes } = require("../../data/heroes");

describe("pruebas en funciones de heroes",()=>{

    test("debe de retornar un herore  ",()=>{

        const id=1;
        const heroe = getHeroeById(id);        
        const heroeData = heroes.find(h=> h.id===id);
        expect(heroe).toEqual(heroeData);

    });
    test("debe de retornar undefined si herore no existe ",()=>{

        const id=10;
        const heroe = getHeroeById(id);        
        
        expect(heroe).toBe(undefined);

    });

    test("debe retornar aun arreglo con los herores" ,()=>{
        const owner ="DC" ;
        const heroess = getHeroesByOwner(owner);
        const spectedHeroes = heroes.filter((h)=>h.owner===owner);
        expect(heroess).toEqual(spectedHeroes);
    });

    test("debe retornar un arreglo con los heroes de marvel",()=>{

        const owner="Marvel";
        const heroes= getHeroesByOwner(owner);
        expect(heroes.length).toBe(2);

    });

});