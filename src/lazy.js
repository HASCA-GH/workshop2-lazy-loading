const isIntersecting = (entry) => {
    return entry.isIntersecting //true: dentro de la pantalla
}

const accion = (entry) => {
    // console.log(entry)
    const nodo = entry.target
    console.log("Hello elemento visible ....")

    observer.unobserver(nodo); 
}

const observer = new IntersectionObserver((entries)=>{
    entries
        .filter(isIntersecting)
        .forEach(accion)
})


export const  registerImage = (imagen) => {
    // Intersection observer
    observer.observe(imagen);
}

