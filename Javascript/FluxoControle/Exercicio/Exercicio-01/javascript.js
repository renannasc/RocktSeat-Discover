let score = 0

 
function calcScore(score) {
    
let scoreA = score >= 90 && score <= 100
let scoreB = score >= 80 && score <= 89
let scoreC = score >= 70 && score <= 79
let scoreD = score >= 60 && score <= 69
let scoreE = score < 60 && score >= 0

let scoreFinal

    if (scoreA) {
        scoreFinal = "A"
        console.log('Sua nota final é: ' + scoreFinal)

    } else if (scoreB){
        scoreFinal = "B"
        console.log('Sua nota final é: ' + scoreFinal)


    }else if(scoreC){
        scoreFinal = "C"
        console.log('Sua nota final é: ' + scoreFinal)


    }else if(scoreD){
        scoreFinal = "D"
        console.log('Sua nota final é: ' + scoreFinal)


    }else if(scoreE){
        scoreFinal = "E"        
        console.log('Sua nota final é: ' + scoreFinal)

    }else{
        console.log('Nota invalida, por favor informar uma nota entre 0 a 100')
    }
    return scoreFinal
}

calcScore(100)