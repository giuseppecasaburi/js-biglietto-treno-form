const formElm = document.getElementById("form");
const nameElm = document.getElementById("name");
const kmElm = document.getElementById("km");
const ageElm = document.getElementById("age");
const prezzoAlKm = 0.21;


formElm.addEventListener("submit", (event) => {
    event.preventDefault();
    let prezzoUser = (prezzoAlKm * kmElm.value);
    
    if (ageElm.value === "Minorenne") {
        const scontoMin = (prezzoUser * 0.20);
        prezzoUser -= scontoMin;
    } else if (ageElm.value === "Over 65") {
        const scontoOver = (prezzoUser * 0.40);
        prezzoUser = (prezzoUser - scontoOver);
    }
    console.log(prezzoUser);
})





















// // CALCOLO COSTO BIGLIETTO
// const prezzoAlKm = 0.21;
// const prezzoPasseggero = (kmPasseggero * prezzoAlKm);

// // CONDIZIONI
// if (etaPasseggero < 18) {
//     const scontoMinor = (prezzoPasseggero * 20 / 100);
//     prezzoFinale = ((prezzoPasseggero - scontoMinor).toFixed(2) + "€");
//     console.log(`Perfetto, dopo aver svolto le dovute verifiche, ti comunichiamo che essendo minorenne sul tuo biglietto è applicato uno sconto del 20% e di conseguenza per la tua tratta il costo finale del biglietto è pari a ${prezzoFinale}`);
// } else if (etaPasseggero > 65) {
//     const scontoOver = (prezzoPasseggero * 40 / 100);
//     prezzoFinale = ((prezzoPasseggero - scontoOver).toFixed(2) + "€");
//     console.log(`Perfetto, dopo aver svolto le dovute verifiche, le comunichiamo che essendo over 65 sul suo biglietto è applicato uno sconto del 40% e di conseguenza per la vostra tratta il costo finale del biglietto è pari a ${prezzoFinale}`);
// } else {
//     prezzoFinale = (prezzoPasseggero.toFixed(2) + "€");
//     console.log(`Perfetto, dopo aver svolto le dovute verifiche, ti comunichiamo che il per la tua tratta il costo del biglietto è pari a ${prezzoFinale}`);
// }