// Snack 4
// Dato un elenco degli studenti di una facoltà, con il totale dei loro voti
// let students = [
//     { name: 'Marco', id: 213, grades: 78 },
//     { name: 'Paola', id: 110, grades: 96 },
//     { name: 'Andrea', id: 250, grades: 48 },
//     { name: 'Gaia', id: 145, grades: 74 },
//     { name: 'Luigi', id: 196, grades: 68 },
//     { name: 'Piero', id: 102, grades: 50 },
//     { name: 'Francesca', id: 120, grades: 84 },
//   ];
// 1- Dobbiamo creare delle targhe con il loro nome in maiuscolo. Ci serve quindi un nuovo array di stringhe. Ogni elemento del nuovo array sarà il nome dello studente ma con tutte le lettere maiuscole.
// 2-  Dobbiamo creare un nuovo array con gli studenti che hanno un totale di voti superiore a 70
// 3-  Dobbiamo creare un nuovo array di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120

// ------------------------------------------------------------------------------------------------------------------------------

// // ANALISI es. 1
// // [x] 1- Dobbiamo creare delle targhe con il loro nome in maiuscolo. Ci serve quindi un nuovo array di stringhe. 
// // Ogni elemento del nuovo array sarà il nome dello studente ma con tutte le lettere maiuscole.

// ANALISI es 2
// [x] 2- Dobbiamo creare un nuovo array con gli studenti che hanno un totale di voti superiore a 70 usando un filter

// ANALISI es 3
// [x] 3-  Dobbiamo creare un nuovo array di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120 usando un filter

// ------------------------------------------------------------------------------------------------------------------------------

// ESERCIZIO 1
// [x] 1- Dobbiamo creare delle targhe con il loro nome in maiuscolo. Ci serve quindi un nuovo array di stringhe. 
// // Ogni elemento del nuovo array sarà il nome dello studente ma con tutte le lettere maiuscole.

// // [x] copio array
// let students = [
//         { name: 'Marco', id: 213, grades: 78 },
//         { name: 'Paola', id: 110, grades: 96 },
//         { name: 'Andrea', id: 250, grades: 48 },
//         { name: 'Gaia', id: 145, grades: 74 },
//         { name: 'Luigi', id: 196, grades: 68 },
//         { name: 'Piero', id: 102, grades: 50 },
//         { name: 'Francesca', id: 120, grades: 84 },
//       ];
// // [X] creo nuovo array contenente nomi in maiuscolo
// const newStudents = students.map((element,index,array) => {
//     return element.name.toUpperCase();
// });
// // [X ]stampo il risultato
// console.log(newStudents);

// ------------------------------------------------------------------------------------------------------------------------------

// ESERCIZIO 2
// [x] 2- Dobbiamo creare un nuovo array con gli studenti che hanno un totale di voti superiore a 70 usando un filter

// // [x] copio array
// let students = [
//     { name: 'Marco', id: 213, grades: 78 },
//     { name: 'Paola', id: 110, grades: 96 },
//     { name: 'Andrea', id: 250, grades: 48 },
//     { name: 'Gaia', id: 145, grades: 74 },
//     { name: 'Luigi', id: 196, grades: 68 },
//     { name: 'Piero', id: 102, grades: 50 },
//     { name: 'Francesca', id: 120, grades: 84 },
//   ];
// // [x] creo nuovo array contenente nomi in maiuscolo
// const newStudents = students.filter((element,index,array) => {
// return element.grades > 70;
// });
// // stampo il risultato
// console.log(newStudents);


// ESERCIZIO 3
// [x] 3-  Dobbiamo creare un nuovo array di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120 usando un filter

// [x] copio array
let students = [
    { name: 'Marco', id: 213, grades: 78 },
    { name: 'Paola', id: 110, grades: 96 },
    { name: 'Andrea', id: 250, grades: 48 },
    { name: 'Gaia', id: 145, grades: 74 },
    { name: 'Luigi', id: 196, grades: 68 },
    { name: 'Piero', id: 102, grades: 50 },
    { name: 'Francesca', id: 120, grades: 84 },
  ];
// [x] creo nuovo array contenente nomi in maiuscolo
const newStudents = students.filter((element,index,array) => {
return element.grades > 70 && element.id > 120;
});

// [x] stampo il risultato
console.log(newStudents);
