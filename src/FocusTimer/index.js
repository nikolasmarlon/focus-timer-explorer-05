import estado from "./estado.js"
import * as eventos from "./eventos.js"


import * as timer from './timer.js'

export function start(minutes, seconds) {
    estado.minutos = minutes
    estado.segundos = seconds


    timer.updateDisplay()

    eventos.registroEventoControles()
    eventos.setMinutes()
}