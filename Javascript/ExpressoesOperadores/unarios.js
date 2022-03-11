/**
 * Operadores do tipo unario
 * typeof
 * delete
 */


console.log(typeof 22)

const person = {
    name: 'Renan',
    age: 28
}

console.log("Antes do delete")
console.log(person)

delete person.age

console.log("Depois do delete" + person)
console.log(person)
