console.log("Bingo");


function NameBingo() {
    var name = prompt("Vad heter du?")
    const header = document.querySelector(".header");
    header.textContent = name.toUpperCase() + "\nSOMMARBINGO\n2023";
}

function GenerateBingoText(bingoBox, index) {   
    let card = bingoCards[index];
    let cardDiff = "";
    switch (card.Difficulty) {
        case "Omöjligt":
            cardDiff+="⋆";
        case "Svårt":
            cardDiff+="⋆";
        case "Medium":
            cardDiff+="⋆";
        case "Lätt":
            cardDiff+="⋆";
    }
    let bingoText = "<div class='bingoText'>\n <h1 id='cardName'>" + card.Name + "</h1>"+"<p id='cardText'>"+ card.Text + "</p>\n <p id='cardDifficulty'>" + cardDiff +"</p>\n </div>";
    bingoBox.innerHTML = bingoText;
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const bingoBoxes = document.querySelectorAll(".bingoBox");
let bingoIndex = Array.from(Array(bingoCards.length).keys());
bingoIndex = shuffleArray(bingoIndex);
console.log(bingoIndex);
let index = 0; 
bingoBoxes.forEach((box) => {
    GenerateBingoText(box, bingoIndex[index]);
    index++;
});