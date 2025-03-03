// Recupero gli elementi dal DOM
const priceInput = document.getElementById("priceInput");
const couponCheck = document.getElementById("couponCheck");
const calculateBtn = document.getElementById("calculateBtn");
const resultBox = document.getElementById("resultBox");
const prezzoInizialeEl = document.getElementById("prezzoIniziale");
const scontoApplicatoEl = document.getElementById("scontoApplicato");
const prezzoFinaleEl = document.getElementById("prezzoFinale");

// Funzione per calcolare lo sconto
function calcolaSconto() {
  // 1. Ottieni il prezzo inserito e convertilo in numero
  let prezzo = parseFloat(priceInput.value);

  // Se il prezzo non è valido, interrompi e mostra un messaggio
  if (isNaN(prezzo) || prezzo <= 0) {
    alert("Inserisci un prezzo valido!");
    return;
  }

  // 2. Verifica se l'utente ha il coupon
  let haCoupon = couponCheck.checked;
  let sconto = 0;

  // 3. Applica le regole di sconto
  // - 20% se l'utente ha il coupon
  if (haCoupon) {
    sconto += 0.20;
  }
  // - 5% aggiuntivo se il prezzo supera i 100€
  if (prezzo > 100) {
    sconto += 0.05;
  }

  // 4. Calcola il prezzo finale
  let prezzoFinale = prezzo - (prezzo * sconto);

  // 5. Mostra il risultato
  //   - facciamo comparire il box con i risultati
  resultBox.style.display = "block";
  prezzoInizialeEl.textContent = "Prezzo iniziale: " + prezzo.toFixed(2) + " €";
  scontoApplicatoEl.textContent = "Sconto applicato: " + (sconto * 100) + "%";
  prezzoFinaleEl.textContent = "Prezzo finale: " + prezzoFinale.toFixed(2) + " €";
}

// Aggancio l'evento click al bottone "Calcola Sconto"
calculateBtn.addEventListener("click", calcolaSconto);
