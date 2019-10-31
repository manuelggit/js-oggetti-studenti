// - Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso il for in tutte le proprietà.
// - Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
// - Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

// creo oggetto vuoto che ospiterà nome, cognome ed età

var studente = {
  "nome": '',
  "cognome": '',
  "eta": '',
};

// stampo le proprietà dell'oggetto
for (var proprietà in studente){
  console.log("la proprietà dello studente è: " + proprietà);
}

// creo 5 studenti che andranno nell'array aula

var s1 = {
  "nome": "Paolo",
  "cognome": "Bianchi",
  "eta": "30",
};

var s2 = {
  "nome": "Sergio",
  "cognome": "Neri",
  "eta": "20",
};

var s3 = {
  "nome": "Carlo",
  "cognome": "Carli",
  "eta": "40",
};

var s4 = {
  "nome": "Marta",
  "cognome": "Nani",
  "eta": "32",
};

var s5 = {
  "nome": "Alice",
  "cognome": "Verdi",
  "eta": "25",
};

// creo l'array aula

var aula = [s1, s2, s3, s4, s5];
console.log(aula); // aula prima dell'arrivo del nuovo studente

aggiuntaLista(studente)

// creo i prompt per far inserire allo studente i propri dati

var nomeStudente = prompt("Inserisci il nome");
var cognomeStudente = prompt("Inserisci il cognome");
var etaStudente = parseInt(prompt("Inserisci l'età"));

// assegno ai prompt le proprietà dell'oggetto studente
studente.nome = nomeStudente;
studente.cognome = cognomeStudente;
studente.eta = etaStudente;

// pusho lo studente nell'aula
aula.push(studente);

// lo stampo in pagina

console.log(aula); // aula al completo

aggiuntaLista(studente) // stampo la lista con il nuovo studente

// FUNZIONI
function aggiuntaLista(nuovoIscritto) {
  var array = aula
  for (i = 0; i < array.length; i++){
    console.log(array[i].nome + ' ' + array[i].cognome);
  } // stampo nome e cognome dell'aula senza il nuovo studente
}
