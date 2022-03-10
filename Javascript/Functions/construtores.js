function Person(name, lastname){
    this.name = name
    this.lastname = lastname
    this.walk = function(){
        return "Pode caminhar"
    }
}

const renan = new Person('Renan', 'Nascimento')
const joao = new Person('joao', 'Souza')


console.log(renan.walk())
console.log(joao)