let ultimoScroll = 0;
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    let scrollAtual = window.pageYOffset;

    if (scrollAtual > ultimoScroll) {
        // DESCENDO
        header.classList.add("esconder");
    } else {
        // SUBINDO
        header.classList.remove("esconder");
    }

    ultimoScroll = scrollAtual;
});