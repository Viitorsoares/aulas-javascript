function addInput() {   // Cria a função do evento   
    const ul = document.getElementById('inputs')   

    const newli = document.createElement('li')    // Cria novas listas
    newli.className = "List-item"                 // Cria uma class para a lista
    newli.innerText = "Novo input: "              // Cria texto novo input

    const newinput = document.createElement('input')  // Cria novos input
    newinput.type = 'text'    // Cria o tipo do input
    newinput.name = 'input'   // Cria o name do input

    newli.appendChild(newinput) // Adiciona os elementos como novos nós 
    ul.appendChild(newli)
}