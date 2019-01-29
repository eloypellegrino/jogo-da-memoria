function memoryCardCreate(nameClass, nameIcon, alt) {
    return `<article class="memory-card ${nameClass}">
                <img 
                    src="img/icon-${nameIcon}.png" 
                    alt="Ícone ${alt}" 
                    class="icon">
                </img>
              </article>`;
}