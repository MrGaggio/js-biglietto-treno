// Chiedere all'utente il numero di km che vuole percorrere e la sua età

const userAge = prompt ("Quanti anni hai?");
const userDistance = prompt ( "Quanti km vuoi percorrere?");

// Calcolare il prezzo totale del viaggio considerando che il prezzo del biglietto è definito in base ai km (0,21 a km)

let ticketPrice = userDistance * 0.21;


//và applicato uno sconto del 20% ai minorenni
//và applicato uno sconto del 40% agli over 65

let ticketPriceUnder18 = userDistance * 0.186;
let ticketPriceOver65 = userDistance * 0.126;

if (userAge <= 18) {
    ticketPrice = ticketPriceUnder18
    console.log(ticketPriceUnder18);
} else if ( userAge >= 65 ) {
    ticketPrice = ticketPriceOver65
    console.log(ticketPriceOver65);
}
    
// Il prezzo totale deve essere espresso con mazzimo 2 decimli