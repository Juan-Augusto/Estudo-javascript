function calculoMedia(){
    let nota1 = document.getElementById('nota1')
    let nota2 = document.getElementById('nota2')
    let media = document.querySelector('div#media-notas')

    if(nota1.value.length==0 || nota2.value.length==0){
        window.alert('[ERRO] Digite as duas notas para que o cálculo seja feito')
    }if(nota1.value>10 || nota1.value<0 || nota2.value>10 || nota2.value<0){
        window.alert("[ERRO] Nota fora dos parâmetros")
    }
    else{
        let n1 = Number(nota1.value)
        let n2 = Number(nota2.value)
        
        if((n1+n2)/2>=7){
            media.innerHTML=`<h2>Com a média de ${(n1+n2)/2} você está <strong>aprovado(a)</strong></h2>`
        }else{
            media.innerHTML=`<h2>Com a média de ${(n1+n2)/2} você está <strong>reprovado(a)</strong></h2>`
        }
    }
}