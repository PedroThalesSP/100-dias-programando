// // Alguns exercicios.

// //Dia 1 e 2
// let a = soma;
// soma = 10;

// let b = 5;
// subtracao = b;

// resultado = (soma - subtracao);
// console.log (resultado);

// //--------------------saida de informação--------------------------------------
// console.log("Olá,mundo!");
// // Uso das variaveis
// let valor = "Pedro";
// console.log(valor);
// valor = "Thales";
// console.log(valor);

// //--------------------exercicios 01.10.24--------------------------------------
// let variavelA = variavelB = variavelC = 100, variavelD = 1000;
// // console.log(variavelA, variavelB, variavelC, variavelD);

// let a = 10, b = 20, c = a;
// console.log (c);

// a = b
// b = c
// console.log(a,b);

// //----------------------------Constantes--------------------------------------
// //Constantes são variaveis que nunca mundam e não podem ser sub-escritas e sempre em letras minusculas; no let devemos usar o "_" ou a segunda palavra maiúscula

//  const nome = "Thiago";
// //nome = Pedro; erro em caso de execução.
// console.log (nome);

// //------------------------Diferentes tipos de valores------------------------

// //Number = pode ser inteiro ou real (100. -100, 10.10 ;),mas podem ter valores como infinity -infinity (divididos por 0) ou NaN (strings dividitas por um numero). 

// //BigInt = valores muito grandes ou muito pequenos.

// //String = Podem ser escritas com "" ou '' ou com ´´ (nos primeiros casos são iguais, mas a terceira são aspas com funcionalidades.)
// let nome = "pedro" ;
// console.log (` o nome dele é ${nome}`);


// //------------------------Boolean------------------- ------------------------
// let sim = true;
// let nao = false;

// let resultado = 10 > 5;
// console.log(resultado);



// //------------------------Null value--------------------------------------
// //Serve para que a variavel não fique vazia, mas ela é subistituida depois, ao longo do projeto
// let idade = null;
// console.log(null);


// //------------------------Underfined value--------------------------------------
// //É quando uma viariavel esta atribuida, mas seu valor não foi definido
// let nome;
// console.log (nome)

// //------------------------objetos, Símbolos--------------------------------------
// //verei depois;

// // Podemos usar a função Typeof para ver qual o valor pertence a variavel
// let valor = true;
// console.log (typeof(valor));

// Variavel, booleanos, conversão de strings para numeros e calculos e concatenação. 

///////////     comparadores if, if else e else   //////////////////////

/*

a estutura é a seguinte
let idadeA = 20;
let idadeB = 20;

if (idadeA > idadeB) {
    console.log ("A idade 'A' é maior que idade 'B' ,sendo esta = " + idadeA)
}

else if (idadeA < idadeB) {
    console.log("A idade de 'B'  é maior que idade de 'A' , esta= " + idadeB)
}

else {
    console.log(" A idade 'A' é igual a idade 'B' ");
}
*/


//////////////// Conditional operator  "?" e ";" //////////////////

/*
let nome = "João";
let verificacao = nome == "João" ? "Sim" : "Não";
console.log(" A verificação tem o resultado " + verificacao);
*/


///////////////////////////// Ciclos /////////////////////////////////

/* 

While
a estutura é a seguinte

While (condição) {
código é executado
 }

let numero = 1;
while ( numero <= 10){
    console.log(numero)
    numero++;
}

let numeroDois = 10;
    while (numeroDois >= 1 ) {
    console.log(numeroDois);
numeroDois--;
}

*/

//Do ... while

// let numero = 1;
// do {
//     console.log(numero);
//     numero++;
// } while (numero <= 10);

// Quebra de ciclos

// let numero = 1;
// do {
//     console.log(numero);
//     numero++;
//     if (numero > 6 ) break;
// } while (numero <= 10);



