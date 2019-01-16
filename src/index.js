const $root = document.querySelector("#root");

for (i = 1; i <= 7; i++) {
    $memoryCard = document.createElement("article");
    $icon = `<img 
                        src='img/icon-${i}.png' 
                        alt='Ícone ${i}' 
                        class='icon'>
                    </img>`;

    $memoryCard.classList.add("memory-card");
    $memoryCard.insertAdjacentHTML("afterbegin", $icon);
    $root.insertBefore($memoryCard, null);
}