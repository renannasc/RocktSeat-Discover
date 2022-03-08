//Conclusao


let weight

console.log(typeof weight)


let name = 'Renan'
let age = 28
let starts = 99.9
let issubscribed = true

console.log(name,age,starts, issubscribed)

let student = {
    name : 'Renan',
    age : 28,
    starts : 99.9,
    issubscribed: true
}

console.log(typeof student)
console.log(student)


console.log(student.name + ' de idade ' + student.age + ' pesa ' + student.starts + ' Kg.')


let students = []

students = [
    student
]

console.log(students)

console.log(students[0])


const john = {
    name: "John",
    age: 20,
    weight: 89.2,
    issubscribed: false
}

students = [
    student,
    john
]

//or

students[1] = john

console.log(students[1])