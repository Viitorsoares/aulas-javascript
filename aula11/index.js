// Armazenamento sessionStorage
document.getElementById('sessionBtn').addEventListener('click', function () {
    const input = document.getElementById('session')
    sessionStorage.setItem('info', input.value) //essa linha salva o conteúdo (sessionStorage tem 2 paramêtros: A [chave]'info' e o [valor]input.value)
    input.value = ''
})

document.getElementById('readSession').addEventListener('click', function () {
    const info = sessionStorage.getItem('info')
    alert('A informação salva é: ' + info)
})


// Armazenamento localStorage
document.getElementById('localBtn').addEventListener('click', function () {
    const input = document.getElementById('local')
    localStorage.setItem('texto', input.value)
    input.value = ''
})

document.getElementById('readLocal').addEventListener('click', function () {
    const texto = localStorage.getItem('texto')
    alert('A informação salva é: ' + texto)
})


// Armazenamento cookie
document.getElementById('cookieBtn').addEventListener('click', function () {
    const input = document.getElementById('cookie')
    const cookie = 'info=' + input.value + ';'   // cria o conteúdo co cookie
    const expiration = 'expires=' + new Date(2024,1, 3) + ';'  // cria uma data de expiração do cookie
    const path = 'path=/;' // cria o caminho do cookie no navegador
    document.cookie = cookie, expiration, path
    input.value = ''
    console.log(document.cookie)
})

document.getElementById('cookie2Btn').addEventListener('click', function () {
    const input = document.getElementById('cookie2')
    const cookie = 'text=' + input.value + ';'   // 
    const expiration = 'expires=' + new Date(2024,0, 30) + ';'  
    const path = 'path=/;' // 
    document.cookie = cookie, expiration, path
    input.value = ''
    console.log(document.cookie)
})