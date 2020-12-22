/*
Aufgabe 1
a) Starten Sie einen XMLHttpRequest() über die URL https://jsonplaceholder.typicode.com/todos/.
Überprüfen Sie den Output.
b) Fügen Sie einen Fehler in die URL unter 1a ein.
c) Erweitern Sie Ihr Programm in dem readyState = 4 überprüft wird
jedoch wenn der HTTP Status ungleich 200 ist, dann eine Meldung auf der Console
ausgibt.
 */

const request = new XMLHttpRequest();
request.addEventListener('readystatechange', (evt) => {
    
   //Lösung 1a
    
fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(json => console.log(json));
    
    request.open('GET', 'http://localhost:3000/puzzle');
request.send();
    
    //Lösung 1c
    
    const request = new XMLHttpRequest();
request.addEventListener('readystatechange', (evt) => {
    if (evt.target.readyState === 4 && evt.target.status === 200) {
        console.log(evt.target);
    }
});
});

//Todos abfragen
request.open('GET', 'http://localhost:3000/puzzle'/);
request.send();
