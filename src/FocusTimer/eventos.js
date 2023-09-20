

import { controles } from "./elementos.js"

import * as actions from './acoes.js'

import * as elementos from './elementos.js'

export function registroEventoControles(){

    controles.addEventListener('click', (evento) =>{
        
        const action = evento.target.dataset.action

        if (typeof actions[action] != "function"){
            return
        }

        actions[action]()
    })
}

// fica observando evento
export function setMinutes() {

    // quando estiver em focus executa a função
    elementos.minutos.addEventListener('focus', () => {
        elementos.minutos.textContent = ''
    })
}   