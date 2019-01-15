const $root = document.querySelector("#root");
const $memoryCard = document.createElement("article");
const $iconElope = `<img 
                    src='img/icon-elope.png' 
                    alt='Ícone - Eloy' 
                    class='icon'>
                </img>`;

$memoryCard.classList.add("memory-card");
$root.insertBefore($memoryCard, null);
$memoryCard.insertAdjacentHTML("afterbegin", $iconElope);

for (i = 2; i <= 4; i++) {
    var $iconFront = `<img 
                src='img/icon-${i}.png' 
                alt='Ícone ${i}' 
                class='icon'>
            </img>`;
    var $memoryCardFront = $memoryCard[i];

    $memoryCardFront = $memoryCard.cloneNode(true);
    $root.insertBefore($memoryCardFront, $memoryCard);
    $memoryCardFront.classList.add("memory-card-front");
    $memoryCardFront.removeChild($memoryCardFront.childNodes[0]);
    $memoryCardFront.insertAdjacentHTML("afterbegin", $iconFront);
}