


const products=[
    {
        id:"1",
        nombre:"Ultra Red Supreme",
        precio:4000,
        categoria:"labial",
        img: ``,
        stock:50,
        descripcion:"Ultra hidratación, Ultra precisión y Ultra confortable",
    },
    {
        id:"2",
        nombre:"Enduring Wine",
        precio:4000,
        categoria:"labial",
        img:``,
        stock:40,
        descripcion:"Sus beneficios con colores vivos y tono uniforme. 12hs de hidratación. Su aplicación es suave y cremosa.",
    },
    {
        id:"3",
        nombre:"Powerstay Capuccino",
        precio:4000,
        categoria:"labial",
        img:``,
        stock:45,
        descripcion:"Acabado mate. Alta cobertura. A prueba de agua y súper confortable.",
    },
    {
        id:"4",
        nombre:"Ivory",
        precio:9000,
        categoria:"base",
        img:``,
        stock:200,
        descripcion:"Cobertura mate, ayuda a controlar el brillo",
    },
    {
        id:"5",
        nombre:"Medium Beige",
        precio:9000,
        categoria:"base",
        img:``,
        stock:200,
        descripcion:"Empanada de pollo suavemente condimentada",
    },
    {
        id:"6",
        nombre:"Soft Honey",
        precio:9000,
        categoria:"base",
        img:``,
        stock:200,
        descripcion:"Acabado natural con nutrientes de agua de coco. Para todo tipo de piel.",
    },
    {
        id:"7",
        nombre:"Borgoña",
        precio:6000,
        categoria:"delineador",
        img:``,
        stock:35,
        descripcion:"Para dar un efecto de mayor volumen",
    },
    {
        id:"8",
        nombre:"Chocolate",
        precio:6000,
        categoria:"delineador",
        img:``,
        stock:30,
        descripcion:"¡Definí tus ojos impactantes! Delineá líneas intensas que duran hasta 12 horas.",
    },
    {
        id:"9",
        nombre:"Malva",
        precio:6000,
        categoria:"delineador",
        img:``,
        stock:25,
        descripcion:"Delineado súper preciso para resultados increíbles.",
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



