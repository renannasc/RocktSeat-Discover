/**
 * if ... else
 * 
 */


// Condicao EF e ELSE
// console.log('Condicao EF e ELSE')
// if (false) {
//     console.log('Se verdadeiro faça')
// } else {
//     console.log('Se nao faça isso aqui...')
// }



console.log('Pequena funcao para medir temperatura')
function medirTemperature(suatemperatura){
let temperature = 36

    if (suatemperatura <= temperature) {
        console.log('Sua temperatura esta normal, sua temperatura atual é: ' + suatemperatura + "°")
    } else {
        console.log('Voce esta com FEBRE, sua temperatura atual é: ' + suatemperatura + "°")
    }

    return suatemperatura
}

medirTemperature(36)