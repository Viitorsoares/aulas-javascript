const person = {
    name: "Luke",
    job: "Farmer",
    parents: ["Anakin", "Padme"]
}
// forma tradicional
const name = person.name  

// Com desestruturação objeto
const { job, parents } = person 
console.log(name, job, parents)

// com desestruturação array
const  [fatcher, mother] = parents // o array aceita qualquer nome como parametro.
console.log(fatcher, mother)

// Com desestruturação function
function createUser({name, job, parents}) { 
    const id = Math.floor(Math.random() * 9999)
    return {
        id,
        name,
        job,
        parents
    }
}

const luke = createUser(person)
console.log(luke)