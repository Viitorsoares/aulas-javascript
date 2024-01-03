const personagens = [
    { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
    { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
    { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
    { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
    { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
  ]

// map: permite criar um novo array a partir de um array exixtente
/* const nomes = []

for (let i = 0; i < personagens.length; i++) {    // Utilizando o for
  nomes.push(personagens[i].nome)  
} */

const nomes = personagens.map(function(personagem) {     // Utilizando o map 
    return personagem.nome
})

console.log(nomes)


// filter: permite obter um novo array contendo apenas elementos específicos de um array existente
/* const orcs = []

for (let i = 0; i < personagens.length; i++) {     // Utilizando for
    if (personagens[i].raca === "Orc") {
        orcs.push(personagens[i])
    } 
} */

const orcs = personagens.filter(function (personagem) {   // Utilizando filter
    return personagem.raca === "Orc"
})

console.log(orcs) 


// reduce: serve para reduzir um array existente a um valor final qualquer,
// passando um valor entre cada iteração sobre esse array e retornando ele no final
const nivelTotal = personagens.reduce(function (valorAculumado, personagem) {
    return valorAculumado + personagem.nivel
}, 0)

console.log(nivelTotal)

const racas = personagens.reduce(function(valorAculumado, personagem){
    if (valorAculumado[personagem.raca]) {
        valorAculumado[personagem.raca].push(personagem)
    } else {
        valorAculumado[personagem.raca] = [personagem]
    }
    return valorAculumado
}, {})

console.log(racas)


// sort: ordena os elementos de um array a partir de comparações entre duplas de elementos

// metodo slice criar uma copia do array que vai ser modificado.
const personagensOrdenandos = personagens.slice().sort(function (a, b){
    return a.nivel - b.nivel
})

console.log(personagensOrdenandos)