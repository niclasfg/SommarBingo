// Generate a bingoCard from the given card and adds it to the box. 
function GenerateBingoText(bingoBox, card) {   
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

// shuffles an array and returnes a copy with random order.
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Fills the 16 bingoboxes with texts
// TODO generate the divs programmatically.
function generateBingo(){
    let bingoIndex = Array.from(Array(bingoCards.length).keys());
    bingoIndex = shuffleArray(bingoIndex);

    const bingoFrame = document.querySelector(".bingoFrame");
    for (let i = 0; i < 16; i++) {
        const box = document.createElement("div");
        box.classList.add("bingoBox");
        let card = bingoCards[bingoIndex[i]];
        GenerateBingoText(box, card);
        bingoFrame.appendChild(box);    
    }
}

generateBingo();