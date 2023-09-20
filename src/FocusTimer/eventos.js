

import { controles } from "./elementos.js"

export function registroEventoControles(){

    controles.addEventListener('click', (evento) =>{
        
        console.log(evento.target)
    })
}