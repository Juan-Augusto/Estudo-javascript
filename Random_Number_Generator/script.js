

function randomNumberGenerator(){
    let result = document.getElementById('result')
        randomNumber = Math.floor(Math.random()*10000000)
        result.innerHTML = `<h3>Número aleatório: <strong>${randomNumber}</strong></h3>` 
    

}