//function anonymous


const soma = function(number1, number2){
    let total =(number1 + number2)//Sempre informar qual o tipo de variavel(var, let e const)

    return total
}

soma(2,4)  //arguments entre parametros
soma(2,480.9)  //arguments entre parametros


let number1 = 11
let number2 = 33

console.log('SOMA '+ soma(2,33.3))
console.log('SOMA: '+ soma(number1, number2))
//console.log(total)//Nao recomendado


function fazerSuco(fruta1, fruta2){
    return 'Suco de ' + fruta1+fruta2
}

const copo = fazerSuco('banana', 'laranja')

console.log(copo)