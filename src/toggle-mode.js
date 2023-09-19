


// acessibilidade 
let darkMode = true

const buttonToggle = document.getElementById('toggle-mode')

buttonToggle.addEventListener('click', (evento) => {


    // verifica se a classe light está na tag html, se nao estiver, adiciona. caso esteja, retira
    document.documentElement.classList.toggle('light') // documentElemento é o html

    const mode = darkMode ? 'light': 'dark'

    evento.currentTarget.querySelector('span').textContent = `${mode} mode ativado`

    darkMode = !darkMode // recebe o contrário do valor atual
})

// Fim acessibilidade