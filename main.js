(function() {
	function vendingMachine() {
		const promptMessage = "Seleziona una bevanda:\n1 = acqua\n2 = coca cola\n3 = birra";

		while (true) {
			let input = prompt(promptMessage);
			if (input === null) {
				console.log("Nessuna selezione. Uscita.");
				return;
			}

			input = input.trim().toLowerCase();
			if (input === "") {
				console.log("Scelta non valida. Riprova.");
				continue;
			}

			if (["1", "1.", "acqua"].includes(input)) {
				console.log("E' stata selezionata l'acqua");
				return;
			}

			if (["2", "2.", "coca", "coca cola", "coca-cola", "cola", "cocacola"].includes(input)) {
				console.log("E' stata selezionata coca cola");
				return;
			}

			if (["3", "3.", "birra", "beer"].includes(input)) {
				console.log("E' stata selezionata birra");
				return;
			}

			console.log("Scelta non valida. Riprova.");
		}
	}

	vendingMachine();
})();

