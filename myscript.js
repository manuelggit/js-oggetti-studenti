// - Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso il for in tutte le proprietà.
// - Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
// - Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

// creo oggetto vuoto che ospiterà nome, cognome ed età

var studente = {
  "nome": '',
  "cognome": '',
  "età": '',
};

// stampo le proprietà dell'oggetto
for (var proprietà in studente){
  console.log("la proprietà dello studente è: " + proprietà);
}

// creo 5 studenti che andranno nell'array aula

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

// creo l'array aula

var aula = [s1, s2, s3, s4, s5];
console.log(aula);

// stampo nome e cognome di ogni studente

for (var nome in s1){
  console.log(s1.nome + ' ' + s1.cognome);
}
for (var nome in s2){
  console.log(s2.nome + ' ' + s2.cognome);
}
for (var nome in s3){
  console.log(s3.nome + ' ' + s3.cognome);
}
for (var nome in s4){
  console.log(s4.nome + ' ' + s4.cognome);
}
for (var nome in s5){
  console.log(s5.nome + ' ' + s5.cognome);
}

// creo i prompt per far inserire allo studente i propri dati

var nomeStudente = prompt("Inserisci il nome");
var cognomeStudente = prompt("Inserisci il cognome");
var etaStudente = parseInt(prompt("Inserisci l'età"));

// assegno ai prompt le proprietà dell'oggetto studente
studente.nome = nomeStudente;
studente.cognome = cognomeStudente;
studente.età = etaStudente;

// lo stampo in pagina e lo pusho in aula
console.log(studente);
aula.push(studente);
