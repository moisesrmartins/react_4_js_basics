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

//object
const object = {
  Name: "Moisés",
  LastName: "Rodrigues Martins",
  Adress: {
    Country: "Brazil",
    State: "Minas Gerais",
    City: "Araguari",
  },
};
console.log(object.Name, object.LastName, object.Adress);

const n = "Name";
console.log(object[n]);

//array
const array = [1, 2, 3, "Hi"];
console.log(array[0]);
console.log(array[3]);

//keys
const object2 = {
  Name: "Moisés",
  LastName: "Rodrigues Martins",
  Adress: {
    Country: "Brazil",
    State: "Minas Gerais",
    City: "Araguari",
  },
};

const keys = Object.keys(object2);
console.log(keys);
console.log(keys[0]);

const object3 = {
  Country: "Brazil",
  State: "Minas Gerais",
  City: "Araguari",
};

const keys2 = Object.keys(object3);
keys2.forEach((item) => {
  console.log(item);
  console.log(object3[item]);
});

const object4 = {
  Day: "21",
  Month: "09",
  Year: "2003",
};

const keys3 = Object.keys(object4);
const values = keys3.map((item2) => {
  return object4[item2];
});
console.log(values);

function App() {
  return <div className="App"></div>;
}

export default App;
