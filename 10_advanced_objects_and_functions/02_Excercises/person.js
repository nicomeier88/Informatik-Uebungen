/*
Eine Vorlage wird mit class erstellt (nicht zu verwechseln CSS-Klasse)
Beispiel für Person
 */

/* Klasse */
class Person {
    /* Konstruktor */
    constructor(firstName, lastName, geschlecht, birthday) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.geschlecht = geschlecht;
        this.birthday = birthday;
    }

    /* Getter */
 get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    /* Setter */

 set fullName(fullName) {
        const names = fullName.split(' ');
        this.firstName = names[0];
        this.lastName = names[1];
    }

    /* Methode - kann Parameter haben */
    getFullName(){
        return `Mein Name ist ${this.firstName} ${this.lastName}.`;
    }

}

export default Person;
