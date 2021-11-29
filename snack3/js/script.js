// Snack 3
// Dato l'array di nomi:
// const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
// e dati due numeri min e max (min più piccolo di max).
// Creiamo un nuovo array contenente i valori che hanno la posizione compresa tra i due numeri.
// Eseguiamo questo esercizio prima con forEach e poi con filter.

// ------------------------------------------------------------------------------------------------------------------

// ANALISI

// FOREACH
// [x] prendere array
// [x] chiedo all'utente di darmi due numeri ( uno max e uno min compresi tra 1 e 6 dove min è più piccolo di max.
// [x] Creiamo un nuovo array contenente i valori che hanno la posizione compresa tra i due numeri.

// FILTER
// [x] prendere array
// [x] chiedo all'utente di darmi due numeri ( uno max e uno min compresi tra 1 e 6 dove min è più piccolo di max.
// [x] creo nuovo array contenente i valori che hanno la posizione compresa tra i due numeri.


// ------------------------------------------------------------------------------------------------------------------

// FOREACH

// // [x] prendere array
// const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
// // [x] chiedo all'utente di darmi due numeri ( uno max e uno min compresi tra 1 e 6 dove min è più piccolo di max.
// alert('scegli un numero max e un numero min compresi tra 1 e 6 dove min sarà il più piccolo dei due');
// const numberMin = parseInt(prompt('inserisci numero min'));
// const numberMax = parseInt(prompt('inserisci numero max'));
// // [x] Creiamo un nuovo array contenente i valori che hanno la posizione compresa tra i due numeri.
// const newArray = [];
// // [x]ciclo foreach con index definito da numero max e numero min
// myArray.forEach((element,index, array) => {
//     if (index < numberMax && index > numberMin) {
//         // pusho elementi richiesti in array nuovo
//         newArray.push(element);
//     }
// });
// // stampo il risultato
// console.log(newArray);

// ------------------------------------------------------------------------------------------------------------------

// FILTER

// [x] prendere array
const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
// [x] chiedo all'utente di darmi due numeri ( uno max e uno min compresi tra 1 e 6 dove min è più piccolo di max.
alert('scegli un numero max e un numero min compresi tra 1 e 6 dove min sarà il più piccolo dei due');
const numberMin = parseInt(prompt('inserisci numero min'));
const numberMax = parseInt(prompt('inserisci numero max'));
// [x] Creiamo un nuovo array contenente i valori che hanno la posizione compresa tra i due numeri tramite il filter.
const newArray = myArray.filter((element,index,array) => {
    return index < numberMax && index > numberMin
});
// [x] stampo risultato
console.log(newArray);

