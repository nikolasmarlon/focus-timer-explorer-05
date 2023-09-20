import estado from "./estado.js"
import * as timer from './timer.js'

import * as elementos from './elementos.js'

export function toggleRunning (){

    //recebe o contrário do estado atual sempre que chamada esta função
    //estado.estaRodando = !estado.estaRodando // primeira forma de fazer 

    // outra forma de fazer
    estado.estaRodando = document.documentElement.classList.toggle('running') // o toggle retorna verdadeiro ou falso 

    timer.countdown()
}

export function set (){
    // quando clicar no botão de cronometro

    elementos.minutos.setAttribute('contenteditable', true)
}

export function reset (){
    estado.estaRodando = false

    document.documentElement.classList.remove('running')

    timer.updateDisplay() // voltar para o estado inicial do timer
}

export function toggleMusic (){
   
    //recebe o contrário do estado atual sempre que chamada esta função
    //estado.estaMudo = !estado.estaMudo // primeira forma de fazer 

    // outra forma de fazer
    estado.estaMudo= document.documentElement.classList.toggle('music-on') // o toggle retorna verdadeiro ou falso 
}

