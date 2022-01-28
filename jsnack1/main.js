let somma = 0;

let i = 0;

while (i < 10) {

    let numero = parseInt(prompt('Inserisci un numero'));

    if (isNaN(numero)) {
        numero = 0;
        alert('Hai inserito un valore non valido, numero vale 0');
    }

    somma += numero;

    i++;

}

alert('La somma dei numeri inseriti vale: ' + somma);