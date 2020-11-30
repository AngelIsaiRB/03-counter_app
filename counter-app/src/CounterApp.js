import React, {useState} from 'react';
import PropTypes from "prop-types";


const CounterApp = ({value}) =>{

    const [counter, setCounter ]=useState(0);



    // handleAndd
    const handleAdd=(e)=>{
        setCounter(counter+1);
    }

    return <> 
            <h1>CounterApp</h1>
            <h1>{counter}</h1>
            {/* <button onClick={()=>handleAdd()}</button>}> */}
            <button onClick={handleAdd}>
                +1
            </button>
            </>;
};

CounterApp.propTypes={
    value: PropTypes.number,
}

CounterApp.defaultProps = {
    value: 0,

}

export default CounterApp;

