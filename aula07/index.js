// função que ira acontecer quando o evento "click" ocorrer 
function register(ev) {
    console.log(ev)
    const sectionElement = ev.currentTarget.parentNode
    const username = sectionElement.children.username.value
    const password = sectionElement.children.password.value
    const passwordConfirmation = sectionElement.children.passwordConfirmation.value

    if (password === passwordConfirmation) {
        alert("Usuário " + username + " registrado!")
    } else {
        alert("As senhas não conferem")
    }
}

const button = document.getElementById('register-button')

// addEventListener adiciona eventos no html
button.addEventListener('click', register)

// removeEventListener remove o evento addEventListener
function removeListener() {  
    button.removeEventListener('click', register)
    alert('Event removed')
}

button.addEventListener('mouseover', function (ev) {
    console.log(ev.currentTarget)
})