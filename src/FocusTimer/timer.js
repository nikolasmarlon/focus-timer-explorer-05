import estado from "./estado.js";
import * as elementos from './elementos.js'




export function countdown (){

    // verificar se o estado nao está rodando
    if(!estado.estaRodando){
        return
    }
    console.log('Menos um segundo')

    setTimeout(() => {
        countdown()
    }, 1000);

    
}

export function updateDisplay(minutes, seconds){

        // Nullish coalising operator
        // O que ele faz? Se minutes for null(ou seja, nao for passado valor, ele vai pegar o valor de minutos do)
        minutes = minutes ?? estado.minutos
        seconds = seconds ?? estado.segundos // se for nulo, pega do estado

        elementos.minutos.textContent = String(minutes).padStart(2, "0")
        elementos.segundos.textContent = String(seconds).padStart(2, "0")

}