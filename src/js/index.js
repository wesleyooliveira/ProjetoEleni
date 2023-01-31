console.log('mostrar o document', document);
console.log(document.querySelector(".botao-trailer"));

const botaoTrailer = document.querySelector(".botao-trailer");
const video = document.getElementById("video");
const linkDoVideo = video.src;
const modal = document.querySelector(".modal");

function alternarModal (){
    modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", () => {
    console.log("clicou no botao de ver o trailer");
    alternarModal();
    video.setAttribute("src", linkDoVideo)
})

const botaoFecharModal = document.querySelector(".fechar-modal");

botaoFecharModal.addEventListener("click", () => {
    modal.classList.toggle("aberto");
    video.setAttribute("src", "");
})