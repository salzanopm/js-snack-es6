// Snack2
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.


// [x] Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// [x] Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
const teamsArray = [
    {
        nome:'Alan',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome:'Atala',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome:'Basso',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome:'Battaglin',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome:'BH',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome:'Bixxis',
        puntiFatti: 0,
        falliSubiti: 0
    }
];

// [x] Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
// nuovo array con nomi e falli subiti
const newTeamsArray = [];

// ciclo for per tutti gli oggetti di teamsArray salvo una singola variabile che cambia oggetto in base alla variabile 'i'
for (let i = 0; i < teamsArray.length; i++) {
    let thisTeam = teamsArray[i];

    // controllo
    // console.log(thisTeam)

    // sostituisco gli zero con numeri random dei falli subiti e punti fatti
    const randomPuntiFatti = getRndInteger(0, 10);
    const randomFalliSubiti = getRndInteger(0, 10);

     // controllo
    // console.log(randomPuntiFatti)
    // console.log(randomFalliSubiti)

    // prendo le variabili e le inserisco dentro alle chiavi selezionate dei miei oggetti dell'array
    thisTeam.puntiFatti = randomPuntiFatti;
    thisTeam.falliSubiti = randomFalliSubiti;

    // [X]Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

    const { nome, falliSubiti} = thisTeam;

    const PartialNewTeamsArray = {
        nome,
        falliSubiti
    };

    // pusho oggetto nel mio nuovo array
    newTeamsArray.push(PartialNewTeamsArray);

}

// stampo in console
for(let key in newTeamsArray) {
console.log(newTeamsArray[key]);
}


// -------------------------------------
// FUNCTIONS
// -------------------------------------
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }














// // Creo variabile bicicletta più leggera
// let currentLightBike = bikes[0];

// // Stampare a schermo la bici con peso minore utilizzando destructuring e template literal nel DOM


// // creo ciclo for fino alla fine dell'array
// for (let i = 0; i < bikes.length; i++) {

//     // variabile interna 
//     let thisBike = bikes[i];                

//     // se variabile interna che percorre tutto l'array incontra una bici
//     // dal peso minore allora viene riassegnato il valore della bici più leggera
//     if(thisBike.peso < currentLightBike.peso) {
//         currentLightBike = thisBike;
//     }
//     // controllo in console se stampa oggetti correttamente
//     console.log(thisBike)
// }    

// // versione con odestructuring prendo variabili e le associo direttamente ai valori senza dover scrivere il nome dell'oggetto con la dot notation dentro al template literal (sugar sintax)
// const {nome,peso} = currentLightBike;

// // appendo template literal nell'html 
// const bikesHtml = `



// <h2>Ecco la bici più leggera</h2>

// <div>
//     La bicicletta della Marca "${nome}" è la più leggera in quanto pesa solo: ${peso} grammi.
// </div>
// `

// // dichiaro variabile container nell'html per appenderci il mio template
// const bikeContainer = document.getElementById ('bike-container')
//   bikeContainer.innerHTML += bikesHtml;