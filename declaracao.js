function dizerOi(nome){ // função normal
    console.log("Olá "+ nome);
}

var dizerOla = function (nome){ // função anônima sem name além da variavel
    console.log("Olá "+ nome);
}

var dizerTchau = new Function( "nome", "console.log('Olá ' + nome);"); // metodo construtor fica com F da função 'F'unction  em maiusculo.

dizerTchau("Rick")