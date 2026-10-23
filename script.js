/* Script per il menu di navigazione */
/* Selezioniamo gli elementi HTML */
const pulsanteMenu = document.querySelector(".menu-toggle");
const menu = document.querySelector(".site-nav");

/* Apertura e chiusura del menu */
pulsanteMenu.addEventListener("click", function() {

    const aperto = menu.classList.toggle("aperto");

    pulsanteMenu.setAttribute("aria-expanded", aperto);
    pulsanteMenu.setAttribute("aria-label",
        aperto ? "Chiudi menu" : "Apri menu");

    pulsanteMenu.textContent = aperto ? "✕" : "☰";

});

/* Chiusura del menu dopo la selezione di una voce */
const collegamenti = menu.querySelectorAll("a");

collegamenti.forEach(function(collegamento) {

    collegamento.addEventListener("click", function() {

        menu.classList.remove("aperto");

        pulsanteMenu.setAttribute("aria-expanded", "false");
        pulsanteMenu.setAttribute("aria-label", "Apri menu");
        pulsanteMenu.textContent = "☰";

    });

});
