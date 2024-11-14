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




