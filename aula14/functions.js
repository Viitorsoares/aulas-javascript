// O "export" é funcionalidade criada para exportar o código, tem que ser colocado em primeiro.
export const name = "Vitor"

export function label(attributes) {
    const element = document.createElement('label')
    Object.assign(element, attributes)
    return element
}
  
export function input(attributes) {
    const element = document.createElement('input')
    Object.assign(element, attributes)
    return element
}
  
export function br() {
    const element = document.createElement('br')
    return element
}