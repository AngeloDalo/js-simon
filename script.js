//Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
//Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
//Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

const numeriCasuali = [];
const TOT_NUMERI = 5;
const MIN_NUMERO = 0;
const MAX_NUMERO = 100;

for (let i=0; i<TOT_NUMERI; i++) {
    let numero = getRndInteger(MIN_NUMERO, MAX_NUMERO);
    numeriCasuali.push(numero);
}

console.log (numeriCasuali);