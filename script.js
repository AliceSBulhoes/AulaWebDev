/*DECLARANDO VARIÁVEL*/
// Variável com valor indefinido
let nome;
console.log(nome);

//Variável vazia
let vazia = null;
console.log(vazia);

//Variável com valor
let valor = "1000";
console.log(valor);


//Manipulação de textos e números

let num = 27.05;
console.log(num)
console.log(parseInt(num));

let num2 = "2006.05"
console.log(num2)
console.log(parseFloat(num2))
console.log(parseInt(num2))

let num3 = 99;
console.log(num3.toString());


//Verificando o tipo da variável

let numero = 27.05
let numero2 = numero.toString()
let verificar = typeof numero2
console.log(verificar)


//Metodo lenght

let exemplo = "Sou desenvolvedor FullStack"
console.log(exemplo.length)
//alert(exemplo.length)
document.write(exemplo.length)

let texto = "A CP está chegando muhahahaha"
console.log(texto.indexOf("CP"))

let texto2 = "A CP de WebDeveloment"
console.log(texto2.lastIndexOf("de"))

let texto3 = "precisa tirar nota boa"
console.log(texto3.slice(3,7))


//Concatenação

let nome1 = "Fiap"
console.log("O Jubikeu é aluno na "+ nome1)

let nome2 = "São Paulo"
console.log("O melhor time do mundo é "+ nome2)


//Estrutura condicional

//If
let valo = 27
let valo2 = 8
if(valo>valo2){
    console.log("Valor é maior");
}else{
    console.log("Valor é menor");
};

let idade = 14

if(idade == 18){
    document.write("Você já pode beber!")
}else if(idade<=17){
    document.write("Pfv não crie um RG falso para beber, ainda falta um tempo")
}else{
    document.write("Porque está pensando em beber? Pare com esses pensamentos idiota criança!")
}

//Operador ternario

let pessoa = idade >=18 ? "Adulto":"Menor de Idade"
document.write(pessoa)