let numbers = [5, 12, 8, 130, 44];

// Calcola la somma degli elementi
let somma = numbers.reduce((acc, num) => acc + num, 0);

// Calcola la media
let media = somma / numbers.length;

// Filtro i valori minori della media
let sotto_media = numbers.filter(num => num < media);

// Filtro i valori sopra la media
let sopra_media = numbers.filter(num => num > media);

// Output
console.log("Media:", media);
console.log("Valori minori:", sotto_media);
console.log("Valori maggiori:", sopra_media);