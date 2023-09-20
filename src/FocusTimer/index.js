import estado from "./estado.js"
import * as eventos from "./eventos.js"

export function start(minutes, seconds) {
    estado.minutos = minutes
    estado.segundos = seconds


    eventos.registroEventoControles()
}