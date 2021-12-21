// creare funzione random per 5 numeri con min e max casuali e volendo senza ripetizioni

// funzione per la generazione di numeri random
function randomNumber(min, max) {
    const result = Math.floor(Math.random() * ((max + 1) - min)) + min; 
    return result;
}

// ----------------------------------------------------------------------------------------------

// generator di 5 numeri randomici non ripetuti
let randomList = [];
    
while (randomList.length < 5) {
    let number = randomNumber(1, 1000);
    if (!randomList.includes(number)) {
        randomList.push(number);
    }
}

// modale per mostrare per i primi secondi i numeri del gioco
const modalHtml = document.querySelector('.ms_modal-number');
modalHtml.innerHTML = randomList;

// lista numeri corretti + counter dei numeri corretti inseriti
let correctList = [];
let correct = 0;

// setTimeout dedicato ai prompt
setTimeout (function() {
    // array per definire il numero di prompt da mandare
    let answers = [];
    while (answers.length < 5) {
        let writtenNum = parseInt(prompt('Inserisci i 5 numeri che hai visto:'));

        answers.push(writtenNum);

        // condition per i numeri inseriti correttamente + controllo se i numeri non siano stati ripetuti
        if (randomList.includes(writtenNum) && !correctList.includes(writtenNum)) {
            correctList.push(writtenNum);
            correct++;
        }
    }
    alert(`Risposte corrette date: ${correct}, le Risposte che hai dato: ${correctList}`);
    location.reload();
}, 30000)

// setTimeout per la modale da far sparire 
// (leggermente prima così che il prompt non possa interrompere l'effetto)
setTimeout (function() {
    modalHtml.classList.add('d-none');
}, 29500)