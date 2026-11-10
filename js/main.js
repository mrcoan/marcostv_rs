// Filtro por categoria

const filtros = document.querySelector(".section-filtros");

if (filtros) {
    const botoes = filtros.querySelectorAll(".filtro");
    const cards = document.querySelectorAll("[data-categoria]");

    filtros.addEventListener("click", function (e) {
        const botao = e.target.closest(".filtro");
        if (!botao) return;

        const escolhida = botao.dataset.filtro;

        // marca só o botão clicado como ativo
        botoes.forEach(function (b) {
            b.classList.toggle("ativo", b === botao);
        });

        // mostra ou esconde cada card
        cards.forEach(function (card) {
            const mostrar = escolhida === "todos" || card.dataset.categoria === escolhida;
            card.hidden = !mostrar;
        });
    });
}

// Aviso ao enviar formulário

const form = document.getElementById("form-contato");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Obrigado! Sua mensagem foi enviada.");
        form.reset();
    });
}