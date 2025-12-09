console.log("--- SOLUZIONE CON IF/ELSE ---");

function convertVotoIfElse(v) {
  if (v < 18) {
    console.log("insufficiente");
  } else if (v >= 18 && v < 21) {
    console.log("sufficiente");
  } else if (v >= 21 && v < 24) {
    console.log("buono");
  } else if (v >= 24 && v < 27) {
    console.log("distinto");
  } else if (v >= 27 && v <= 29) {
    console.log("ottimo");
  } else if (v === 30) {
    console.log("eccellente");
  }
}

let v = 29;
console.log("Voto: " + v);
convertVotoIfElse(v);

console.log("\n--- SOLUZIONE CON SWITCH ---");


function convertVotoSwitch(voto) {
  switch (true) {
    case voto < 18:
      console.log("insufficiente");
      break;
    case voto >= 18 && voto < 21:
      console.log("sufficiente");
      break;
    case voto >= 21 && voto < 24:
      console.log("buono");
      break;
    case voto >= 24 && voto < 27:
      console.log("distinto");
      break;
    case voto >= 27 && voto <= 29:
      console.log("ottimo");
      break;
    case voto === 30:
      console.log("eccellente");
      break;
  }
}


console.log("\nRisultati con IF/ELSE:");
votiTest.forEach(voto => {
  process.stdout.write("Voto " + voto + ": ");
  convertVotoIfElse(voto);
});

console.log("\nRisultati con SWITCH:");
votiTest.forEach(voto => {
  process.stdout.write("Voto " + voto + ": ");
  convertVotoSwitch(voto);
});
