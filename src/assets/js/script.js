const btn_hero = document.querySelector(".btn-hero")
const seta = document.querySelector(".seta")
const foto_titulo = document.querySelector(".foto-titulo")

btn_hero.addEventListener("click", () => {
    btn_hero.classList.toggle("btn-active")
    seta.classList.toggle("seta-active")
})

window.addEventListener("scroll", () => {
    const y = window.scrollY
    if(y > 400){
        foto_titulo.classList.add("fechamento")
    } else {
        foto_titulo.classList.remove("fechamento")
    }
})