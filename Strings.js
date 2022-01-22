var s = "The winter is coming. It's really coming!";
console.log(s.indexOf("coming")); // encontra onde a palavra coming esta posicionada 

console.log(s.lastIndexOf("coming")); // encontra onde a ultima palavra coming esta posicionada

console.log(s.slice(4, 10)); // corta uma string com o paramentro inicial e final, nesse caso .slice(4, 10)
console.log(s.slice(4, -8)); // onde irá contar do winter até o really pois o -8 serve para contar de trás para a frente. 

console.log(s.substr(4, 6)); // substr tem um argumento inicial e um segundo argumente de quantos caracters apois iniciar irá contar.

console.log(s.replace("winter", "summer")); // troca as palavras.
console.log(s.toUpperCase()); // deixa tudo em caixa alta 
console.log(s.toLowerCase()); // deixa tudo em minusculo

console.log(s.concat("!", " inserir mais atraves de concatenação"));//inseri mais atraves de concatenação

var nome = "Ned, Jon, Robb, Bran, Arya, Rickon";
console.log(nome.split(", "));  // separa as palavras em um arrys com um parametro para tal divisão que nesse caso é o ", " (Sirgula e espaço)
