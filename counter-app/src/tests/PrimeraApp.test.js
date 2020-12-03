import React from 'react';
import  { shallow } from 'enzyme';

// const { render } = require("@testing-library/react");
const { default: PrimeraApp } = require("../PrimeraApp");

describe('pruebas en  <primeraAPP/> ', () => {
    
    // test('should mostrar el mensaje "Hola,soy isai "', () => {

    //     const saludo = "hola, soy isai!";
    //     const {getByText} = render(<PrimeraApp saludos={saludo}/>);

    //     expect(getByText(saludo)).toBeInTheDocument();

    // });

    test('should de mostrar <primeraApp/> correctamente', () => {

        const saludo = "hola, soy ";
        const wrapper = shallow(<PrimeraApp saludos={saludo}/>);
        expect(wrapper).toMatchSnapshot();
    });

    test('should mostrar el subtitulo enviado por props', () => {
         
        const saludo = "hola, soy goku";
        const subTitulo = "hola, soy una subtitulo";
        const wrapper = shallow(<PrimeraApp saludos={saludo} subtitulo={subTitulo}/>);
        const textoParrafo = wrapper.find('p').text();        
        expect(textoParrafo).toBe(subTitulo);

    });
    
    
    
});
