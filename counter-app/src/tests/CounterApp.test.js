import React from 'react';
import  { shallow } from 'enzyme';
import CounterApp from '../CounterApp';

describe('pruebas en el <CounterApp/>', () => {
    
    test('should de regresar el valor predefinido de 10', () => {
        const wrapper =  shallow(<CounterApp />); 
        expect(wrapper).toMatchSnapshot();
    });
    
    test('should de regresar el valor predefinido de 10', () => {
        const valueI=100;
        const wrapper = shallow(<CounterApp value={valueI}/>);
        const textValor = wrapper.find("h2").text().trim();
        expect(textValor).toBe(`${valueI}`);
        
    });
    

});
