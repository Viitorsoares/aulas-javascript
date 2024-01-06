function register(element) {   // "childer" serve para acessar os elemento filho e o "value" o valor do elemenato
    const username = element.children.username.value  
    const password = element.children.password.value
    const passwordConfirmation = element.children.passwordConfirmation.value
}

if (password === passwordConfirmation) {
    alert("Usuário " + username + " confirmado(a)")
} else {
    alert("Usuário inválido!")
}