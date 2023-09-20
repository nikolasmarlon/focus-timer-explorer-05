import estado from "./estado.js";
import * as elementos from './elementos.js'
import { reset } from './acoes.js'
import { kichenTimer } from "./sounds.js";


export function countdown (){

    // toda vez que inicar limpamos o timeout
    clearTimeout(estado.countdownId)

    // verificar se o estado nao está rodando
    if(!estado.estaRodando){
        return
    }
    

    let minutos = Number(elementos.minutos.textContent)
    let segundos = Number(elementos.segundos.textContent)

    segundos--

    if(segundos < 0){
        segundos = 59
        minutos--
    } 
    
    if(minutos < 0){
        reset()
        kichenTimer.play()
        return
    }

    
    updateDisplay(minutos, segundos)

    estado.countdownId = setTimeout(() => countdown(), 1000);

    
}

export function updateDisplay(minutes, seconds){

        // Nullish coalising operator
        // O que ele faz? Se minutes for null(ou seja, nao for passado valor, ele vai pegar o valor de minutos do)
        minutes = minutes ?? estado.minutos
        seconds = seconds ?? estado.segundos // se for nulo, pega do estado

        elementos.minutos.textContent = String(minutes).padStart(2, "0")
        elementos.segundos.textContent = String(seconds).padStart(2, "0")

}