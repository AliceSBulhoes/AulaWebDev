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