function createMemoryCard(cards) {
    for (i = 1; i <= cards; i++) {
        $memoryCard = document.createElement("article");
        $icon = `<img 
                            src='img/icon-${i}.png' 
                            alt='Ícone ${i}' 
                            class='icon'>
                        </img>`;

        $memoryCard.classList.add("memory-card");
        $memoryCard.insertAdjacentHTML("afterbegin", $icon);
        $cardsWrapper.insertBefore($memoryCard, null);
    }
}