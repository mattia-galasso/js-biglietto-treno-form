// Recupero le gli elementi del DOM
const ticketForm = document.getElementById("ticket-form");
const nameInput = document.getElementById("name-input");
const kmInput = document.getElementById("km-input");
const ageSelect = document.getElementById("age-select");
const sendButton = document.getElementById("send-button");

// Evento invio del form
ticketForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Calcolare il prezzo del biglietto al km senza sconti
  let isTicketPrice = parseInt(kmInput.value) * 0.21;

  console.log("isTicketPrice: ", isTicketPrice, typeof isTicketPrice);

  // Calcolare il prezzo del biglietto se scontato
  //va applicato uno sconto del 20% per i minorenni
  //va applicato uno sconto del 40% per gli over 65.

  if (ageSelect.value === "underEighteen") {
    isTicketPrice = (isTicketPrice * 20) / 100;
  } else if (ageSelect.value === "overSixtyfive") {
    isTicketPrice = (isTicketPrice * 40) / 100;
  }

  console.log("PREZZO FINALE:", isTicketPrice);
});
