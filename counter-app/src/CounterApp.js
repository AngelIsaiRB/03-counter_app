import React, {useState} from 'react';
import PropTypes from "prop-types";


const CounterApp = ({value}) =>{

    const [counter, setCounter ]=useState(value);



    // handleAndd
    const handleAdd=(e)=>{
        setCounter(counter+e);
        // setCounter((c)=>c+1);
    }
    

    const handleReset=()=>{
        setCounter(0);
    }

    return <> 
            <h1>CounterApp</h1>
            <h2>{counter}</h2>
            {/* <button onClick={()=>handleAdd()}</button>}> */}
            <button onClick={()=>handleAdd(1)}>+1</button>
            <button  onClick={()=>handleAdd(-1)}>-1</button>
            <button onClick={handleReset}>0</button>
            </>;
};

CounterApp.propTypes={
    value: PropTypes.number,
}

CounterApp.defaultProps = {
    value: 10,

}

export default CounterApp;

