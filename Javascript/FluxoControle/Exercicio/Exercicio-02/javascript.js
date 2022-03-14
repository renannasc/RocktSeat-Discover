let family = {
    receitas: [225, 230.1, 3010.6],
    despesas: [110, 230, 400.9, 5696.4]
}

function sum(valores) {
    let total = 0

    for (const iterator of valores) {
        total += iterator
    }

    return total
}


function calc(){
    const calculoReceitas = sum(family.receitas)
    const calculoDespesas = sum(family.despesas)
    const result = calculoReceitas - calculoDespesas

    let positivo = result >= 0
    let text = "negativo"

    if (positivo) {
        text = "Positivo"
    } 
    console.log('Seu saldo final é: ' + text + ':' + result.toFixed(2))
}


calc()