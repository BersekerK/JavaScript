function giocoDeiDadi() {
    let giocatore1 = prompt("Inserisci il nome del primo giocatore 1: ");
    let giocatore2 = prompt("Inserisci il nome del secondo giocatore 2: ");
    let n = prompt("Quanti tiri volete fare?");
    let punteggio1 = 0;
    for (let i = 0; i < n; i++) {
        let lancio = Math.floor(Math.random() * 6) + 1;
        punteggio1 += lancio;
    }

    let punteggio2 = 0;
    for (let i = 0; i < n; i++) {
        let lancio = Math.floor(Math.random() * 6) + 1;
        punteggio2 += lancio;
    }

    console.log(`Punteggio ${giocatore1}: ` + punteggio1);
    console.log(`Punteggio ${giocatore2}: ` + punteggio2);

    if (punteggio1 > punteggio2) {
        console.log(`Il vincitore è ${giocatore1}!`);
    } else if (punteggio2 > punteggio1) {
        console.log(`Il vincitore è ${giocatore2}!`);
    } else {
        console.log("Pareggio!");
    }
}
giocoDeiDadi();
