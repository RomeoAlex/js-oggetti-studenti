// 1 - [x]Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
// 2 - [x]Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
// 3 - [x]Creare un array di oggetti di studenti.
// 4 - []Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
// 5 - []Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

// 1 - creo oggetto
const studente = {
    nome:'Alessandro',
    congnome:'Romeo',
    eta:'37',
};
// console per verifica
// console.log(studente);
// 2 - Stampo il ciclo con le propietà e i contenuti
// for (let key in studente){
//     console.log(key,studente[key]);
    // console.log(studente[key]);
// }
// 3 - CREO UN ARRAY DI STUDENTI
const arrayStudenti = [
    {
        nome:'Alessandro',
        cognome:'Romeo',
        eta:'37',
    },
    {
        nome:'Luca',
        cognome:'Bianchi',
        eta:'25',
    },
    {
        nome:'Tommaso',
        cognome:'Rossi',
        eta:'42',
    },
    {
        nome:'Francesca',
        cognome:'Cirinna',
        eta:'19',
    }
];
for(let i = 0; i <arrayStudenti.length; i++){
    const thisClass = arrayStudenti[i];
    // Dot Notation
    console.log(thisClass.nome);
    console.log(thisClass.cognome);
    // Bracket notaion
    // console.log([nome]);
    // console.log([cognome]);
}
// 