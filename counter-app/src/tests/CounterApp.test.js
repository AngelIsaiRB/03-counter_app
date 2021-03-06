import React from 'react';
import  { shallow } from 'enzyme';
import CounterApp from '../CounterApp';

describe('pruebas en el <CounterApp/>', () => {
    let wrapper =  shallow(<CounterApp />);     
    beforeEach(()=>{
         wrapper =  shallow(<CounterApp />); 
    });
    
    test('should de regresar el valor predefinido de 10', () => {
        expect(wrapper).toMatchSnapshot();
    });
    
    test('should de regresar el valor predefinido de 10', () => {
        const valueI=100;
        const wrapper = shallow(<CounterApp value={valueI}/>);
        const textValor = wrapper.find("h2").text().trim();
        expect(textValor).toBe(`${valueI}`);
        
    });

    test('should de incrementar con el boton +1', () => {

       wrapper.find("button").at(0).simulate("click"); 
       
       const textValor = wrapper.find("h2").text().trim();
       expect(textValor).toBe("11")       
    });

    test('should de decrementar con el boton -1', () => {

       wrapper.find("button" ).at(1).simulate("click");        
       const textValor = wrapper.find("h2").text().trim();
       expect(textValor).toBe("9");
    });
    test('should de colorcar el valor por defecto conel botn reset', () => {
        const valueI=105;
        const wrapper = shallow(<CounterApp value={valueI}/>);
        wrapper.find("button").at(0).simulate("click"); 
        wrapper.find("button").at(0).simulate("click"); 
        wrapper.find("button").at(2).simulate("click"); 
        const textValor = wrapper.find("h2").text().trim();
        expect(textValor).toBe("105")    
        
    });
    
    

});
