import React from 'react'


const { render } = require("@testing-library/react");
const { default: PrimeraApp } = require("../PrimeraApp");

describe('pruebas en  primeraAPP', () => {
    
    test('should mostrar el mensaje "Hola,soy isai "', () => {

        const saludo = "hola, soy isai!";
        const {getByText} = render(<PrimeraApp saludos={saludo}/>);

        expect(getByText(saludo)).toBeInTheDocument();

    });
    
});
