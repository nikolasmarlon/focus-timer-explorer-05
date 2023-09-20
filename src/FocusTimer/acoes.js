import estado from "./estado.js"
import * as timer from './timer.js'

import * as elementos from './elementos.js'

import * as audio from './sounds.js'

export function toggleRunning (){

    //recebe o contrário do estado atual sempre que chamada esta função
    //estado.estaRodando = !estado.estaRodando // primeira forma de fazer 

    // outra forma de fazer
    estado.estaRodando = document.documentElement.classList.toggle('running') // o toggle retorna verdadeiro ou falso 

    timer.countdown()
    audio.buttonPressAudio.play()
}

export function set (){
    // quando clicar no botão de cronometro

    elementos.minutos.setAttribute('contenteditable', true)
    elementos.minutos.focus()
    
    
}

export function reset (){
    estado.estaRodando = false

    document.documentElement.classList.remove('running')

    timer.updateDisplay() // voltar para o estado inicial do timer
    audio.buttonPressAudio.play()
}

export function toggleMusic (){
   
    //recebe o contrário do estado atual sempre que chamada esta função
    //estado.estaMudo = !estado.estaMudo // primeira forma de fazer 

    // outra forma de fazer
    estado.estaMudo= document.documentElement.classList.toggle('music-on') // o toggle retorna verdadeiro ou falso 

    if(estado.estaMudo){
        audio.bgAudio.play()
        return
    }

    audio.bgAudio.pause()
}

