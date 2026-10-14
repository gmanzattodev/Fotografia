gsap.registerPlugin(ScrollTrigger);


const fundo_img = document.querySelector(".fundo-img")

const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "+=3000",
        scrub: 2,
        pin: true,
        markers: true
    }
});
tl.to(".info-hero",{
    opacity: 0,
})

tl.to(fundo_img, {
    scale: 1.15,
    duration: 2
}, 0)


.to(".info-hero-premium", {
    opacity: 1,

}, 0.7)

const buttons = document.querySelectorAll(".btn-selecao button")
const pacote1 = document.querySelector(".pacote1")
const pacote2 = document.querySelector(".pacote2")
const pacote3 = document.querySelector(".pacote3")
const pacote4 = document.querySelector(".pacote4")

buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
        buttons.forEach(element => {
            element.classList.remove("active")
        });
        button.classList.add("active")

        if (index === 0) {
            pacote1.textContent = "230";
            pacote2.textContent = "380";
            pacote3.textContent = "450";
            pacote4.textContent = "510";
        } else if (index === 1) {
            pacote1.textContent = "350";
            pacote2.textContent = "490";
            pacote3.textContent = "590";
            pacote4.textContent = "690";
        }
    })
})
const perguntas = document.querySelectorAll(".pergunta")

perguntas.forEach((pergunta) => {
    pergunta.addEventListener("click", () => {
        const duvida = pergunta.closest(".duvida")

        duvida.classList.toggle("active")
    })
})