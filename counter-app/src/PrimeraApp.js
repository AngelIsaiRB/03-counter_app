import React from 'react';
import PropTypes from "prop-types";
// import React, { Fragment } from 'react';

// functional components(SFC)

const PrimeraApp = ({saludos, subtitulo }) =>{


    return (
        <>
           
            <h1> {saludos} </h1>
            <p>{subtitulo}</p>
            
        </>
    );

}
        PrimeraApp.propTypes={
            saludos: PropTypes.string.isRequired,
            
        }
        PrimeraApp.defaultProps = {
            subtitulo:"Soy un subtitutlo"

        }



export default PrimeraApp;