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

let giusti = [];
let correct = 0;

setTimeout (function() {
    
    let risposte = [];
    while (risposte.length < 5) {
        let writtenNum = parseInt(prompt('Inserisci i 5 numeri che hai visto:'));
        console.log(writtenNum);
        
        risposte.push(writtenNum);
        if (randomList.includes(writtenNum)) {
            giusti.push(writtenNum);
            correct++;
        }
    }
    console.log(correct, giusti);

    
}, 3000)

// verificare se i 5 numeri inseriti coincidono ai 5 numeri randomici
