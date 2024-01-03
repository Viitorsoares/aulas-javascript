function calcular(a, b, operacao) {
    console.log("Realizando uma operação.")
    const resultado = operacao(a, b)
    return resultado
}

function somar(x, y) {
    console.log("Realizando uma soma")
    return x + y 
}

// Repare que não usamos os () ao lado do nome da função, porque ao fazer isso estariamos executando a função.
console.log(calcular(3, 5, somar))   

// Tambem podemos escrever funções anônimas dentro da propria chamada da high-order function
console.log(calcular(8, 4, function (x, y) {
    console.log("Realizando uma subtração.")
    return x - y
}))


// Um exemplo de comum de high-order function no j.s é a função .forEach() dos arrays
function exibirElemento(elemento, indice, array) {
    console.log({
        elemento,
        indice,
        array
    })
}

const lista = ["maça", "Banana", "Laranja", "Limão"]

// Forma tradicional
for(let i = 0; i < lista.length; i++){
    exibirElemento(lista[i], i, lista)
}

// Forma funcional
lista.forEach(exibirElemento)

// Tambem poderia ser feito
lista.forEach(function (elemento, indice, array) {
    console.log({
        elemento,
        indice,
        array
    })
})