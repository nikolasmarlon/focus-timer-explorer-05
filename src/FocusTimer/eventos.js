

import { controles } from "./elementos.js"

export function registroEventoControles(){

    controles.addEventListener('click', (evento) =>{
        
        const action = evento.target.dataset.action

        if (action === undefined){
            return
        }

        console.log(action)
    })
}