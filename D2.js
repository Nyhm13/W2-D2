/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let nr1 = 10;
let nr2 = 20;

if (nr2 > nr1) {
  console.log("Congratulazioni questo numero è più grande");
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
if (nr2 !== 5) {
  console.log("Congratulazioni questo numero è diverso da 5");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

if (nr2 % 5 === 0) {
  console.log("Congratulazioni il tuo numero e perfettamente divisibile per 5");
}
/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const nr3 = 16;
const nr4 = 8;

if (nr3 - nr4 === 8 || nr3 === 8 || nr4 === 8 || nr3 + nr4) {
  console.log(
    "Congratulazioni uno dei tuoi valore risulta essere 8 o da come risultato 8"
  );
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCart = 90;
let costoSpedizione = totalShoppingCart > 50 ? "spedizione gratuita" : 10;
console.log(costoSpedizione);

let totalShoppingCart1 = 30;
let spedizione = 10;
if (totalShoppingCart1 > 50) {
  console.log("Non paghi la spedizione");
} else if (totalShoppingCart1 < 50) {
  console.log(totalShoppingCart1 + 10);
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCart2 = 30;
let spedizione2 = 10;
let blackFriday = 0.2;

if (totalShoppingCart2 > 50) {
  console.log(totalShoppingCart2 - totalShoppingCart2 * blackFriday);
} else if (totalShoppingCart1 < 50) {
  console.log(totalShoppingCart2 - totalShoppingCart2 * blackFriday + 10);
}
let totalShoppingCart3 = 90;
let blackFriday1 = 0.2;
let costoSpedizione3 =
  totalShoppingCart3 > 50
    ? totalShoppingCart3 - totalShoppingCart3 * blackFriday1
    : 10;
console.log(costoSpedizione3);
/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let variabile1 = 35;
let variabile2 = 12;
let variabile3 = 75;

let highest, middle, lowest;

if (variabile1 > variabile2 && variabile1 > variabile3) {
  highest = variabile1;
  if (variabile2 > variabile3) {
    middle = variabile2;
    lowest = variabile3;
  } else {
    middle = variabile3;
    lowest = variabile2;
  }
} else if (variabile2 > variabile1 && variabile2 > variabile3) {
  highest = variabile2;
  if (variabile1 > variabile3) {
    middle = variabile1;
    lowest = variabile3;
  } else {
    middle = variabile3;
    lowest = variabile1;
  }
} else {
  highest = variabile3;
  if (variabile1 > variabile2) {
    middle = variabile1;
    lowest = variabile2;
  } else {
    middle = variabile2;
    lowest = variabile1;
  }
  console.log(`Ordinamento: ${highest}, ${middle}, ${lowest}`);
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let value = 23;
if (typeof value === 'number') {
  console.log('The value is a number');
} else {
  console.log('The value is not a number');
}
console.log (typeof value)

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let evenOrOdd=10
let result= evenOrOdd%2
if(result>0) {
  console.log('questo numero e dispari')
}
else {
  console.log ('questo numero è pari')
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let val = 7;
if ((val < 10) && (val>5)) {
  console.log("Meno di 10");
} else if (val < 5) {
  console.log("Meno di 5");
} else {
  console.log("Uguale a 10 o maggiore");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};
/* SCRIVI QUI LA TUA RISPOSTA */
me.city = "Toronto";
console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName;
console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
me.skills.pop();
console.log(me);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const numbers1to10 = [];
numbers1to10.push (1,2,3,4,5,6,7,8,9,10)
console.log(numbers1to10);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
numbers1to10.splice(9, 1, 100);
console.log(numbers1to10);
numbers1to10[9] =100
console.log ()
