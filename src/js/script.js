gsap.registerPlugin(ScrollTrigger);

const images = [
  "./src/assets/img/foto2.png",
  "./src/assets/img/foto3.png",
  "./src/assets/img/foto4.png",
  "./src/assets/img/foto5.png",
  "./src/assets/img/foto1.png",
];

const search = document.querySelector(".search");
const inputText = document.getElementById("inputText");

search.addEventListener("click", () => {
  inputText.classList.toggle("activeImg");
});

function animationHero() {
  const anterior = document.querySelector(".anterior");
  const next = document.querySelector(".next");
  const contagem = document.querySelector(".contagem");
  const hero = document.querySelector(".hero");

  let atual = 0;
  next.onclick = () => {
    atual++;

    if (atual >= images.length) {
      atual = 0;
    }
    hero.style.background = `url("${images[atual]}") center center no-repeat`;
    hero.style.backgroundSize = "cover";
    contagem.textContent = String(atual + 1).padStart(2, "0");
  };
  anterior.onclick = () => {
    atual--;

    if (atual < 0) {
      atual = images.length - 1;
    }
    hero.style.background = `url("${images[atual]}") center center no-repeat`;
    hero.style.backgroundSize = "cover";
    contagem.textContent = String(atual + 1).padStart(2, "0");
  };
}
animationHero();

function animationHeader() {
  const header = document.querySelector(".header");
  window.addEventListener("scroll", () => {
    const y = window.scrollY;

    if (y >= 200) {
      header.style.backgroundColor = "#161616";
      header.style.transition = "1s";
    } else {
      header.style.backgroundColor = "transparent";
    }
  });
}
animationHeader();


function Responsividade(){
  const menu = document.querySelector(".menu")
  const navbar = document.querySelector(".menu .navbar")

  menu.addEventListener("click", () => {
    menu.classList.toggle("aparecer")
    navbar.classList.toggle("active")
  })
}
Responsividade()

function animacaoHero(){
  
}