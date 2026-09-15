const student = {
  id: 1,
  personalData: { name: "Luca", surname: "Rossi" },
  grades: [
    { subject: "HTML", scores: [8, 9, 7] },
    { subject: "JS", scores: [10, 9, 9] }
  ]
};

const ultimoVoto = student.grades[1].scores[2];
console.log(ultimoVoto);

/*Richiesta 1: Salva in una variabile secondCategory la seconda categoria dell'array categories.

Richiesta 2: Salva in una variabile keyboardColor il colore della Tastiera Meccanica.

Richiesta 3: Estrai l'ultimo prezzo storico del Mouse Wireless (18) usando la proprietà .length dell'array dei prezzi per calcolare l'indice, senza hardcodare l'indice 2.*/

const store = {
  name: "TechMarket",
  location: "Milano",
  categories: ["Elettronica", "Informatica", "Gaming"],
  inventory: [
    {
      id: "P101",
      title: "Mouse Wireless",
      specs: { weight: "90g", color: "Nero" },
      prices: [25, 20, 18] // Prezzi storici
    },
    {
      id: "P102",
      title: "Tastiera Meccanica",
      specs: { weight: "850g", color: "RGB" },
      prices: [80, 75, 70]
    }
  ]
};

const secondCategory = store.inventory[1];
console.log(secondCategory);

const keyboardColor = store.inventory[1].specs.color;

console.log(keyboardColor);

const ultimoPrezzo = store.inventory[0].prices[2];

console.log(ultimoPrezzo);

/*Richiesta 1: Recupera il nome dell'attore che interpreta "Vincent Vega".

Richiesta 2: Estrai il primo genere del film "Fight Club".

Richiesta 3: Crea una stringa formattata usando i Template Literals che stampi:

"In Pulp Fiction, l'attore Samuel L. Jackson interpreta Jules Winnfield"*/

const movieResponse = {
  page: 1,
  results: [
    {
      id: 550,
      title: "Fight Club",
      genres: ["Drammatico", "Thriller"],
      cast: [
        { actor: "Brad Pitt", role: "Tyler Durden" },
        { actor: "Edward Norton", role: "Il Narratore" }
      ]
    },
    {
      id: 680,
      title: "Pulp Fiction",
      genres: ["Crime", "Drammatico"],
      cast: [
        { actor: "John Travolta", role: "Vincent Vega" },
        { actor: "Samuel L. Jackson", role: "Jules Winnfield" }
      ]
    }
  ]
};

const attoreInterpreta = movieResponse.results[1].cast[0].actor ;
console.log(attoreInterpreta);

const estrazionePrimoFilm = movieResponse.results[0].genres[0];
console.log(estrazionePrimoFilm);

const TemplateLiterals = `in ${movieResponse.results[1].title} , l'attore ${movieResponse.results[1].cast[1].actor} interpreta ${movieResponse.results[1].cast[1].role}`
console.log(TemplateLiterals);

/*Richiesta 1: Usa la variabile targetProperty e la bracket notation per accedere al nome dell'alunna ("Elena").

Richiesta 2: Usa la variabile selectedSubject per accedere all'array dei voti di JavaScript e recuperare il secondo voto (10).

Richiesta 3: Spiega per quale motivo la scrittura studentRecord.info.targetProperty restituisce undefined.

*/

const studentRecord = {
  id: "ST-8891",
  info: {
    firstName: "Elena",
    lastName: "Galli"
  },
  gradesBySubject: {
    html: [8, 9, 10],
    css: [7, 8, 8],
    javascript: [9, 10, 9]
  }
};

const selectedSubject = [studentRecord.gradesBySubject.javascript[1]];
const targetProperty = [studentRecord.info.firstName];
console.log(targetProperty);
console.log(selectedSubject);

//CICLO FOR 



/*Scrivi un ciclo for che calcoli due valori separati:

Il numero totale di temperature sotto lo zero.

La somma di tutte le temperature sopra lo zero.*/
const temperatures = [18, -2, 5, -7, 0, 12, -1, 22];

let numeroSottoZero = 0; // Contatore
let sommaSopraZero = 0;  // Accumulatore di somma

for (let i = 0; i < temperatures.length; i++) {
  if (temperatures[i] < 0) {
    numeroSottoZero++; // Incrementa solo di 1
  } else if (temperatures[i] > 0) {
    sommaSopraZero += temperatures[i]; // Somma il valore corrente
  }
}

console.log("Totale sotto zero:", numeroSottoZero);
console.log("Somma sopra zero:", sommaSopraZero);

//Scrivi un ciclo for che individui il valore più alto nell'array e lo stampi in console. 

const scores = [45, 89, 12, 98, 67, 98, 23];

let maxScore = scores[0];

for (let i = 1; i < scores.length; i++) {
  if (scores[i] > maxScore) {
    maxScore = scores[i];
  }
}

console.log("Il valore massimo è:", maxScore);

// Il ciclo parte dall'ultimo elemento (lunghezza - 1) e va a ritroso fino a 0

const originalList = ["Anna", "Beppe", "Carlo", "Daria"];
const reversedList = [];

//crivi un ciclo for che crei un secondo array reversedList contenente gli stessi elementi ma in ordine inverso

for (let i = originalList.length - 1; i >= 0; i--) {
    reversedList.push(originalList[i]);
}

console.log(reversedList);
  
//Scrivi un ciclo for che crei un'unica stringa recipeList formattata in questo modo:

//"Ingredienti: 1. Farina | 2. Uova | 3. Zucchero | 4. Lievito"

const ingredients = ["Farina", "Uova", "Zucchero", "Lievito"];
let recipeList = "Ingredienti: ";

for (let i = 0; i < ingredients.length; i++) {
  recipeList += `${i + 1}. ${ingredients[i]}`;
  
  // Aggiunge la barra separatrice tranne che dopo l'ultimo elemento
  if (i < ingredients.length - 1) {
    recipeList += " | ";
  }
}

console.log(recipeList);

//Usa .map() per generare un nuovo array pricesGross in cui ogni prezzo è maggiorato dell'IVA al 22% e arrotondato a due cifre decimali (es. 12.20).
const pricesNet = [10, 25, 100, 4.5];

const pricesGross = pricesNet.map(prezzoMaggiorato => (prezzoMaggiorato * 1.22).toFixed(2))
console.log(pricesGross);

//Usa .filter() per ottenere solo i libri che sono disponibili (available === true) E che hanno più di 300 pagine.
const library = [
  { title: "Il Signore degli Anelli", pages: 1200, available: true },
  { title: "Il Piccolo Principe", pages: 96, available: true },
  { title: "1984", pages: 328, available: false },
  { title: "Dune", pages: 700, available: true }
];

 const libreria = library.filter(libri =>(libri.available === true && libri.pages > 300));
 console.log(libreria);

 //Usa .find() per estrarre l'oggetto dell'utente con id === "usr_102".

//Stampa in console la frase: "L'amministratore è Sara" estraendo il nome direttamente dall'oggetto trovato.
 const users = [
  { id: "usr_101", name: "Marco", role: "user" },
  { id: "usr_102", name: "Sara", role: "admin" },
  { id: "usr_103", name: "Elena", role: "editor" }
];

const oggetto = users.find(estrazione => (estrazione.id === "usr_102"));
console.log(`L'amministratore è ${oggetto.name} `)

//Concatena .filter() e .map() in un'unica istruzione per ottenere un array di stringhe contenente solo i nomi dei candidati ammessi (ovvero quelli con testScore >= 70 E passedInterview === true).

//Output atteso: ["Luca è ammesso", "Paolo è ammesso"]
const candidates = [
  { name: "Luca", testScore: 75, passedInterview: true },
  { name: "Giulia", testScore: 90, passedInterview: false },
  { name: "Paolo", testScore: 85, passedInterview: true },
  { name: "Marta", testScore: 60, passedInterview: true }
];


const concatena = candidates
  .filter(candidato => candidato.testScore >= 70 && candidato.passedInterview)
  .map(candidato => `${candidato.name} è ammesso`); 

console.log(concatena); // Output: ["Luca è ammesso", "Paolo è ammesso"]



// ESERCIZI DI RIPASSO GENERALE 
/*
Richiesta 1: Salva in una variabile "secondStorage" il secondo taglio di memoria (256GB).
Richiesta 2: Salva in una variabile "ultraWideMp" i megapixel della fotocamera Ultrawide.
Richiesta 3: Crea una stringa formattata usando i Template Literals che stampi: 
"Il modello iPhone 15 ha una fotocamera Main da 48 megapixels."
*/
const smartphone = {
  brand: "Apple",
  model: "iPhone 15",
  specs: {
    storage: ["128GB", "256GB", "512GB"],
    battery: "3349 mAh"
  },
  cameras: [
    { type: "Main", megapixels: 48 },
    { type: "Ultrawide", megapixels: 12 }
  ]
};

const secondStorage = smartphone.specs.storage[1];
console.log(secondStorage);

const ultraWideMp = smartphone.cameras[1].megapixels;
console.log(ultraWideMp);

const stringa = smartphone.model + " " + smartphone.cameras[0].megapixels;
console.log(`Il modello ${smartphone.model} ha una fotocamera ${smartphone.cameras[0].type}  da ${smartphone.cameras[0].megapixels}.`)

/*
Richiesta 1: Usa l'oggetto "car", la variabile "propToFind" e la bracket notation per estrarre il valore "Model 3". Non usare il punto (.).
Richiesta 2: Usa l'oggetto "car.features", la variabile "nestedProp" e la bracket notation per estrarre il valore 500.
*/

const car = {
  brand: "Tesla",
  model: "Model 3",
  features: {
    autopilot: true,
    range: 500
  }
};

const propToFind = "model";
const nestedProp = "range";

const estrazione1 = car[propToFind]; 
console.log(estrazione1); 

const estrazione2 = car.features[nestedProp]; 
console.log(estrazione2); 
/*
Richiesta 1: Usa l'oggetto "playerProfile", la variabile "key1" e la bracket notation per estrarre il valore "DragonSlayer". 
(Vietato scrivere playerProfile.nickname o usare stringhe fisse)

Richiesta 2: Usa l'oggetto "playerProfile.equipment", la variabile "key2" e la bracket notation per estrarre il valore "Spada Magica".
(Vietato scrivere playerProfile.equipment.weapon o usare stringhe fisse)
*/
const playerProfile = {
  nickname: "DragonSlayer",
  score: 9500,
  equipment: {
    weapon: "Spada Magica",
    armor: "Scudo d'Argento"
  }
};

// Queste sono le variabili che contengono i nomi delle proprietà che vogliamo cercare
const key1 = "nickname";
const key2 = "weapon";
 
const estrazione3 = playerProfile[key1];
console.log(estrazione3);

const estrazione4 = playerProfile.equipment[key2];
console.log(estrazione4)


/*
Richiesta 1: Usa .find() per estrarre l'intero oggetto del primo prodotto che costa esattamente 10.
Richiesta 2: Usa .filter() per creare un array "veganMenu" che contenga solo i piatti dove isVegan === true.
Richiesta 3: Concatena .filter() e .map() in un'unica istruzione per ottenere un array di stringhe contenente SOLO I NOMI dei piatti di tipo "Pizza". (Output atteso: ["Margherita", "Marinara"]).
*/
const menu = [
  { name: "Margherita", price: 6, isVegan: false, type: "Pizza" },
  { name: "Marinara", price: 5, isVegan: true, type: "Pizza" },
  { name: "Patatine", price: 4, isVegan: true, type: "Side" },
  { name: "Cheeseburger", price: 10, isVegan: false, type: "Burger" }
];

const prodottoDieci = menu.find (prodotto => prodotto.price === 10);
console.log(prodottoDieci);

const veganMenu = menu.filter(vegan => vegan.isVegan === true);
console.log(veganMenu);

const cocatena = menu
.filter(soloPiatti => soloPiatti.type === "Pizza")
.map(soloPiatti => soloPiatti.name)
console.log(cocatena);


// Legenda: 3 = Vittoria, 1 = Pareggio, -1 = Sconfitta

/*
Richiesta 1: Scrivi un ciclo for che calcoli i "punti totali" della squadra. 
(Devi sommare tutte le vittorie e i pareggi, ma NON le sconfitte).
Richiesta 2: Scrivi un ciclo for che conti (quindi un contatore, non una somma) quante VITTORIE 
ci sono state in totale.
*/
const matchResults = [3, 1, -1, 3, -1, 1, 3];

let puntiTotali = 0;


for (let i = 0 ; i < matchResults.length; i ++){
  if(matchResults[i] > 0)
puntiTotali += matchResults[i];


};
console.log(puntiTotali);

let contatore = 0 ;

for (let i = 0 ; i < matchResults.length; i ++){
  if(matchResults[i] >= 3)
    contatore++
;


};
console.log(contatore);


/*
Richiesta 1: Usa .forEach() sull'array "cart" per stampare in console una frase per ogni prodotto nel formato: 
"Hai aggiunto [qty] [product] al carrello."

Richiesta 2: Usa un altro .forEach() (o aggiungi la logica in quello precedente) per calcolare il costo totale del carrello e salvarlo nella variabile "totalCost". 
Nota: ricordati di moltiplicare il prezzo (price) per la quantità (qty).
*/
const cart = [
  { product: "Laptop", price: 1200, qty: 1 },
  { product: "Mouse", price: 30, qty: 2 },
  { product: "Keyboard", price: 70, qty: 1 }
];

let totalCost = 0;

const frasi = cart.forEach(frase => console.log(`Hai aggiunto ${frase.qty} , ${frase.product} al carrello.`));

const somma = cart.forEach(element => {
  totalCost += element.price * element.qty
  
});
console.log(totalCost);

/*
Richiesta 1: Usa .find() per estrarre l'intero oggetto dell'impiegato con id === 103.
Richiesta 2: Concatena .filter() e .map() per ottenere un array che contenga SOLO I NOMI degli impiegati che sono attivi (active === true) E che lavorano nel dipartimento "IT".
Output atteso: ["Sofia", "Alice"]
*/
const employees = [
  { id: 101, name: "Sofia", department: "IT", active: true },
  { id: 102, name: "Lorenzo", department: "HR", active: false },
  { id: 103, name: "Alice", department: "IT", active: true },
  { id: 104, name: "Marco", department: "Sales", active: true }
];

const impiegato = employees.find(i => i.id === 103);
console.log(impiegato);

const impiegatiAttivi = employees
.filter(imp => imp.department === "IT" && imp.active === true)
.map(imp => imp.name)
console.log(impiegatiAttivi);

/*
Richiesta 1: Usa .forEach() per stampare in console tre messaggi separati: "Invio email a: luca@gmail.com", ecc.
Richiesta 2: Usa .map() per creare un nuovo array chiamato "emailDomains" che contenga solo le email in maiuscolo. (Puoi usare il metodo .toUpperCase() sulla stringa).
*/
const emails = ["luca@gmail.com", "sara@yahoo.com", "marta@hotmail.com"];

const messaggi = emails.forEach( email => console.log(`Invio email a: ${email}` ));

const emailDomains = emails.map(m => m.toUpperCase())
console.log(emailDomains);

// ============================================================
// ESERCIZI DI ALLENAMENTO - livello crescente
// Nessuna soluzione inclusa: scrivi il codice sotto ogni richiesta.
// ============================================================


// ------------------------------------------------------------
// LIVELLO FACILE — accesso a oggetti/array annidati
// ------------------------------------------------------------

const gym = {
  name: "PowerGym",
  city: "Torino",
  rooms: ["Sala Pesi", "Sala Corsi", "Piscina"],
  trainers: [
    {
      id: "T1",
      name: "Marco",
      specialty: { main: "Bodybuilding", secondary: "Powerlifting" },
      certifications: ["ISSA", "FIT"]
    },
    {
      id: "T2",
      name: "Giulia",
      specialty: { main: "Yoga", secondary: "Pilates" },
      certifications: ["RYT-200"]
    }
  ]
};

const thirdRoom = gym.rooms[2];
console.log(thirdRoom);

const mainSpecialty = gym.trainers[1].specialty.main;
console.log(mainSpecialty);

const ultimaCertificazione = gym.trainers[0].certifications[1] ;
console.log(ultimaCertificazione);
/*
Richiesta 1: Salva in una variabile "thirdRoom" la terza sala dell'array rooms.

Richiesta 2: Salva in una variabile "mainSpecialty" la disciplina principale
(main) del secondo trainer.

Richiesta 3: Usa .length sull'array certifications di Marco per estrarre
la SUA ULTIMA certificazione, senza hardcodare l'indice.
*/


// ------------------------------------------------------------
// LIVELLO FACILE/MEDIO — bracket notation dinamica
// ------------------------------------------------------------

const recipe = {
  name: "Carbonara",
  servings: 4,
  nutrition: {
    calories: 650,
    protein: 28
  }
};

const propKey = "servings";
console.log(recipe["servings"]);
const nestedKey = "protein";
console.log(recipe.nutrition["protein"]);

/*
Richiesta 1: Usa la variabile propKey e la bracket notation per estrarre
il valore 4. Vietato scrivere recipe.servings.

Richiesta 2: Usa la variabile nestedKey e la bracket notation per estrarre
il valore 28 da recipe.nutrition. Vietato scrivere recipe.nutrition.protein.
*/



// ------------------------------------------------------------
// LIVELLO MEDIO — cicli for
// ------------------------------------------------------------

const dailySteps = [8200, 5400, 12000, 3000, 9800, 15000, 6700];



/*
Richiesta 1: Scrivi un ciclo for che calcoli quanti giorni la persona
ha superato i 10000 passi (contatore).

Richiesta 2: Scrivi un ciclo for che calcoli la media dei passi
sull'intera settimana (somma / lunghezza array). Salvala in "averageSteps".

Richiesta 3: Scrivi un ciclo for che costruisca una stringa "stepsReport"
formattata così (usa un contatore giorno, partendo da 1):
"Giorno 1: 8200 passi | Giorno 2: 5400 passi | ..."
(niente separatore dopo l'ultimo giorno)
*/


// ------------------------------------------------------------
// LIVELLO MEDIO — array di oggetti + metodi combinati
// ------------------------------------------------------------

const orders = [
  { id: "O1", customer: "Anna", total: 45.5, status: "shipped" },
  { id: "O2", customer: "Luca", total: 120, status: "pending" },
  { id: "O3", customer: "Sara", total: 30, status: "shipped" },
  { id: "O4", customer: "Marco", total: 200, status: "cancelled" }
];


/*
Richiesta 1: Usa .find() per estrarre l'intero ordine con id === "O2".

Richiesta 2: Usa .filter() per ottenere solo gli ordini con status
"shipped" E total maggiore di 40. Salva in "shippedHighValue".

Richiesta 3: Concatena .filter() e .map() per ottenere un array di stringhe
con SOLO i nomi dei clienti i cui ordini NON sono stati cancellati.
Output atteso: ["Anna", "Luca", "Sara"]
*/

const estrazione = orders.find( estrare => estrare.id === "O2")

console.log(estrazione);

const shippedHighValue = orders.filter(filtrati =>(filtrati.status === "shipped" && filtrati.total > 40))
console.log(shippedHighValue);

const ordineNonCancellatti = orders
.filter(non =>(non.status != "cancelled" ))
.map(non=> non.customer);
console.log(ordineNonCancellatti);


// ------------------------------------------------------------
// LIVELLO MEDIO/DIFFICILE — reduce
// ------------------------------------------------------------

const invoice = [
  { item: "Monitor", price: 150, qty: 2 },
  { item: "Tastiera", price: 40, qty: 1 },
  { item: "Mouse", price: 20, qty: 3 }
];

/*
Richiesta 1: Usa .reduce() per calcolare il totale della fattura
(prezzo * quantità per ogni riga, sommato). Salva in "invoiceTotal".

Richiesta 2: Usa .reduce() per trovare l'oggetto con il prezzo unitario
più alto, senza usare un ciclo for. Salva in "mostExpensiveItem".
*/
//const invoiceTotal = invoice.map(cal => (cal.price * cal.qty))

const invoiceTotal = invoice.reduce((sommato , cal) => sommato + (cal.price * cal.qty), 0)
console.log(invoiceTotal)

const mostExpensiveItem = invoice.reduce((max, item) => (item.price > max.price) ? item : max);
console.log(mostExpensiveItem)

// ------------------------------------------------------------
// LIVELLO DIFFICILE — dati annidati su più livelli + più metodi
// ------------------------------------------------------------
/*
Richiesta 1: Senza hardcodare indici di classe/studente, usa .find() per
estrarre l'intero oggetto studente di nome "Marco" all'interno della classe
"3B". (Suggerimento: prima trova la classe con .find(), poi lo studente
con .find() sull'array students di quella classe).

Richiesta 2: Calcola, con .reduce() o un ciclo for, la media voti di ogni
studente, e crea un nuovo array "classAverages" con oggetti nel formato:
{ name: "Elena", average: 7 }
per TUTTI gli studenti di TUTTE le classi (quindi dovrai unire in qualche
modo gli studenti delle due classi prima o durante il calcolo).

Richiesta 3: Trova il nome dello studente con la media voti più alta
in assoluto tra tutte le classi. Salvalo in "topStudent".
*/
const school = {
  name: "Liceo Galilei",
  classes: [
    {
      name: "3A",
      students: [
        { name: "Elena", grades: [7, 8, 6] },
        { name: "Paolo", grades: [9, 9, 10] }
      ]
    },
    {
      name: "3B",
      students: [
        { name: "Giulia", grades: [5, 6, 6] },
        { name: "Marco", grades: [8, 7, 9] }
      ]
    }
  ]
};

const trovaStudente = school.classes
  .find(classe => classe.name === "3B")
  .students.find(studente => studente.name === "Marco");

console.log(trovaStudente);

const mediaVoti = school.classes


const nomi = ["Elena", "Marco", "Sara", "Luca"];
// Scrivi un ciclo for che cerchi "Sara" nell'array e salvi in "posizioneTrovata"
// l'INDICE in cui si trova (non il valore, l'indice: quindi 2)
let posizioneTrovata = "";
for (let i = 0 ; i < nomi.length ; i ++){
if(nomi[i] === "Sara"){
  posizioneTrovata = [i]
}
}
console.log(posizioneTrovata);

const spese = [45, -20, 100, -15, 60];
// Positivo = entrata, negativo = uscita
// Richiesta A: conta quante uscite ci sono state (contatore) → "numeroUscite"
// Richiesta B: somma tutte le entrate (accumulatore) → "totaleEntrate"

let numeroUscite = 0;
let totaleEntrate = 0;

for (let i = 0 ; i < spese.length ; i ++){
  if(spese[i] < 0){
    numeroUscite++
  }else if(spese[i] > 0 ){
    totaleEntrate += spese[i];
    }
}
console.log(numeroUscite);
console.log(totaleEntrate);

const voti = [4, 6, 8, 3, 9, 5];
// Crea un nuovo array "votiPromossi" che contenga SOLO i voti >= 6
// (usa .push() dentro un if, niente .filter())

let votiPromossi = [];

for (let i = 0 ; i < voti.length ; i ++){
  if(voti[i] >= 6){
   votiPromossi.push(voti[i]);
  }
}
console.log(votiPromossi);


const temperature = [22, 15, 30, 8, 19];
// Trova sia il valore massimo che il valore minimo nello stesso ciclo
// (un solo for, due variabili: "tempMax" e "tempMin")
let tempMax = 22;
let tempMin = 22 ;

for (let i = 0 ; i < temperature.length ; i ++){
  if(temperature[i] > tempMax){
    tempMax = temperature[i];
  } if(temperature[i] < tempMin){
    tempMin =temperature[i];
  }
}
console.log(tempMax);
console.log(tempMin);


const compiti = ["Matematica", "Italiano", "Storia", "Inglese", "Arte"];
// Trova l'indice di "Inglese" e salvalo in "indiceInglese"
// Stavolta però: se non lo trova, "indiceInglese" deve restare -1
// (suggerimento: la variabile iniziale, prima del ciclo, deve partire da -1)

let indiceInglese = -1;
for (let i = 0; i < compiti.length; i++) {
  if (compiti[i] === "Inglese") {
    indiceInglese = i;
  }
}
console.log(indiceInglese); 


const eta = [12, 25, 17, 30, 15, 45, 8];
// Conta quanti sono minorenni (età < 18) → "numeroMinorenni"
// Conta quanti sono maggiorenni (età >= 18) → "numeroMaggiorenni"
// (un solo ciclo, due contatori)

let numeroMinorenni = 0;
let numeroMaggiorenni = 0;

for ( let i = 0 ; i < eta.length ; i++){
  if(eta[i] < 18){
    numeroMinorenni++
  } if(eta[i] >= 18){
    numeroMaggiorenni++
  }
}
console.log(numeroMinorenni);
console.log(numeroMaggiorenni);






const prezzi = [10, 25, 8, 40, 15];
// Crea un nuovo array "prezziScontati" che contenga ogni prezzo
// scontato del 10% (quindi moltiplicato per 0.9)
// ATTENZIONE: qui non filtri niente, trasformi OGNI elemento

const numeroMaggiorenne = prezzi.map(sconto =>(sconto * 0.9));
console.log(numeroMaggiorenne);


const puntiPartita = [-5, 12, -8, 20, 3, -15];
// Trova il valore massimo e il valore minimo nello stesso ciclo
// "puntiMax" e "puntiMin"
// Occhio a come inizializzi le due variabili PRIMA del ciclo
let valoreMassimi = puntiPartita[0];  // parto dal primo elemento vero
let valoreMinimi = puntiPartita[0];   // stesso primo elemento


for (let i = 0; i < puntiPartita.length; i++) {
  if (puntiPartita[i] > valoreMassimi) {
    valoreMassimi = puntiPartita[i];
  }
  if (puntiPartita[i] < valoreMinimi) {
    valoreMinimi = puntiPartita[i];
  }
}
console.log(valoreMassimi); // 20
console.log(valoreMinimi);  // -15



const magazzino = [
  { nome: "Vite", quantita: 0 },
  { nome: "Bullone", quantita: 15 },
  { nome: "Dado", quantita: 0 },
  { nome: "Rondella", quantita: 8 }
];
// Crea una stringa "prodottiEsauriti" che elenchi SOLO i nomi
// dei prodotti con quantita === 0, separati da virgola
// Output atteso: "Vite, Dado"
// (suggerimento: parti da stringa vuota "" e concatena con +=)

const prodottiEsauriti = magazzino
.filter(nomi =>(nomi.quantita === 0))
.map(nomi =>(nomi.nome))
console.log(prodottiEsauriti);

/*Parte 1 — Accesso base ad array e oggetti annidati
js*/
const azienda = {
  nome: "DataCorp",
  sedi: ["Milano", "Roma", "Napoli"],
  dipartimenti: [
    {
      nome: "IT",
      responsabile: { nome: "Marco", anni: 8 },
      progetti: ["Sito Web", "App Mobile", "Database"]
    },
    {
      nome: "Marketing",
      responsabile: { nome: "Giulia", anni: 5 },
      progetti: ["Campagna Social"]
    }
  ]
};
//Salva in secondaSede la seconda sede dell'array sedi.
//Salva in nomeResponsabileIT il nome del responsabile del dipartimento IT (attenzione, è annidato dentro responsabile).
//Usa .length per estrarre l'ULTIMO progetto del dipartimento IT, senza hardcodare l'indice.
//Salva in annidiEsperienzaMarketing gli anni di esperienza del responsabile Marketing.

const secondaSede = azienda.sedi[1];
console.log(secondaSede);

const nomeResponsabileIT = azienda.dipartimenti[0].responsabile.nome
console.log(nomeResponsabileIT); 

const lunghezza = azienda.dipartimenti[0].progetti[2];
console.log(lunghezza);

const annidiEsperienzaMarketing = azienda.dipartimenti[1].responsabile.anni;
console.log(annidiEsperienzaMarketing)



/*Parte 2 — Ciclo for di ripasso
js*/
const vendite = [120, 340, 90, 560, 210, 45, 780];
//Conta quante vendite hanno superato i 200 (contatore) → venditeAlte.
//Somma tutte le vendite sotto i 100 → sommaVenditeBasse.
//Trova il valore massimo E la sua posizione (indice) nello stesso ciclo → venditaMax e posizioneMax.
//Crea un nuovo array venditeArrotondate che contenga ogni vendita divisa per 10 e arrotondata (usa Math.round()), costruendolo con .push() dentro un ciclo for (non con .map()).
let venditeAlte = 0;
let sommaVenditeBasse = 0;
let venditaMax = 120 ;
let posizioneMax = "";

for ( let i = 0; i < vendite.length ; i ++){
  if(vendite[i] > 200){
    venditeAlte++
  }if(vendite[i] < 100){
    sommaVenditeBasse += vendite[i];
  }if(vendite[i]> venditaMax){
    venditaMax = vendite[i]
    posizioneMax = [i]
  }
}
console.log(venditeAlte);
console.log(sommaVenditeBasse);
console.log(venditaMax);
console.log(posizioneMax);



/*Parte 3 — .map()
js*/
const prodotti = [
  { nome: "Cuffie", prezzo: 50 },
  { nome: "Mouse", prezzo: 20 },
  { nome: "Monitor", prezzo: 200 }
];
//Usa .map() per creare nomiProdotti, un array con solo i nomi.
//Usa .map() per creare prezziIva, un array con ogni prezzo maggiorato del 22% (arrotondato a 2 decimali con .toFixed(2)).
//Usa .map() per creare descrizioni, un array di stringhe nel formato "Cuffie: 50€" (usa i template literals dentro la map)./

const nomiProdotti = prodotti.map(nomiProdotto => (nomiProdotto.nome))
console.log(nomiProdotti)

const prezziIva = prodotti.map(sconto => (sconto.prezzo * (1.22.toFixed(2))))
console.log(prezziIva)

const descrzione  = prodotti.map(anidati =>(`${anidati.nome} ${anidati.prezzo}`))
console.log(descrzione)

/*Parte 4 — .filter()
js*/
const partecipanti = [
  { nome: "Luca", eta: 22, pagato: true },
  { nome: "Sara", eta: 17, pagato: true },
  { nome: "Marco", eta: 30, pagato: false },
  { nome: "Elena", eta: 25, pagato: true }
];
//Usa .filter() per ottenere solo i maggiorenni → maggiorenni.
//Usa .filter() per ottenere solo chi ha pagato E ha più di 18 anni → partecipantiValidi.
//Usa .filter() per ottenere chi NON ha pagato → nonPagati.

const etaMaggiorenne = partecipanti.filter(mag =>(mag.eta >= 18))
console.log(etaMaggiorenne);

const partecipantiValidi = partecipanti.filter(pag =>(pag.pagato === true && pag.eta >= 18))
console.log(partecipantiValidi);

const nonPagati = partecipanti.filter(nonPag =>(nonPag.pagato === false ))
console.log(nonPagati);

/*Parte 5 — .find()
js*/
const biglietti = [
  { codice: "B001", posto: "12A", usato: false },
  { codice: "B002", posto: "5C", usato: true },
  { codice: "B003", posto: "8B", usato: false }
];
//Usa .find() per estrarre l'intero biglietto con codice "B002" → bigliettoTrovato.
//Usa .find() per trovare il PRIMO biglietto non usato → primoDisponibile.
//Stampa in console la frase "Il posto libero è 12A" estraendo il posto direttamente dal risultato di .find() (senza salvarlo prima in un'altra variabile, fallo in un'unica riga).
 const bigliettoTrovato = biglietti.find(big =>(big.codice === "B002" ))
 console.log(bigliettoTrovato);

 const primoDisponibile =biglietti.find(dispo =>(dispo.usato === false))
 console.log(primoDisponibile);

console.log(`Il posto libero è ${biglietti.find(b => !b.usato).posto}`);



/*Parte 6 — Combinazioni (filter + map) e navigazione annidata profonda
js*/
const negozi = [
  {
    citta: "Torino",
    clienti: [
      { nome: "Anna", spesa: 45 },
      { nome: "Luca", spesa: 120 }
    ]
  },
  {
    citta: "Genova",
    clienti: [
      { nome: "Sara", spesa: 200 },
      { nome: "Marco", spesa: 15 }
    ]
  }
];
//Senza hardcodare indici, usa .find() per trovare il negozio di "Genova", poi dentro quel risultato usa .find() per trovare il cliente "Sara" → clienteGenova.
//Concatena .filter() e .map() sul negozio di Torino per ottenere solo i nomi dei clienti che hanno speso più di 50 → clientiTopTorino.
//(Difficile) Usa un ciclo for annidato (un for fuori sui negozi, un for dentro sui clienti) per sommare la spesa TOTALE di tutti i clienti di tutti i negozi → spesaTotaleGenerale.

const clienteGenova = negozi
.find(ciente =>(ciente.citta ===  "Genova"))
.clienti.find(ciente =>(ciente.nome === "Sara"))
console.log(clienteGenova);

const clientiTopTorino = negozi
  .find(negozio => negozio.citta === "Torino")
  .clienti
  .filter(cliente => cliente.spesa > 50)
  .map(cliente => cliente.nome);
  console.log(clientiTopTorino);


  //ESERCIZI EXTRA 

  const temperatura = [18, 25, 12, 30, 8, 22];
// A) Conta quante temperature superano i 20 → "giorniCaldi"
// B) Somma tutte le temperature sotto i 15 → "sommaFreddo"
// C) Trova il valore massimo E LA SUA POSIZIONE nello stesso ciclo
//    → "tempMax" e "posizioneTempMax"
// (ricordati: quando aggiorni il massimo, in quello stesso momento
// aggiorna anche l'indice, nello stesso if)

let giorniCaldi = 0;
let sommaFreddo = 0;
let tempoMax = 18;
let posizioneTempMax = "";

for(let i = 0 ; i < temperatura.length ; i ++){
  if(temperatura[i] > 20){
    giorniCaldi++
  }if(temperatura[i] < 15 ){
    sommaFreddo += temperatura[i]
  }if(temperatura[i] > tempoMax){
    tempoMax = temperatura[i]
    posizioneTempMax = [i]
  }
}

console.log(giorniCaldi)
console.log(sommaFreddo)
console.log(tempoMax)
console.log(posizioneTempMax)


const distanze = [1500, 3200, 800, 5000, 2100];
// Crea un nuovo array "distanzeKm" con ogni distanza convertita
// da metri a km, arrotondata a 1 decimale (usa Math.round(x*10)/10)
// Costruiscilo con un ciclo for e .push(), NON con .map()

let distanzeKm = [];



const bilancio = [-200, -50, -800, -30, -400];
// Trova il valore massimo (quello meno negativo) → "bilancioMigliore"
// ATTENZIONE: se parti da 0 come punto di partenza, il risultato sarà
// sbagliato, perché nell'array non c'è nessun valore positivo.
// Da dove devi partire allora?

let bilancioMigliore = bilancio[0];

for (let i = 0 ; i < bilancio.length ; i ++){
  if(bilancio[i] < bilancioMigliore){
    bilancioMigliore = bilancio[i]
  }
}

console.log(bilancioMigliore);

const misure = [3.456, 7.891, 12.333];
// Usa .map() per creare "misureCm" convertendo ogni misura da metri
// a centimetri (moltiplica per 100) e arrotonda a 1 decimale con
// .toFixed(1). Il .toFixed deve applicarsi al RISULTATO del calcolo,
// non a un numero preso da solo — occhio a dove metti le parentesi.

const misureCm = misure.map(misura =>((misura * 100).toFixed(1)))

console.log(misureCm);

const libri = [
  { titolo: "Il Nome della Rosa", pagine: 512 },
  { titolo: "1984", pagine: 328 }
];
// Usa .map() per creare "schedeLibri", un array di stringhe ESATTAMENTE
// in questo formato (controlla virgole, due punti, parole):
// "Il Nome della Rosa - 512 pagine"

const schedeLibri = libri.map(libri =>(`${libri.titolo} - ${libri.pagine} pagine `))
console.log(schedeLibri);

const prodotto = [
  { nome: "A", scorte: 10 },
  { nome: "B", scorte: 0 },
  { nome: "C", scorte: 5 }
];
// Usa .filter() per ottenere i prodotti "disponibili", cioè quelli
// con scorte MAGGIORI O UGUALI a 5 → "prodottiDisponibili"
// (pensaci: un prodotto con scorte esattamente 5 è disponibile o no?)

const disponibili = prodotto.filter(dip =>(dip.scorte > 0))
console.log(disponibili)
const prodottiDisponibili = prodotto.filter(magg =>(magg.scorte >= 5))
console.log(prodottiDisponibili);

const impiegati = [
  { nome: "Luca", ruolo: "junior" },
  { nome: "Sara", ruolo: "senior" }
];
// Stampa in un'unica riga: "Il senior è Sara"
// estraendo il nome direttamente dal risultato di .find(),
// senza salvarlo prima in una variabile.
// (occhio: === per confrontare, mai un solo =)

impiegati.find(dipendente =>(console.log(`il ${dipendente.ruolo} è ${dipendente.nome}`)))


const palestre = [
  {
    citta: "Torino",
    corsi: [
      { nome: "Yoga", posti: 5 },
      { nome: "Pilates", posti: 0 }
    ]
  },
  {
    citta: "Milano",
    corsi: [
      { nome: "Spinning", posti: 8 },
      { nome: "Zumba", posti: 3 }
    ]
  }
];
// Senza hardcodare indici: trova la palestra di "Milano", poi dentro
// quella trova il corso "Zumba" → "corsoTrovato"




const scuole = [
  {
    nome: "Liceo A",
    studenti: [
      { nome: "Elena", media: 8.5 },
      { nome: "Paolo", media: 6.2 }
    ]
  },
  {
    nome: "Liceo B",
    studenti: [
      { nome: "Giulia", media: 9.1 },
      { nome: "Marco", media: 5.5 }
    ]
  }
];
// Trova prima il "Liceo B", poi filtra i suoi studenti con media > 7
// e mappa solo i nomi → "studentiBraviLiceoB"
// (NON fare filter/map direttamente su "scuole" — prima naviga fino
// all'array giusto, come abbiamo detto per clientiTopTorino)



const magazzini = [
  {
    citta: "Roma",
    prodotti: [
      { nome: "Vite", valore: 100 },
      { nome: "Bullone", valore: 50 }
    ]
  },
  {
    citta: "Torino",
    prodotti: [
      { nome: "Dado", valore: 30 },
      { nome: "Rondella", valore: 20 }
    ]
  }
];
// Usa due cicli for annidati (uno sui magazzini, uno sui prodotti
// di ogni magazzino) per sommare il valore TOTALE di tutti i
// prodotti di tutti i magazzini → "valoreTotaleMagazzini"