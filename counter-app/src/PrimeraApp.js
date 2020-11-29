import React from 'react';
import PropTypes from "prop-types";
// import React, { Fragment } from 'react';

// functional components(SFC)

const PrimeraApp = ({saludos, subtitulo }) =>{


    const saludo="hola mundo en vareable";
    const boleano = true;
    const areglo = [1,2,3,4,5,6];
    const objeto = {
        nombre:"isai",
        edad : 23,
    }
   
    return (
        <>
            <p>{boleano}</p>
            <h1>{saludo} </h1>
            <h1>{saludos} </h1>
            <h1>{subtitulo} </h1>
            <h2>{areglo}</h2>
            <pre>{ JSON.stringify(objeto,null,3)}</pre>
            {/* <pre>{ JSON.stringify(objeto,null,3)}</pre> */}
            <p>Mi primera app</p>
        </>
    );

}
        PrimeraApp.propTypes={
            saludos: PropTypes.string.isRequired,
            
        }
        PrimeraApp.defaultProps = {
            subtitulo:"soy un subtitutlo"

        }



export default PrimeraApp;