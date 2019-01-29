memoryCardCollab = (memoryCardCreate("-back", "collabcode", "Ícone Collab"));
memoryCardJS = (memoryCardCreate("-front", "js", "Linguagem JavaScript"));
memoryCardPHP = (memoryCardCreate("-front", "php", "Linguagem PHP"));
memoryCardC = (memoryCardCreate("-front", "c++", "Linguagem PHP"));

$cardsWrapper.insertAdjacentHTML("beforeend", memoryCardJS);
$cardsWrapper.insertAdjacentHTML("beforeend", memoryCardJS);
$cardsWrapper.insertAdjacentHTML("beforeend", memoryCardPHP);
$cardsWrapper.insertAdjacentHTML("beforeend", memoryCardPHP);
$cardsWrapper.insertAdjacentHTML("beforeend", memoryCardC);
$cardsWrapper.insertAdjacentHTML("beforeend", memoryCardC);

$cardArr = Array.from(document.querySelectorAll(".memory-card"));

$cardArr.forEach(card => {
    let iconOld = card.children[0].src;
    card.onclick = () => {
        if (card.classList.contains("-front")) {
            card.classList.add("-back");
            card.classList.remove("-front");
            card.children[0].src = "img/icon-collabcode.png";
        } else if (card.classList.contains("-back")) {
            card.classList.add("-front");
            card.classList.remove("-back");
            card.children[0].src = iconOld;
        }
    }
});