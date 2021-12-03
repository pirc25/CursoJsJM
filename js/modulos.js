import saludar, { Saludar, PI, usuario } from "./constantes.js";
import { aritmetica } from "./aritmetica.js";

console.log("Archivo modulos.js");
console.log(PI, usuario);
console.log(aritmetica.sumar(5, 2));

console.log(aritmetica.restar(5, 3));
saludar();

let saludo = new Saludar();
saludo;
