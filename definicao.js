/*
var obj = {
    nome: "Jon",
    sobrenome: "Snow",
    idade: 16,
    apresentar: function(){ // neste  caso a função anônima é declarada dentro do objeto.
        console.log("Olá, eu sou " + this.nome + " " + this.sobrenome + ".");
    }
};
*/
var obj = {
    nome: "Jon",
    sobrenome: "Snow",
    idade: 16,
    apresentar: apresentacao // Equanto nesta função é declarada fora do objeto sendo chamada para o atributo apresentar.
};

function apresentacao(){
    console.log("Olá, eu sou " + this.nome + " " + this.sobrenome + ".");    
}

console.log(obj.nome,obj.sobrenome);
obj.apresentar();