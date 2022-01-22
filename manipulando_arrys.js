var array = "Ned Jon Robb Bran Rickon".split(" "); // trasnforma uma string em um array
console.log(array);

console.log(array.toString());
console.log(array.join(' / ')); // Faz o oposto do split, juntando todos com um parametro que no caso é o " " (Espaço)

array.push("Sansa");  // adiciona mais um item no arry sendo que no final
console.log(array); 

array.unshift("Sansa"); // adiciona um elemento no inicio do array
console.log(array);     

//array.pop();// tira o ultimo item do array
console.log(array);

var item = array.pop(); // onde a variavel item irá guardar o elemento tirado do array
console.log(item);

item = array.shift();// ira tirar e armazenar na variavel o primeiro item do array
console.log(item);
console.log(array);


array[1] = "Jon Snow";
console.log(array);

var slice = array.slice(3, 4); // pega apenas uma palavra do array difinindo a posicao inicial e final
console.log(slice);

var splice = array.splice(1, 1, "Arya", "Sansa"); // pega de umm array com a posicão que é o primeiro indice e a quantidade que é o segundo indece, podendo também inserir mais itens.
console.log(splice);// Jon Snow foi removida e Arya e Sansa incluidas modificando o arrys origunal enquanto o slice não.
console.log(array);

array.splice(3, 1);// apenas removi um item na posição desejada e a quantidade desejada
console.log(array);

array = array.concat(splice, slice); // irá conctenar e adcionar itens ao array nesse caso o splice contendo Jon Snow
console.log(array);

