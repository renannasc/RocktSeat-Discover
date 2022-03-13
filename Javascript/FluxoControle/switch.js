/**
 * Switch em JS
 * 
 */

let expression = 'a'

switch(expression){
    case 'a':
        console.log('a')
        break
    case 'b':
        console.log('a')
        break
    case 'c':
        console.log('c')
        break

    default:
        break

}

function calculadora(number1, operador, number2){
    let resultado = 0

    switch(operador){
        case '+':
            resultado = number1 + number2
            break
        case '-':
            resultado = number1 - number2
            break
        case '*':
            resultado = number1 * number2
            break
        case '/':
            resultado = number1 / number2
            break
        default:
            console.log('Nao desenvolvido')   
    }
    return resultado
}

console.log('Resultador da expressão: ' + calculadora(10, '*', 11))
