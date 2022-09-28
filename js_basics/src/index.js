import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//JS Basics Parte 1:

//var
var variavel1 = 10;
console.log(variavel1);

//let
let variavel2 = 10;
console.log(variavel2);

let variavel3 = 10;
console.log(variavel3);
variavel3 = variavel3 + 3;
console.log(variavel3);

//const
const variavel4 = 10;
console.log(variavel4);

const soma2 = function soma2(a, b) {
  return a + b;
};
console.log(soma2(1, 3));
