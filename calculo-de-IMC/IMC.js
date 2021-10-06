function calcularIMC(){
    let mass = document.getElementById('massa')
    let alt = document.getElementById('altura')
    let IMC = document.querySelector('div#IMC')

    if(mass.value.length==0 || alt.value.length==0){
        window.alert('[ERRO] Dados insuficientes')
    }else{
        let m = Number(mass.value)
        let a = Number(alt.value)
        if((m/(a*a))<17){
            IMC.innerHTML = `<h2>Seu IMC de ${(m/(a*a))} é considerado <strong>muito baixo</strong>, busque informações.</h2>`
        }else if((m/(a*a))>=17 && (m/(a*a))<18.5){
            IMC.innerHTML = `<h2>Seu IMC de ${(m/(a*a))} é considerado <strong>abaixo</strong> dos parâmetros saudáveis.</h2>`
        }else if((m/(a*a))>18.5 && (m/(a*a))<25){
            IMC.innerHTML = `<h2>Seu IMC de ${(m/(a*a))} está <strong>dentro</strong> dos parâmetros saudáveis.</h2>`
        }else if((m/(a*a))>25 && (m/(a*a))<30){
            IMC.innerHTML = `<h2>Seu IMC de ${(m/(a*a))} está <strong>acima</strong> dos parâmetros saudáveis.</h2>`
        }else if((m/(a*a))>30 && (m/(a*a))<35){
            IMC.innerHTML = `<h2>Seu IMC de ${(m/(a*a))} é considerado de <strong>obeso</strong>.</h2>`
        }else if((m/(a*a))>35 && (m/(a*a))<40){
            IMC.innerHTML = `<h2>Seu IMC de ${(m/(a*a))} é considerado de <strong>obesidade severa</strong>.</h2>`
        }else if((m/(a*a))>40){
            IMC.innerHTML = `<h2>Seu IMC de ${(m/(a*a))} é considerado de <strong>obesidade mórbida</strong>.</h2>`
        }
    }
}