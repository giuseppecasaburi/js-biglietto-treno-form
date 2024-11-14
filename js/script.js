const formElm = document.getElementById("form");
const nameElm = document.getElementById("name");
const kmElm = document.getElementById("km");
const ageElm = document.getElementById("age");
const prezzoAlKm = 0.21;
const textElm = document.querySelector(".text")
const ticketElm = document.getElementById("ticket");
const resetBtnElm = document.getElementById("reset-btn");


const randomNum = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min );
} 




formElm.addEventListener("submit", (event) => {
    event.preventDefault();
    let prezzoUser = (prezzoAlKm * kmElm.value);
    let typeOfTickets = "Biglietto standard";
    if (ageElm.value === "Minorenne") {
        const scontoMin = (prezzoUser * 0.20);
        prezzoUser -= scontoMin;
        typeOfTickets = "Sconto minorenni";
    } else if (ageElm.value === "Over 65") {
        const scontoOver = (prezzoUser * 0.40);
        prezzoUser = (prezzoUser - scontoOver);
        typeOfTickets = "Sconto over65";
    }
    
    prezzoUser.toFixed(2);

    ticketElm.classList.remove("hidden");
    textElm.innerHTML = `
        <table class="">
            <thead>
                <tr>
                    <th>NOME PASSEGGERO</th>
                    <th>Offerta</th>
                    <th>Carrozza</th>
                    <th>Codice</th>
                    <th>Costo biglietto</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>${nameElm.value}</td>
                    <td>${typeOfTickets}</td>
                    <td>${randomNum(1, 14)}</td>
                    <td>${randomNum(1000, 9000)}</td>
                    <td>${prezzoUser.toFixed(2)}€</td>
                </tr>
            </tbody>
        </table>
    `


})

resetBtnElm.addEventListener("click", function() {
    formElm.reset();
    ticketElm.classList.add("hidden");
})





