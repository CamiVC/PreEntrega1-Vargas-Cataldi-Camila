


const products=[
    {
        id:"1",
        nombre:"Ultra Red Supreme",
        precio:4000,
        categoria:"labial",
        img: `./images/Red.png`,
        stock:50,
        descripcion:"Ultra hidratación, Ultra precisión y Ultra confortable",
    },
    {
        id:"2",
        nombre:"Enduring Wine",
        precio:4000,
        categoria:"labial",
        img:`./images/Wine.png`,
        stock:40,
        descripcion:"Sus beneficios con colores vivos y tono uniforme. 12hs de hidratación. Su aplicación es suave y cremosa.",
    },
    {
        id:"3",
        nombre:"Powerstay Capuccino",
        precio:4000,
        categoria:"labial",
        img:`./images/Capuccino.png`,
        stock:45,
        descripcion:"Acabado mate. Alta cobertura. A prueba de agua y súper confortable.",
    },
    {
        id:"4",
        nombre:"Ivory",
        precio:9000,
        categoria:"base",
        img:`./images/Ivory.png`,
        stock:200,
        descripcion:"Cobertura mate, ayuda a controlar el brillo.",
    },
    {
        id:"5",
        nombre:"Medium Beige",
        precio:9000,
        categoria:"base",
        img:`./images/Medium Beige.png`,
        stock:200,
        descripcion:"Empanada de pollo suavemente condimentada.",
    },
    {
        id:"6",
        nombre:"Soft Honey",
        precio: 9000,
        categoria:"base",
        img:`./images/Soft Honey.png`,
        stock:200,
        descripcion:"Acabado natural con nutrientes de agua de coco. Para todo tipo de piel.",
    },
    {
        id:"7",
        nombre:"Nude",
        precio:6000,
        categoria:"sombra",
        img:`./images/Nude.png`,
        stock:35,
        descripcion:"12 tonos metalizados y matte increíbles para combinar y crear diferentes looks. Viene con caja y pincel.",
    },
    {
        id:"8",
        nombre:"Viva la Pink!",
        precio:6000,
        categoria:"sombra",
        img:`./images/Viva la Pink.png`,
        stock:30,
        descripcion:"Paleta de 9 tonos mate y metalizados. De suave aplicación.",
    },
    {
        id:"9",
        nombre:"Multi",
        precio:6000,
        categoria:"sombra",
        img:`./images/Multi.png`,
        stock:25,
        descripcion:"Multipalette 4 en 1. Rubor, bronceador, iluminador y sombras.",
    },
]

export const getProducts = () => {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products)
        },500)
    })
}

export const getProductById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        },500)
    })
}



