//Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
//Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
//Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

const numeriCasuali = [];
const numeriUtente = [];
const TOT_NUMERI = 5;
const MIN_NUMERO = 0;
const MAX_NUMERO = 100;
const container = document.querySelector(".container");

//creazione numeri casuali
for (let i=0; i<TOT_NUMERI; i++) {
    let numero = getRndInteger(MIN_NUMERO, MAX_NUMERO);
    numeriCasuali.push(numero);
    container.innerHTML = container.innerHTML + numeriCasuali[i] + " ";
}

//pulizia numeri html
setTimeout(function(){ 
        container.innerHTML = "";
}, 30000);

//inserimento numeri utente 
setTimeout(function(){ 
    for (let i=0; i<TOT_NUMERI; i++)  {
        container.innerHTML = "";
        let numeroUtente = parseInt(prompt("Inserisci numero: "));
        numeriUtente.push(numeroUtente);
    }

    let contatore = 0;
    let numeriIndovinati = [];

    //conta dei numeri indovinati
    for (let i=0; i<TOT_NUMERI; i++) {
        if (numeriUtente[i] == numeriCasuali [i]) {
            numeriIndovinati.push(numeriCasuali[i]);
            contatore = contatore + 1;
        }
    }

    //vittoria solo se contatore è uguale al numero dei numeri da indovinare
    if (contatore == TOT_NUMERI) {
        alert ("HAI VINTO " + contatore + " NUMERI INDOVINATI: " + numeriIndovinati);
    } else {
        alert ("HAI PERSO " + contatore + " NUMERI INDOVINATI: " + numeriIndovinati);
    }
}, 31000);
