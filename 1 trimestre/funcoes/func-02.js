// a partir da função abaixo,
// crie as variações:
// (adição, subtração, multiplicação, divisão)

function divisao(n1, n2) {
    if (n2 != 0) {
        console.log("A divisao de " + n1 + " por " + n2 + " é = " + n1 / n2)
        n1 / n2
    } else {
        console.error("impossivel dividir por ZERO!!")
    }

}
divisao(12, 5)
divisao(36, 2)

function soma(n1, n2) {
    console.log("a soma de " + n1 + " por " + n2 + " é = " + (n1 + n2))
}
soma(12, 2)
soma(34, 4)

function subtração(n1, n2) {
    console.log("a subtraçao de " + n1 + " por " + n2 + " é = " + (n1 - n2))
}
subtração(12, 2)
subtração(34, 4)

function multiplicação(n1, n2) {
    console.log("a multiplicaçao de " + n1 + " por " + n2 + " é = " + (n1 * n2))
}
multiplicação(12, 2)
multiplicação(34, 4)
