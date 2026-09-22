const acompanhamento = import.meta.glob(
    "../acompanhamento/pequenas/*.webp",
    {
        eager: true,
        import: "default"
    }
);

const gestante = import.meta.glob(
    "../gestante/pequenas/*.webp",
    {
        eager: true,
        import: "default"
    }
);

const newborn = import.meta.glob(
    "../newborn/pequenas/*.webp",
    {
        eager: true,
        import: "default"
    }
);

const galeria = [
    ...Object.values(acompanhamento).map((imagem, index) => ({
        name: `Acompanhamento ${index + 1}`,
        categoria: "Acompanhamento",
        imgPequena: imagem
    })),

    ...Object.values(gestante).map((imagem, index) => ({
        name: `Gestante ${index + 1}`,
        categoria: "gestante",
        imgPequena: imagem
    })),

    ...Object.values(newborn).map((imagem, index) => ({
        name: `Newborn ${index + 1}`,
        categoria: "newborn",
        imgPequena: imagem
    }))
];

export default galeria;