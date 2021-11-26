// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal nel DOM


// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.

const bikes = [
    {
        nome:'Alan',
        peso: 1000
    },
    {
        nome:'Atala',
        peso: 2500
    },
    {
        nome:'Basso',
        peso: 3670
    },
    {
        nome:'Battaglin',
        peso: 1230
    },
    {
        nome:'BH',
        peso: 2999
    },
    {
        nome:'Bixxis',
        peso: 3390
    }
]


// Creo variabile bicicletta più leggera
let currentLightBike = bikes[0];

// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal nel DOM


// creo ciclo for fino alla fine dell'array
for (let i = 0; i < bikes.length; i++) {

    // variabile interna 
    let thisBike = bikes[i];                

    // se variabile interna che percorre tutto l'array incontra una bici
    // dal peso minore allora viene riassegnato il valore della bici più leggera
    if(thisBike.peso < currentLightBike.peso) {
        currentLightBike = thisBike;
    }
    // controllo in console se stampa oggetti correttamente
    console.log(thisBike)
}    

// versione con odestructuring prendo variabili e le associo direttamente ai valori senza dover scrivere il nome dell'oggetto con la dot notation dentro al template literal (sugar sintax)
const {nome,peso} = currentLightBike;

// appendo template literal nell'html 
const bikesHtml = `



<h2>Ecco la bici più leggera</h2>

<div>
    La bicicletta della Marca "${nome}" è la più leggera in quanto pesa solo: ${peso} grammi.
</div>
`

// dichiaro variabile container nell'html per appenderci il mio template
const bikeContainer = document.getElementById ('bike-container')
  bikeContainer.innerHTML += bikesHtml;