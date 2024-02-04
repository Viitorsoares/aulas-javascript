// O "import" é uma funcionalidade que importa os modulos, a sintaxe é a seguinte: {nome dos módulos} "from" "o arquivo chamado"
import {name, label, input, br} from "./functions.js" 

console.log(name)
console.log(label({ for: 'fullname', textContent: 'Nome Completo'}))
console.log(input({ id: 'fullname', name: 'fullname', placeholder: 'Digite seu nome completo...'}))
console.log(br())