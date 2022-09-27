// 1. Booleanos ---

booleano1 = true;
booleano2 = false;

const booleanoAnd = booleano1 && booleano2;
console.log("booleanoAnd = " + booleanoAnd);

const booleanoOr = booleano1 || booleano2;
console.log("booleanoOr = " + booleanoOr);

const booleanoNot = !booleano1;
console.log("booleanoNot = " + booleanoNot);

const booleanoMix0 =
  (booleano1 || booleano2) && (booleano1 || (!booleano1 && !booleano2));
console.log("booleanoMix0 = " + booleanoMix0);

// 2. Operadores ---

const valorDivision = (17 / 3).toFixed(2);
console.log("valorDivision = " + valorDivision);

const valorResto = 17 % 7;
console.log("valorResto = " + valorResto);

// 3. Lógica de programación ---

const a = 9;
const b = "9";

const iguales = a == b ? "Son iguales" : "No son iguales";
console.log("Son iguales a y b? = " + iguales);

const estrictIguales = a === b ? "Son iguales" : "No son iguales";
console.log("Son estrictamente iguales a y b? = " + estrictIguales);

// ---

const mochila = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

if (mochila.length > 10) {
  console.log("No puedo cargar con tantas cosas");
} else if (mochila.length > 2 && mochila.length < 10) {
  console.log("Que bien voy con mi mochila");
} else {
  console.log("Creo q no necesito una mochila");
}

// ---

let contarHasta10 = 0;

while (contarHasta10 < 10) {
  contarHasta10++;
}
if (contarHasta10 === 10) {
  console.log(contarHasta10);
}

// ---

const diaFestivo = true
  ? console.log("Hoy no trabajo")
  : console.log("Hoy trabajo");

// ---

const arrayBucle = [];

for (let i = 4; i <= 18; i++) {
  let newElement = i;
  arrayBucle.push(newElement);
}
console.log(arrayBucle);

// ---

let resultado = 0;

for (let numero of arrayBucle) {
  resultado += numero;
}
console.log(resultado);

// ---

const frase = {
  alumno1: ["Con", "Sofia", "aprendiendo", "bucles"],
};

for (let palabra of frase.alumno1) {
  console.log("for of = " + palabra);
}

for (let palabras in frase.alumno1) {
  if (palabras < frase.alumno1.length) {
    console.log("for in = " + frase.alumno1[palabras]);
  }
}

// ---

const multiploDe3 = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

let i = 0;

let contador = 0;

while (i < multiploDe3.length) {
  i++;
  if (i % 3 === 0) {
    console.log(i + " Patata");
  }
}
