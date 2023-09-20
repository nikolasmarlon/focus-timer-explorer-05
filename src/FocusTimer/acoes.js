import estado from "./estado.js"


export function toggleRunning (){

    //recebe o contrário do estado atual sempre que chamada esta função
    //estado.estaRodando = !estado.estaRodando // primeira forma de fazer 

    // outra forma de fazer
    estado.estaRodando = document.documentElement.classList.toggle('running') // o toggle retorna verdadeiro ou falso 
}

export function set (){
    console.log('set')
}

export function reset (){
    estado.estaRodando = false

    document.documentElement.classList.remove('running')
}

export function toggleMusic (){
   
    //recebe o contrário do estado atual sempre que chamada esta função
    //estado.estaMudo = !estado.estaMudo // primeira forma de fazer 

    // outra forma de fazer
    estado.estaMudo= document.documentElement.classList.toggle('music-on') // o toggle retorna verdadeiro ou falso 
}

