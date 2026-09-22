gsap.registerPlugin(ScrollTrigger, SplitText)

const secoes = document.querySelectorAll(".secao")
const proximo = document.querySelector(".proximo")
const anterior = document.querySelector(".anterior")

let image = 0

proximo.addEventListener("click", () => {
    secoes[image].classList.remove("active")

    image++

    if(image >= secoes.length){
        image = 0
    }
    const info = secoes[image].querySelector(".info-hero")

    gsap.fromTo(info, {
        opacity: 0,
        y: 100
    }, {
        opacity: 1,
        y: 0,
        duration: 1
    })

    secoes[image].classList.add("active")
})

anterior.addEventListener("click", () => {
    secoes[image].classList.remove("active")

    image--

    if(image < 0){
        image = secoes.length - 1
    }
    
    const info = secoes[image].querySelector(".info-hero")

    gsap.fromTo(info, {
        opacity: 0,
        y: 100
    }, {
        opacity: 1,
        y: 0,
        duration: 1
    })

    secoes[image].classList.add("active")
})

const header = document.querySelector(".header")



// SOBRE //

const h4 = document.querySelector(".sobre .info h4")
const p = document.querySelector(".sobre .info p")
const h2 = document.querySelector(".sobre .info h2")
const button = document.querySelector(".sobre .info button")
const imagem = document.querySelector(".sobre .image img")

const text = new SplitText(h2, {
    type: "chars"
})
const text1 = new SplitText(p, {
    type: "chars"
})

const time = gsap.timeline({
    scrollTrigger: {
        trigger: ".sobre",
        start: "top 60%",
        end: "bottom 100%",
        scrub: 3
    }
})

time.from(imagem, {
    x: -400,
    duration: 3
}, 0)

time.from(h4, {
    opacity: 0,
    x: 10,
    duration: 2
}, 1)

time.from(text.chars, {
    opacity: 0,
    y: 40,
    stagger: 0.05,
    duration: 1
}, 2)

time.from(text1.chars, {
    opacity: 0,
    y: 30,
    stagger: 0.05,
    duration: 1
}, 3)

time.from(button, {
    opacity: 0,
    y: 20,
    duration: 1
}, 4)

// SERVIÇOS //

const container = document.querySelector(".servicos-container");

gsap.to(container, {
    x: () => -(container.scrollWidth - window.innerWidth),

    ease: "none",

    scrollTrigger: {
        trigger: ".servicos",
        start: "top top",
        end: () => `+=${container.scrollWidth}`,
        scrub: 2,
        pin: true,

        invalidateOnRefresh: true
    }
});

const servicos = document.querySelectorAll(".servico")


gsap.from(servicos, {
    opacity: 0,
    y: 100,
    duration: 1,
    stagger: 0.3,
    scrollTrigger: {
        trigger: ".servicos",
        start: "top 30%",
        end: "bottom bottom",
        scrub: 1
    }
})


// GALERIA //

const buttons = document.querySelectorAll(".secao-nav nav button")
buttons[0].classList.add("color")
buttons.forEach(button => {
    button.addEventListener("click", () => {
        buttons.forEach(btn => {
            btn.classList.remove("active")
            buttons[0].classList.remove("color")
             
        })
        button.classList.add("active")
        
        


        const btn = button.dataset.categoria


    })
    
})

