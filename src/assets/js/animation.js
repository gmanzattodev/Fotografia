gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);
const secao = document.querySelector(".principal")

const texto = new SplitText(".foto-titulo", {
    types: "chars"
})
const texto2 = new SplitText(".foto-titulo-2", {
    types: "chars"
})
gsap.set(".portifolio", {
    opacity: 0,
    y: 200
});

gsap.set(".carde", {
    opacity: 0
});
const tl = gsap.timeline({
    scrollTrigger: {
        trigger: secao,
        start: "top top",
        end: "+=3500",
        scrub: true,
        pin: true,
    }
});
tl.to(".hero .logo-camera", {
    scale: 1.6,
    x: 300,
    y: 300,
    duration: 1
}, 0)
.to(".cards", {
    opacity: 0,
    stagger: 0.2,
    duration:1
}, 0)
.to(".info-hero", {
    opacity: 0,
    y: -200,
    ease: "linear",
    duration: 1
}, 0)
.to(".servicoes", {
    opacity: 1,
    visibility: "visible",
    pointerEvents: "auto",
    duration: 1,
    y: -100,
    ease: "linear"
}, 1)
.to(texto.chars, {
    opacity: 0,
    y: 200,
    duration: 1,
    stagger: 0.2,
}, 2.5)
.from(texto2.chars, {
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    y: 200
}, 3)
.to(".hero .logo-camera", {
    opacity: 0,
    duration: 1,
    ease: "linear"
}, 2)
.to(".servicoes", {
    opacity: 0,
    y: -200,
    ease: "linear",
    duration: 2,
    pointerEvents: "none",
    visibility: "hidden",
    
}, 2)
.to(".marilia-logo", {
    opacity: 1,
    visibility: "visible",
    pointerEvents: "auto",
    duration: 1,
    ease: "power2.out",

}, 2.6)
.to(".portifolio", {
    opacity: 1,
    y: 0,
    duration: 1
}, 4)

.to(".carde", {
    opacity: 1,
    stagger: 0.3,
    duration: 1
}, 4)


const time = gsap.timeline();
time.from(".logo", {
    opacity: 0,
    duration: 1,
    delay: 0.3
}, 0)
.from(".nav-bar", {
    opacity: 0,
    duration: 1,
    y: -200
}, 0.2)
.to(".btn-header button", {
    opacity: 1,
    duration: 1,
    ease: "power2.out"
})
.from(".container p", {
    opacity: 0,
    y: 100,
    duration: 1
}, 0.2)
.fromTo(".btn-hero", {
    opacity: 0,
}, {
    opacity: 1,
    duration: 1,
}, 0.5)
.to(".icons-redes i", {
    opacity: 1,
    stagger: 0.2,
    duration: 1,
    ease: "back.out"
}, 1.6)
.from(".sobre", {
    opacity: 0,
    duration: 1,
    y: 100
}, 1.7)
/*
const portl = gsap.timeline({
    scrollTrigger: {
        trigger: ".Portfolio-section",
        start: "top top",
        end: "+=2000",
        markers: true,
        scrub: true,
        pin: true
    }
})
    */


