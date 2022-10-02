console.log("Bingo");


function NameBingo() {
    var name = prompt("Vad heter du?")
    const header = document.querySelector(".header");
    header.textContent = name.toUpperCase() + "\nSOMMARBINGO\n2023";
}
    


function bingoText(bingoBox) {   
    var bingoText = `
    '<div class='bingoText'>
    <h1> Uppgift </h1>
    <p>Beskrivning av bingorutan som ska utföras.</p>
    </div>
    `;
    bingoBox.innerHTML = bingoText;
}

const bingoBoxes = document.querySelectorAll(".bingoBox");
bingoBoxes.forEach((box) => {
    bingoText(box);
});
