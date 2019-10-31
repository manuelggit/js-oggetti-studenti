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
  console.log("la proprietà dello studente è: " + proprietà + " e il valore è: " + studente[proprietà]);
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
for (var nome in s1){
  console.log(s1.nome);
}
for (var nome in s2){
  console.log(s2.nome);
}
for (var nome in s3){
  console.log(s3.nome);
}
for (var nome in s4){
  console.log(s4.nome);
}
for (var nome in s5){
  console.log(s5.nome);
}
