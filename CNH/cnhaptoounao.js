function aptoOuNao(){
    let anoNascimento = document.getElementById('anoDeNascimento')
    let aptidao = document.querySelector('[apto-ou-nao]')
    let anoatual = new Date() 
    let anoidade = anoatual.getFullYear()
    let an = Number(anoNascimento.value)
    if(anoNascimento.value.length==0){
        window.alert('[ERRO] Digite a data de nascimento')

    }else if(anoidade-an>=18){
        
        aptidao.innerHTML= `<h2>Você tem ${anoidade-an} anos, portanto está apto para tirar a sua CNH.<h2>`
        
    }else{
        aptidao.innerHTML= `<h2>Você tem ${anoidade-an} anos, portanto <strong>não</strong> está apto para a sua CNH.</h2>`

    }
}