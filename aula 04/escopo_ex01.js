let i = 0;
/**
 * escopo global
 * No escopo global todo o script enxerga as * *  * variáveis, pois estão em memória a vida toda   do script, enquanto ele roda.
 **/
let meuArray = ['morango', 'maçã', 'banana', 'uva', 'tomate'];


while (i < 5) {
/*
 escopo local
 No escopo local a vida útil da variável criada é apenas enquanto ela existe no escopo de bloco definido.
 **/
    let total = 0;
    let num = 4;
    console.log('Your number + 4 =');
    console.log(num + 4);
    total = num + 4;
    i++;
}

console.log(total);
console.log(meuArray);

