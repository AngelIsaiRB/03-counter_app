import React from 'react';
// import React, { Fragment } from 'react';

// functional components(SFC)

const PrimeraApp = ()=>{
    const saludo="hola mundo const";
    const boleano = true;
    const areglo = [1,2,3,4,5,6];
    const objeto = {
        nombre:"isai",
        edad : 23,
    }
    return (
        <>
            <h1>{saludo, boleano} </h1>
            <h2>{areglo}</h2>
            <pre>{ JSON.stringify(objeto,null,3)}</pre>
            <p>Mi primera app</p>
        </>
    );

}

export default PrimeraApp;