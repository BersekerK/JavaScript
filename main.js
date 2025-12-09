console.log("Numeri pari da 1 a 20:");

let sommaDispari = 0;
let countDispari = 0;

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    // Numero pari
    console.log(i);
  } else {
    // Numero dispari - accumula per calcolare media
    sommaDispari += i;
    countDispari++;
  }
}

// Calcola e stampa la media dei numeri dispari
let mediaDispari = sommaDispari / countDispari;
console.log(`\nMedia dei numeri dispari: ${mediaDispari}`);
