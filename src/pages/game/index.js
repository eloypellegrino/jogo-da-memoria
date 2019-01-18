createMemoryCard(7);

const $cardClick = document.querySelectorAll(".memory-card");

$cardClick.forEach((card) => {
        card.addEventListener("click", () => {
            console.log("ae");
        });
    }
);