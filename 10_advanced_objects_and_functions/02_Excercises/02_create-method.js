import Person from './person';

/*
Aufgabe 1:
a. Erstellen Sie ein neues Objekt 'person1',
mit den Eigenschaften Hans Müller, männlich, geboren am 12.Nov. 1973.
b. Geben Sie den vollen Namen aus mit der Methode .getFullName()
c. Programmieren Sie den Setter der Klasse Person. Setzen Sie den Namen
neu via Setter auf "Hans Meili" (hat den Nachnamen seiner Ehefrau angenommen)
d. Programmieren Sie den Setter der Klasse Person. Geben Sie den vollen Namen
aus mit dem Getter aus.
*/

//Lösungen:
//1a.
let person1 = new Person("Hans", "Muster", "männlich", "1973-11-12");
//1b.
console.log(person1.getFullName());
//1c.
person1.fullName = "Hans Meili";
//1d.
console.log(person1.fullName);

