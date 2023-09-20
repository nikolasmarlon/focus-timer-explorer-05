

import { controles } from "./elementos.js"

import * as actions from './acoes.js'

export function registroEventoControles(){

    controles.addEventListener('click', (evento) =>{
        
        const action = evento.target.dataset.action

        if (typeof actions[action] != "function"){
            return
        }

        actions[action]()
    })
}