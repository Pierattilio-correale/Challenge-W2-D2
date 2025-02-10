/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// i principali datatype in java script sono :
// Booleani , Numerici , Stringhe , Null , Undefined
// Numerici rappresentano i classici numeri 1 2 3...
// Stringhe vengono virogelettati "" oppure inesirti in mezzo agli apici '' e sono nomi come ad esempio Mario Carrello Pecora
//Booleani rappresentano true o false ovvero vero e falso
//Undefined è qualcosa che non è stato ancora definito , quindi fondamentalmente ancora va assegnato
// Null è una variabile completamente e volutamente lasciata vuota (questa se sommata ad un numero acquisirà il valore del numero)

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let myName = "Pierattilio";
console.log(myName);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let number1 = 12;
let number2 = 20;
let addition = number1 + number2;
console.log(addition);

//OPPURE SI PUò FARE:

console.log(number1 + number2);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let x = "12";
console.log(x);

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

myName = "Correale";
console.log(myName);
const nickname = "pier";
console.log(nickname);
//nickname = "giacomo"; se applico questa riga il codice da chiaramente errore poichè non si può assegnare un valore diverso alla costante.
console.log(nickname);

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let newNumber = 4;
console.log(newNumber - x);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const name1 = "john";
const name2 = "John";

console.log(name1 === name2);

//Si ottiene lo stesso risultato utilizzando due modi (replace): (in questo modo sostituisco la stringa)

const replacedString = name2.replace("John", "john");
console.log(name1 === replacedString);

// oppure usando toLowerCase: (in questo modo rendo la stringa da completamente maiuscola a minuscola)

const name3 = name2.toLowerCase("john");

console.log(name1 === name3);

//oppure direttamente :

console.log(name1 === name2.toLowerCase("John"));
