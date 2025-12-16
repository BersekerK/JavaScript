let bevanda;
do {
	bevanda = Number(prompt("Seleziona una bevanda:\n1. Acqua\n2. Coca-Cola\n3. Birra"));
	switch (bevanda) {
		case 1:
			console.log("E’ stata selezionata l’acqua.");
			break;
		case 2:
			console.log("E’ stata selezionata la Coca-Cola.");
			break;
		case 3:
			console.log("E’ stata selezionata la birra.");
			break;
		default:
			console.log("Selezione non valida. Riprova.");
	}
} while (bevanda  < 1 || bevanda > 3);
