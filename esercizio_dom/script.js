/* =========================================================================
    Selezione degli elementi dal DOM
   ========================================================================= */

// Selezioniamo gli elementi che ci interessano con getElementById
const titolo = document.getElementById("titolo");
const testo = document.getElementById("testo");
const errore = document.getElementById("errore");

// Input per paragrafo e relativo bottone
const inputParagrafo = document.getElementById("inputParagrafo");
const inputParagrafo1 = document.querySelector("#inputParagrafo");
const btnCambiaParagrafo = document.getElementById("btnCambiaParagrafo");

// Input per titolo e relativo bottone
const inputTitolo = document.getElementById("inputTitolo");
const btnCambiaTitolo = document.getElementById("btnCambiaTitolo");

// Input e bottone per cambiare colore
const colorPicker = document.getElementById("colorPicker");
const btnCambiaColore = document.getElementById("btnCambiaColore");

/* =========================================================================
    Funzione di utilità: Mostra un messaggio di errore
   ========================================================================= */
function mostraErrore(messaggio) {
  // Imposta il testo del div errore e lo rende visibile
  errore.textContent = messaggio;
}

function nascondiErrore() {
  // Svuota il testo del div errore
  errore.textContent = "";
}

/* =========================================================================
    1. Event listener per cambiare il PARAGRAFO
   ========================================================================= */
// btnCambiaParagrafo.addEventListener("click", function() 
// {
//   // Prendi il valore dall'inputParagrafo
//   const nuovoTesto = inputParagrafo.value;

//   // Se l'utente non ha scritto nulla
//   if (nuovoTesto.trim() === "") {
//     mostraErrore("Inserisci del testo per il paragrafo!");
//   } else {
//     // Nascondi eventuali messaggi di errore
//     nascondiErrore();
//     // Aggiorna il contenuto del paragrafo
//     testo.textContent = nuovoTesto;
//   }
// }
// );

btnCambiaParagrafo.addEventListener("click", function() {
    console.log("cliccatooo")
})
document.getElementById("labelInputParagrafo").addEventListener("click", function(event) {
    console.log("cliccatooo")
    console.log(event)
})

/* =========================================================================
    2. Event listener per cambiare il TITOLO
   ========================================================================= */
btnCambiaTitolo.addEventListener("click", function() {
  // Prendi il valore dall'inputTitolo
  const nuovoTitolo = inputTitolo.value;

  // Se l'utente non ha scritto nulla
  if (nuovoTitolo.trim() === "") {
    mostraErrore("Inserisci del testo per il titolo!");
  } else {
    nascondiErrore();
    // Aggiorna il contenuto del titolo
    titolo.textContent = nuovoTitolo;
  }
});

/* =========================================================================
    3. Event listener per cambiare il COLORE del paragrafo
   ========================================================================= */
btnCambiaColore.addEventListener("click", function() {
  // Leggiamo la tonalità scelta dall'input di tipo color
  const nuovoColore = colorPicker.value;
  
  // Possiamo nascondere eventuali errori, se li mostriamo
  nascondiErrore();
  
  // Cambiamo il colore (stile CSS) del paragrafo
  testo.style.color = nuovoColore;
});
