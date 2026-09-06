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
Richiesta 2: Scrivi un ciclo for che conti (quindi un contatore, non una somma) quante VITTORIE ci sono state in totale.
*/
const matchResults = [3, 1, -1, 3, -1, 1, 3];

let puntiTotali = 0;
const vittorie = 3;
const pareggi = 1;
const sconfitte = - 1;
const contatore = 0;

for (let i = 0 ; i < matchResults.length; i ++){
puntiTotali += matchResults[i];

};

console.log(puntiTotali);

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




