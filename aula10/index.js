const input = document.getElementById('input')

// Função que aparece a frase no input 
document.getElementById('value').addEventListener('click', function () {
    input.value = 'Olá, Mundo!'
})

// Função que muda o input para radio
document.getElementById('type').addEventListener('click', function () {
    input.setAttribute('type', 'radio')
})

// Função que aparece o placeholder
document.getElementById('placeholder').addEventListener('click', function () {
    input.placeholder = 'Dígite algo...'
})

// Função que alterna um valor do input    (A propriedade 'disabled' é booleano )
document.getElementById('disable').addEventListener('click', function () {
    input.setAttribute('disabled', !input.disabled)
})

// Função de data 
document.getElementById('data').addEventListener('click', function () {
    const data = input. dataset.something   // propriedade 'dataset' referencia a todos os atibutos 'data' do HTML
    alert("O valor do atributo data-something é: " + data)
    input.dataset.something = 'Algum outro valor'
    alert("O valor do atributo data-something agora é: " + input.dataset.something)
})