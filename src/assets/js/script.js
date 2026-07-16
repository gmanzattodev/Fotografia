const btn_hero = document.querySelector(".btn-hero");
const seta = document.querySelector(".seta");
const foto_titulo = document.querySelector(".foto-titulo");

btn_hero.addEventListener("click", () => {
  btn_hero.classList.toggle("btn-active");
  seta.classList.toggle("seta-active");
});

window.addEventListener("scroll", () => {
  const y = window.scrollY;
  if (y > 400) {
    foto_titulo.classList.add("fechamento");
  } else {
    foto_titulo.classList.remove("fechamento");
  }
});

const file = document.getElementById("file");
const selecionar = document.querySelector(".selecionar");
const preview = document.querySelector(".preview");

selecionar.addEventListener("click", () => {
  file.click();
});

let imagemSelecionada = null;

file.addEventListener("change", (e) => {
  const imagem = e.target.files[0];

  if (!imagem) return;

  imagemSelecionada = URL.createObjectURL(imagem);
  preview.src = imagemSelecionada;
  aquecer.classList.remove("desabilitado");
});

const revelar = document.querySelector(".revelar");
const aquecer = document.querySelector(".aquecer");
const luz = document.querySelector(".luz");

revelar.classList.add("desabilitado");
aquecer.classList.add("desabilitado");

aquecer.addEventListener("click", () => {
  luz.classList.add("piscando");
  contador();
});

function contador() {
  const contador = document.querySelector(".contador");
  const texto = document.querySelector(".texto");

  let numero = 0;

  const intervalo = setInterval(() => {
    numero++;
    texto.style.color = "red";

    if (numero >= 100) {
      clearInterval(intervalo);
      texto.style.color = "green";
      luz.classList.remove("piscando");
      revelar.classList.remove("desabilitado");
    }

    contador.textContent = numero + "%";
  }, 100);
}
const linhaRevelacao = document.querySelector(".linhaRevelacao");
const saindoRev = document.querySelector(".saindo");
linhaRevelacao.addEventListener("animationend", () => {
  linhaRevelacao.classList.remove("mostrar");
});

const guardaFotos = [];

revelar.addEventListener("click", () => {
  if (!imagemSelecionada) return;

  preview.src = "/fundo.png";
  saindoRev.src = imagemSelecionada;
  aquecer.classList.add("desabilitado");

  gsap.set(".linhaRevelacao", {
    y: -40,
    rotateX: 85,
    scale: 0.95,
    filter: "grayscale(100%) blur(10px)",
    opacity: 1,
    transformPerspective: 900,
  });

  gsap.to(".linhaRevelacao", {
    y: 10,
    rotateX: 0,
    scale: 1,
    filter: "grayscale(0%) blur(0px)",
    duration: 5.5,
    ease: "power3.out",
  });

  guardaFotos.push({
    img: imagemSelecionada,
  });
  console.log(guardaFotos)
  Redenrizar()
});

const fotos = document.querySelector(".fotos");

function Redenrizar() {
  fotos.innerHTML = guardaFotos
    .map(
      (foto) =>
        `
    <div>
        <img src=${foto.img} alt="">
    </div>
    `,
    )
    .join("");
}
