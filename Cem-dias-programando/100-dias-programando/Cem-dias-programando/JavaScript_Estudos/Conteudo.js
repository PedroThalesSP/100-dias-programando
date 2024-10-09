
// //--------------------saida de informação------------------------------------------------------------------------------------------------------------------
// console.log("Olá,mundo!");
// // Uso das variaveis
// let valor = "Pedro";
// console.log(valor);
// valor = "Thales";
// console.log(valor);



// //----------------------------Constantes------------------------------------------------------------------------------------------------------------------
// //Constantes são variaveis que nunca mundam e não podem ser sub-escritas e sempre em letras minusculas; no let devemos usar o "_" ou a segunda palavra maiúscula

//  const nome = "Thiago";
// //nome = Pedro; erro em caso de execução.
// console.log (nome);








// //------------------------Diferentes tipos de valores----------------------------------------------------------------------------------------------------

// //Number = pode ser inteiro ou real (100. -100, 10.10 ;),mas podem ter valores como infinity -infinity (divididos por 0) ou NaN (strings dividitas por um numero). 

// //BigInt = valores muito grandes ou muito pequenos.

// //String = Podem ser escritas com "" ou '' ou com ´´ (nos primeiros casos são iguais, mas a terceira são aspas com funcionalidades.)
// let nome = "pedro" ;
// console.log (` o nome dele é ${nome}`);








// //------------------------Boolean------------------- ----------------------------------------------------------------------------------------------------
// let sim = true;
// let nao = false;

// let resultado = 10 > 5;
// console.log(resultado);









// //------------------------Null value------------------------------------------------------------------------------------------------------------------
// //Serve para que a variavel não fique vazia, mas ela é subistituida depois, ao longo do projeto
// let idade = null;
// console.log(null);






// //------------------------Underfined value------------------------------------------------------------------------------------------------------------------
// //É quando uma viariavel esta atribuida, mas seu valor não foi definido
// let nome;
// console.log (nome)










// //------------------------objetos, Símbolos------------------------------------------------------------------------------------------------------------------


// //verei depois;

// // Podemos usar a função Typeof para ver qual o valor pertence a variavel
// let valor = true;
// console.log (typeof(valor));

// Variavel, booleanos, conversão de strings para numeros e calculos e concatenação. 








// --------------------------------------comparadores if, if else e else ----------------------------------------------------------------------------------------



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



//// --------------------------------------Conditional operator  "?" e ";" // ------------------------------------------------------------------------------------------------------------------

/*
let nome = "João";
let verificacao = nome == "João" ? "Sim" : "Não";
console.log(" A verificação tem o resultado " + verificacao);
*/




// -------------------------------------- Ciclos ------------------------------------------------------------------------------------------------------------------

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
*/




// -------------------------------------- Object------------------------------------------------------------------------------------------------------------------------------------------------------

// Em JavaScript, um objeto é uma entidade independente, com propriedades e tipos. Compare-o com uma xícara, por exemplo. 
// Uma xícara é um objeto, com propriedades. Uma xícara tem uma cor, uma forma, peso, um material de composição, etc. Da mesma forma, 
// objetos em JavaScript podem ter propriedades, que definem suas características.

/*

let pessoa = { 
    nome: "Pedro",
    idade: 20,
    feliz: true,
    pets: ["dog", "cat"],

    //objetos dentro de objetos
    carros: {
        Corsa: {
            placa: "J202302",
            cor: "green",
        },
        Uno: {
            placa: "1010K22",
            cor: "vermelha",
        },
    },


    //Funções / metodos dentro do objeto
    andar: function(km){
        alert(pessoa.nome + " andou " + km)
        
    }

  }

  pessoa.andar(10)
//modificações ou incrementos
pessoa.nome = "Thales"
pessoa.pets [2] = "bird"

console.log(pessoa.pets[2]);
console.log(pessoa.carros.Corsa.placa);

*/



// -------------------------------------- Array------------------------------------------------------------------------------------------------------------------------------------------------------
/* O objeto Array do JavaScript é um objeto global usado na construção de 'arrays': objetos de alto nível semelhantes a listas.
let lista = [ "leite", "ovos", "torta", "Arroz"];
console.log(lista.length) // ver o tamanho da lista
console.log(lista[0])

let adicionar = lista.push("maça", "macarrão", "fiagado"); // Novos elementos foram adicionados na lista
console.log(lista.length);
console.log(lista);

let remover = lista.pop([7]) // removeu elementos da lista
console.log(lista);

let procurar = lista.indexOf("torta"); // procurar um item da lista
console.log(procurar);
*/





// -------------------------------------- hoisting e Escopo ------------------------------------------------------------------------------------------------------------------------------------------------------


/*
- Definição de Hoisting: JavaScript Hoisting se refere ao processo pelo
qual o interpretador parece mover a declaração de funções, variáveis, classes ou 
importações para o topo de seu escopo , antes da execução do código.
*/

// console.log(nome); // sabe que existe, mas deixa indefinida
// var nome = "Pedro";

// {
//     console.log(nome)  // Já aqui o código consegue ler
// }

// - Definição de Escopo: O escopo é o contexto atual de execução no qual valores e 
// expressões são "visíveis" ou podem ser referenciados. Se uma variável ou expressão 
// não estiver no escopo atual, ela não estará disponível para uso. Os escopos também 
// podem ser dispostos em camadas em uma hierarquia, de modo que os escopos filhos tenham 
// acesso aos escopos pais, mas não vice-versa.


// Erro, pois estamos usando o let e este não consegue let um escopo interno, além de declarações anteriores.
// console.log(sobrenome); 


//variaveis fora do escopo
// let sobrenome = "Thales";
// console.log(sobrenome)

// { escopo interno e independente do de fora, mesmo que tenha o mesmo nome definido.


    // Aqui o código consegue ser lido, porém dentro do escopo criado e nada fora. 
    // (Olhar o exemplo anterior e ver o erro que pode ocasionar e ver que são duas variaveis com o mesmo nome, mas diferentes)
    // let sobrenome = "ThalesSP";
    // console.log(sobrenome)  // Já aqui o código consegue ler
// }


// -------------------------------------- Boas Práticas em nome de variaveis------------------------------------------------------------------------------------------------------------------------------------------------------
/*

explique sua variavel
- Sempre deixe claro no nome da variavel o que esta esta fazendo
    ex: let nome = "Pedro";
    ex: let CPF = 03651612100;

snake_Case
- Signififica que sempre que houver um espaço entre um nome e outro fazer a utilização do "_".
    ex: let nome_completo = "";
    ex: let CPF_do_usuario = 03651612100;

camelCase
- Siginifica que entre um espaço e outro haverá a utilização de uma letra maiúscula.
    ex: let nomeDoUsuario = "";
    ex: Let CPF_Do_Usuario = underfined;

Sempre use nomes em inglês, pois seu código deve ser universal.
    ex: let UserName = "";
    ex: let CPF_of_user = underfined;

*/