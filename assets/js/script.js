const botao = document.getElementById("botao");
const body = document.body;
const header = document.getElementById("header");

botao.addEventListener("click", () => {
    if(body.classList.contains("claro")) {
        body.classList.replace("claro", "escuro");
        header.classList.replace("claro", "escuro")
        botao.textContent = "☀️";
    } else {
        body.classList.replace("escuro", "claro");
        botao.textContent = "🌙";
    }
})