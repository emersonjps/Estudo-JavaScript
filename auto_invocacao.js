// função  auto invocada onde as variaveis internar existiram apenas lá.
(function (){
    var a = 1;
    console.log(a);
})();

console.log(a) // a variavel 'a' será dada como não definida pois, só existe na função.s