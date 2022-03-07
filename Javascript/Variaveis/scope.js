/*
    Scope e var

    Descrição:
    
        - Scope ou Escopo determina a visibilidade de uma
          variável em um código, e para entender scope precisamos
          primeiramente entender block statement, que é o código
          presente dentro de chaves. O escopo do var é global, ou
          seja, uma variável declarada com var poderá ser usada em 
          todo o código.

*/

console.log('Existe x antes do bloco?', x)

{
    var x = 0
}

console.log('Existe x depois do bloco?', x)


/*
    Scope let e const
    
    Descrição
    Diferentemente de var, const e let são variáveis com escopo local, ou seja, só 
    são visíveis no escopo onde foram criadas e em escopos interiores ao de criação. 
    Em uma variável let, porém, pode-se alterar o valor em um escopo e o valor irá 
    persistir no escopo de criação.
*/


console.log('Existe y antes do bloco?', y)

{
    let y = 0
    console.log('Existe y dentro deste scope local criado e o valor é: ', y)
}

console.log('Existe y depois do bloco?', y)