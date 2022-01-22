var tick = (function () {
    var cont = 0; // variavel onde só vai existir em function tick 

    return function () {
        cont = cont + 1; // mais pode ser acessada e memorizada em outra função interna.
        console.log(cont)
    }
})();


tick();
tick();
tick();