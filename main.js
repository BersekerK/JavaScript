  const totalGatti = 99;
  const gattiPerFila = 7;


	const numeroFile = Math.floor(totalGatti / gattiPerFila);
	const resto = totalGatti % gattiPerFila;
	const mancanti = resto === 0 ? gattiPerFila : (gattiPerFila - resto);
	const avanzo = resto === 0 ? 0 : resto;

	console.log(`Ci sono ${numeroFile} file di gatti e ne mancano ${mancanti} per una nuova fila, con un avanzo di ${avanzo}`);
