function dizerOi(nome){
    console.log(this)
    console.log("Olá "+ nome);
}

dizerOi("Fernando");// chama a função  de forma normal.

dizerOi.call(null,"Rayn");// chama a função com um objeto incluso de forma global.

dizerOi.apply(null, ["Ricardo"]);// chama a função  de forma global com arrays e objetos incluso.