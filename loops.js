 var x = 0;
/*
while(x < 10){// teste antes de ser executado
    console.log("X é igual a = " + x);
    x = x +1;
}

do {
    console.log("X é igual a = " + x);
    x = x +1;
} while( x > 1) // testa a condição depois de executar ao menos uma vez 


for ( var y = 0; y < 10; y = y + 1 ){ // estrutura de repetição com quantidade finita   
    console.log(y);
}*/

var obj = {
    nome: "Jow",
    sobrenome: "Snow"
};

for (var prop in obj ){
    console.log(obj[prop]);
}