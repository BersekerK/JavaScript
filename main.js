let frase = `i topi non avevano nipoti`;

function palindroma(frase) {
    let frasePulita = frase.replace(/[\W_]/g, '').toLowerCase();
    let fraseInvertita = frasePulita.split('').reverse().join('');
    return frasePulita === fraseInvertita;
}
console.log(frase);
console.log(palindroma(frase));