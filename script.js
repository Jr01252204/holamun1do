
const abrir = document.querySelector("#abrir")
const cerrar = document.querySelector("#cerrar")
const nav = document.querySelector("#nav")


abrir.addEventListener("click",() =>{
    nav.classList.add("visible")
    
})
cerrar.addEventListener("click",() =>{
    nav.classList.remove("visible")
})


document.addEventListener("click", (Event) =>{
    const clickdentonav = nav.contains(Event.Target) ;
    const abrirnav = abrir.contains(Event.target);

    if( !clickdentonav && !abrirnav  && !nav.classList.add("visible")){
    
            nav.classList.remove("visible")
    }
        
    
})  