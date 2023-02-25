const isIntersecting = (entry) => {
    return entry.isIntersecting //true: dentro de la pantalla
}

const loadImage = (entry) => {
    // console.log(entry)
    const container = entry.target   // es el container DIV en este caso
    // console.log("Hello elemento visible ....")
    const imagen = container.firstChild 
    const url = imagen.dataset.src
    // Cargar la imagen 
    // imagen.src =`https://randomfox.ca/images/${random()}.jpg` ; //todo
    imagen.src = url
    observer.unobserve(container); 
}

const observer = new IntersectionObserver((entries)=>{
    entries
        .filter(isIntersecting)
        .forEach(loadImage)
})


export const  registerImage = (imagen) => {
    // Intersection observer
    observer.observe(imagen);
}

