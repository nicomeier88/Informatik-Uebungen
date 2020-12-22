/*
Aufgabe 1
a) Erstellen Sie eine Funktion als 'function expression',
welche Fahrenheit in Celsius umwandelt.

Die Umwandlungsformel lautet: celsius = (fahrenheit - 32) * 5 : 9

b) Testen Sie Ihre Funktion mind. zwei Mal mit verschiedenen Fahrenheit-Werten.

 */

//Ab hier Ihr Programm einfügen
let convertFahrenheitToCelsius = function (fahrenheit) {
    let celsius = (fahrenheit - 32) * 5 / 9
    return celsius
}


//Ende Ihres Programms

//Aufruf und Ausgabe
let tempOne = convertFahrenheitToCelsius(32);
let tempTwo = convertFahrenheitToCelsius(68);
console.log(tempOne)
console.log(tempTwo)


/*
Aufgabe 2
a) Erstellen Sie eine Funktion als 'function declaration',
welche zwei Zahlen subtrahiert.

b) Testen Sie Ihre Funktion mind. zwei Mal mit verschiedenen Fahrenheit-Werten.
 */

//Ab hier Ihr Programm einfügen
function sub(a,b) {
    return a - b;
}
//Ende Ihres Programms

//Aufruf von sub
let paramA = 20;
let paramB = 10;
//Ausgabe des Resultats
console.log(`${paramA} - ${paramB} = ${sub(paramA,paramB)}`);

