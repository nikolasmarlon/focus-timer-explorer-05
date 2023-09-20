

import { controles } from "./elementos.js"

import * as actions from './acoes.js'

import * as elementos from './elementos.js'
import estado from "./estado.js"

import { updateDisplay } from "./timer.js"

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

    elementos.minutos.onkeypress = (evento) => 
        //expresão regular tudo que nao for número retorna false
        /\d/.test(evento.key)

        // se passar de 60, quando sair do focus, fica somente 60
        elementos.minutos.addEventListener('blur', (evento) => {
            let time = evento.currentTarget.textContent


            // operador ternário
            time = time > 60 ? 60 : time


            estado.minutos = time
            estado.segundos = 0

            updateDisplay()

            elementos.minutos.removeAttribute('contenteditable')
        })

}   