import React from "react";

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

//function
const funcSoma = soma;
console.log(funcSoma(4, 5));

console.log(soma(1, 2));
function soma(c, d) {
  return c + d;
}

//JS Basics Parte 2:

//string
const a = "Moisés";
const string = `Hello ${a}`;
console.log(string);

function App() {
  return <div className="App"></div>;
}

export default App;
