/*    VALOR POR PARÂMETRO
function dobro(x) {
    alert("O dobro de " + x + " é " + (x * 2))
}

dobro(5) // O dobro de 5 é 10
dobro(7)

dobro()  // vai dar unndefined, pois não tem valor de entrada */


/*     VALOR PADRÃO
function dizerOla(nome = "mundo") {  // O valor "mundo" é o valor padrão
    alert("Ola, " + nome + "!")
}

dizerOla("Vitor")  // Olá, Vitor!
dizerOla()  // Valor padrão. Olá, mundo! */


/*    MAIS DE UM VALOR POR PARÂMETRO
function soma(a, b) {    // É possivel mais de um valor por parâmetro
    alert("O resultado da soma é " + (a + b))
}

soma(5, 5)  // O resultado da soma é 10 */


/*    ORDEM DOS PARÂMETROS
function criarUsuario(nome, email, senha, tipo = "admin") {   // Essa é a ordem dos parâmetros
    const usuario = {
        nome,  // mesmo que nome: nome
        email,
        senha,
        tipo
    }

    console.log(usuario)
}

criarUsuario("Vitor", "vitor@gmail.com", "123456")  // Seguindo a ordem dos parâmetros
criarUsuario("vitor@gmail.com", 'vitor', "123456")  // Não seguindo a ordem dos parâmetros*/


// CASO TENHA MUITOS VALORES NO PARÂMETRO, EXISTE UM MÉTODO PARA JUNTAR MTODOS OS VALORES EM UM SÓ 
