// Generate a bingoCard from the given card and adds it to the box. 
function GenerateBingoText(bingoBox, card) {   
    let cardDiff = "";
    switch (card.Difficulty) {
        case "Omöjligt":
            cardDiff+="⋆⋆⋆⋆";
            break;
        case "Svårt":
            cardDiff+="⋆⋆⋆";
            break;
        case "Medium":
            cardDiff+="⋆⋆";
            break;
        case "Lätt":
            cardDiff+="⋆";
            break;
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
function generateBingo(n){
    let bingoIndex = Array.from(Array(bingoCards.length).keys());
    bingoIndex = shuffleArray(bingoIndex);

    const bingoFrame = document.querySelector(".bingoFrame");
    for (let i = 0; i < n**2; i++) {
        const box = document.createElement("div");
        box.classList.add("bingoBox");
        box.setAttribute("style","width:"+String(100/n-4)+"%")
        let card = bingoCards[bingoIndex[i]];
        GenerateBingoText(box, card);
        bingoFrame.appendChild(box);    
    }
}


// Saves the bingo as a PDF.
// TODO implement this
function printBingo() {
    console.log("Printer is not implemented yet.")
}

// Change the titel of the bingo to match the name in the setting.
function changeBingoName() {
    let name = document.getElementById("bingoName").value;
    let title = document.getElementById("bingoTitle");
    title.textContent = (name + " sommarbingo 2023").toUpperCase();
    console.log("Name is now " + name);    
}

function updateSettings() {
    console.log("Changing settings");
    generateBingo(4);
    changeBingoName();
}

updateSettings();
