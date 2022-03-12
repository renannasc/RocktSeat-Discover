//Compara valores e retornar um boolean como resposta a comparação


let one = 1
let two = 2

//  == IGUAL
console.log(two == 1)
console.log(one == "1")

//  != DIFERENTE
console.log(one != two)
console.log(one != 1)
console.log(one != "1")

// OUTROS OPERADORES comparação estritamente igual e estritamente diferente

let x = 1
let y = 2

// === estritamente igual a
console.log("comparação estritamente igual e estritamente diferente")
console.log(x === 1)
console.log(y === 1)
// === estritamente diferente a
console.log(x !== 1)
console.log(y !== 2)


// OUTROS OPERADORES comparação >= <=
console.log("Maior Menor ou igual ")
let number1 = 1
let number2 = 2

console.log(number1 > number2)
console.log(number1 >= number2)
console.log(number1 < 0)
console.log(number1 >= 10)


//OPERADORES DE ATRIBUIÇÃO
console.log("Operadores de atribuição")

let numberx = 5

numberx += 10 //numbeerx = numberx + 10
numberx -= 11
numberx /= 12
numberx *= 13
numberx **= 14
console.log(numberx)


//OPERADORES LOGICOS
console.log("Operadores Logicos")

let pao = false
let queijo = true

console.log(pao && queijo)

console.log(pao || queijo)

console.log(!queijo)


//OPERADORES CONDICIONAL TERNARIO

console.log("Operado condicional ternario")
let paozinho = false
let requeijao = true

const niceBreakfast = paozinho && requeijao? 'Cafe top' : 'Cafe ruim'
const niceBreakfasts = paozinho || requeijao? 'Cafe +-' : 'Cafe pessimo'

console.log(niceBreakfast)
console.log(niceBreakfasts)


let age = 16
const canDrive = age >= 18 ? 'can drive' : 'cant drive'
console.log(canDrive)


//OPERADORES PARA STRING
console.log("Operadores para string")

console.log('a' == 'a')

let alpha = 'alpha'
console.log(alpha + 'bet' + 's')
//or
console.log(alpha+='bet')


//TYPE FALSY E TRUTHY
console.log('Typer falsy e truthy')

console.log('9' + 5)
console.log('FALSY OU TRUTHY')
/**
 * Valores como os abaixo sao considerados falsy
 * 
 * 0
 * -0
 * ""
 * null
 * undefined
 * NaN
 */
console.log('VALORES FALSY')
console.log(false ? 'verdadeiro' : 'falso')
console.log(0 ? 'true' : 'false')
console.log(-0 ? 'true' : 'false')
console.log("" ? 'true' : 'false')
console.log(null ? 'true' : 'false')
console.log(undefined ? 'true' : 'false')
console.log(NaN ? 'true' : 'false')

/**
 * Valores como os abaixo sao considerados truthy
 * 
 * true
 * {}
 * []
 * 1
 * 3.23
 * "0"
 * "false"
 * -1
 * infinity
 * -infinity
 * 
 */

 console.log('VALORES TRUTHY')
console.log(true ? 'true' : 'false')
console.log({} ? 'true' : 'false')
console.log([] ? 'true' : 'false')
console.log(1 ? 'true' : 'false')
console.log(1.11 ? 'true' : 'false')
console.log("0" ? 'true' : 'false')
console.log("false" ? 'true' : 'false')
console.log(-1 ? 'true' : 'false')
console.log(Infinity ? 'true' : 'false')
console.log(-Infinity ? 'true' : 'false')

