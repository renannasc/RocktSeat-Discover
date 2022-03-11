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