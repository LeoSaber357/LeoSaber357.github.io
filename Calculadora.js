function input1() {
    let input1 = Number(prompt("ingresa valor1"))

    return input1
}
function input2() {
    let input2 = Number(prompt("ingresa valor2"))
    return input2
}
function operacion() {
    let operaUsuario = prompt("ingrese la operacion")
    var numero1 = input1()
    var numero2 = input2()
    if (operaUsuario == "+") {
        let total = suma(numero1, numero2)
        window.alert(total)
    } else if (operaUsuario == "-") {
        let total = resta(numero1, numero2)
        window.alert(total)

    } else if (operaUsuario == "/") {
        let total = division(numero1, numero2)
        window.alert(total)
    } else if (operaUsuario == "*") {
        let total = multiplicacion(numero1, numero2)
        window.alert(total)
    }

    else {
        console.error("Error Dato Invalido")

    }

}
function suma(valor1, valor2) {
    let total = valor1 + valor2

    return total
}
function resta(valor1, valor2) {
    let total = valor1 - valor2

    return total
}
function division(valor1, valor2) {
    let total = valor1 / valor2
    return total
}
function multiplicacion(valor1, valor2) {
    let total = valor1 * valor2
    return total
}

operacion()
