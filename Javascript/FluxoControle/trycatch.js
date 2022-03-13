// throw

function sayMyName(name =''){
    if (name === '') {
        throw 'Nome é obrigatorio'
    }else{
        console.log(name)
    }
    
}

//try ... catch

try {
    sayMyName('Renan Nascimento')
} catch (erro) {
    console.log(erro)
}