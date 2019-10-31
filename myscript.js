// - Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso il for in tutte le proprietà.
// - Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
// - Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

var studente = {
  "nome": "Mario",
  "cognome": "Rossi",
  "età": "35",
};

console.log(studente);

for (var proprietà in studente){
  console.log("le proprietà dello studente sono: " + proprietà + " e il loro valore è: " + studente[proprietà]);
}

var s1 = {
  "nome": "Paolo",
  "cognome": "Bianchi",
  "età": "30",
};

var s2 = {
  "nome": "Sergio",
  "cognome": "Neri",
  "età": "20",
};

var s3 = {
  "nome": "Carlo",
  "cognome": "Carli",
  "età": "40",
};

var s4 = {
  "nome": "Marta",
  "cognome": "Nani",
  "età": "32",
};

var s5 = {
  "nome": "Alice",
  "cognome": "Verdi",
  "età": "25",
};

var aula = [s1, s2, s3, s4, s5];
console.log(aula);
