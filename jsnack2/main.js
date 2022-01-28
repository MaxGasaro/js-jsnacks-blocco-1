const n = parseInt(prompt('Inserisci fino a che valore vuoi eseguire il cubo'));

if (isNaN(n) || n <= 0) {
    alert('Hai inserito un valore non valido. Il valore predefinito ora è 3!');
    n = 3;
}

for (let i = 1; i <= n; i++) {
    
    //definisco istruzione per eseguire la potenza di un numero, ci sono più metodi
    //primo metodo
    let cubo = Math.pow(i,3);
    //secondo metodo
    let cuboAlternativo = i**3
    //terzo metodo
    let cuboTerzoMetodo = i*i*i;

    console.log(cubo);
    console.log(cuboAlternativo);
    console.log(cuboTerzoMetodo);

}
