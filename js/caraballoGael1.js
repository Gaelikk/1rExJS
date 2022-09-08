let edat = parseInt(prompt("Introdueix un valor numèric:")); //Demana un valor i el guarda a la variable edat

if (Number.isInteger(edat)) { //Comprova si el valor introduït és un Enter
    document.write(`Tens ${edat} anys`); //Mostra per pantalla l'edat introduïda
}else{ //Si el valor és l'oposat a un número entra aquí
    let edat = parseInt(prompt("Valor incorrecte, torna a introduir-lo")); //Mostra el prompt un altre cop
}