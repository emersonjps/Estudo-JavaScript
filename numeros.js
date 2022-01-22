var x1 = 34.00; // um nummero flotuante definido com ('.' ponto) igual o padrão americano
var x = 456e5; // 45600000 o numero está sendo armazena em anotação cientifica com a elevação de vezes que ele vai ser multiplicado
var y = 123e-6; // 0.000123 começando a contar depois do ponto
// lembrando o javascript guarda numeros inteiros ate 15 digitos e decimais até 16 digitos.
var z = 999999999999999;//inteiro
var z1 = 0.999999999999999;// decimal

var a = 0x100;// hexadecimal 0x100 = 256
//console.log(a);

var b = 07777;

console.log(b);
console.log(b.toString(16));// define a base do operado 8 octal, 16 decimal, 2 binario, 

console.log(x.toExponential());// imprime a anotação em exponecial

console.log(y.toFixed(2));// aredendo os valores e formantando com a quantidade de casas decimais que nesse caso é  igual a zero.
console.log((3.357).toFixed(2))// irá formatar arredondando para dinheiro com apenas duas casas apois o ponto.


console.log((3.357).toPrecision(2))// conta o total de numeros a ser exibido 


