import React from "react";
import ReactDom from "react-dom";
import PrimeraApp from "./PrimeraApp";
import "./index.css"
import CounterApp from "./CounterApp";


const divRoot = document.querySelector("#root");


// ReactDom.render(<PrimeraApp saludos="hola, soy isai!" />,divRoot);

ReactDom.render(<CounterApp value={10} />,divRoot);