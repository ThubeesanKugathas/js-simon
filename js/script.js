// Descrizione:
// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri vengono nascosti nell’html e l’utente deve inserire, 
// uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e 
// quali dei numeri da indovinare sono stati individuati.
// Consigli del giorno:
// * Pensate prima in italiano.
// * Dividete in piccoli problemi la consegna.
// * Individuate gli elementi di cui avete bisogno per realizzare il programma.


// creare funzione random per 5 numeri con min e max casuali e volendo senza ripetizioni

// funzione per la generazione di numeri random
function randomNumber(min, max) {
    const result = Math.floor(Math.random() * ((max + 1) - min)) + min; 
    return result;
}

// funzione per generare 5 numeri randomici non ripetuti
let randomList = [];
    
while (randomList.length < 5) {
    let number = randomNumber(1, 100);
    if (!randomList.includes(number)) {
        randomList.push(number);
    }
}
console.log(randomList);

setTimeout (function() {
    const scritto = [];
    for (let i = 0; i < 5; i++) {
        const writtenNum = parseInt(prompt('inserisci i 5 numeri che hai visto:'));
        scritto.push(writtenNum);
        console.log(writtenNum);
    }
    console.log(scritto);
}, 3000)
