// Inserimento temperatura da parte dell'utente

let temperatura = prompt("Inserisci la temperatura in gradi Celsius:");

// ============================================
// SOLUZIONE CON IF-ELSE
// ============================================

// function descrizioneTemperaturaIfElse(temperatura) {
//   if (temperatura < -10) {
//     console.log("copriti…ancora ti raffreddi");
//   } else if (temperatura < 0) {
//     console.log("non e' tanto il freddo quanto l'umidità'");
//   } else if (temperatura < 20) {
//     console.log("non ci sono piu' le mezze stagioni");
//   } else if (temperatura < 30) {
//     console.log("mi dia una peroni sudata");
//   } else if (temperatura >= 30) {
//     console.log("lu mare, lu sole, lu ientu");
//   }
// }

// console.log("===== SOLUZIONE IF-ELSE =====");
// console.log("Temperatura inserita: " + temperatura);
// descrizioneTemperaturaIfElse(temperatura);


// ============================================
// SOLUZIONE CON SWITCH CASE
// ============================================

function descrizioneTemperaturaSwitch(temperatura) {
  // Utilizziamo switch con true per valutare le condizioni
  switch (true) {
    case temperatura < -10:
      console.log("copriti…ancora ti raffreddi");
      break;
    case temperatura < 0:
      console.log("non e' tanto il freddo quanto l'umidità'");
      break;
    case temperatura < 20:
      console.log("non ci sono piu' le mezze stagioni");
      break;
    case temperatura < 30:
      console.log("mi dia una peroni sudata");
      break;
    case temperatura >= 30:
      console.log("lu mare, lu sole, lu ientu");
      break;
  }
}

console.log("\n===== SOLUZIONE SWITCH CASE =====");
descrizioneTemperaturaSwitch(temperatura);

