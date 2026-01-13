// Recupero le gli elementi del DOM
const ticketForm = document.getElementById("ticket-form");
const nameInput = document.getElementById("name-input");
const kmInput = document.getElementById("km-input");
const ageSelect = document.getElementById("age-select");
const checkPass = document.getElementById("check-pass");
const sendButton = document.getElementById("send-button");
const abortButton = document.getElementById("abort-button");
const ticketBox = document.getElementById("ticket-box");
const passengerName = document.getElementById("name-passenger");
const ticketType = document.getElementById("ticket-type");
const ticketKM = document.getElementById("user-km");
const ticketPrice = document.getElementById("ticket-price");

/* console.log(nameInput.value);
console.log(kmInput.value);
console.log(ageSelect.value);
console.log(checkPass.value);
 */

// Evento invio del form
ticketForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const firstLastName = nameInput.value;
  const userKm = parseFloat(kmInput.value);
  const typeOfAge = ageSelect.value;
  const isCheckPass = checkPass.checked;

  //Se non viene compilato 1 dei 3 campi il form da errore
  if (!firstLastName || !userKm || !typeOfAge) {
    console.error("Ricontrolla inputs");
    ticketBox.classList.add("d-none");
    alert("Riempi tutti campi!");
    return;
  }

  // Calcolare il prezzo del biglietto al km senza sconti
  let isTicketPrice = userKm * 0.21;

  // Calcolare il prezzo del biglietto se scontato
  let isDiscountPrice = 0;
  let isTicketType = "Biglietto Standard";

  if (typeOfAge === "underEighteen") {
    isDiscountPrice = (isTicketPrice * 20) / 100;
    isTicketPrice = isTicketPrice - isDiscountPrice;
    isTicketType = "Biglietto Under 18";
  } else if (typeOfAge === "overSixtyfive") {
    isDiscountPrice = (isTicketPrice * 40) / 100;
    isTicketPrice = isTicketPrice - isDiscountPrice;
    isTicketType = "Biglietto Over 65";
  }

  // SE l'utente ha l'abbonamento sconto del 5%
  if (isCheckPass === true) {
    discountPass = (isTicketPrice * 5) / 100;
    isTicketPrice = isTicketPrice - discountPass;
    isTicketType += " con Abbonamento";
  }

  passengerName.innerText = firstLastName;
  ticketType.innerText = isTicketType;
  ticketKM.innerText = `${userKm} Km`;
  ticketPrice.innerText = `€ ${isTicketPrice.toFixed(2)}`;

  ticketBox.classList.remove("d-none");

  // Svuoto Form
  nameInput.value = "";
  kmInput.value = "";
  ageSelect.value = "";
  checkPass.checked = false;
});
