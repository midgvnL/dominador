let titulo = document.getElementById("titulo");
console.log(titulo[0]);

//   chamnado por classe
let esportes = document.getElementsByClassName (".esportes");
console.log(esportes[0]);
let esportes1 = document.getElementsByClassName (".esportes");
console.log(esportes1[0]);
let esportes2 = document.getElementsByClassName (".esportes");
console.log(esportes2[0]);
let esportes4 = document.getElementsByClassName (".esportes");
console.log(esportes4[0]);

//selecionando pelo nome da tag
let LIespF = document.getElementsByTagName("li");
console.log(LIespF[0]);
let LIespB = document.getElementsByTagName("li");
console.log(LIespB[1]);
let LIespV = document.getElementsByTagName("li");
console.log(LIespV[2]);
let LIespN = document.getElementsByTagName("li");
console.log(LIespN[3]);

//Selecionado pelo query selector
// "#"= id "."= classe

let tituloQS = document.querySelector("#titulo"+ tituloQS)
let LIespFQs = document.querySelector(".esportes" + li[0].textContent)
let LIespBQs = document.querySelector(".esportes" + li[1].textContent)
let LIespVQs = document.querySelector(".esportes" + li[2].textContent)
let LIespNQs = document.querySelector(".esportes" + li[3].textContent)