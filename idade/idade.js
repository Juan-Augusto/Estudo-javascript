function calculoIdade(){
    var anoref = document.getElementById('anorefer')
    var anonasc = document.getElementById('anonasci')
    var idade = document.querySelector('div#idade-real')
    var maiorOuNao = document.querySelector('div#maior-de-idade')    
    if(anoref.value.length==0 && anonasc.value.length==0){
        window.alert('[ERRO] Insira os valores solicitados, por favor')
    }else{
        var ar=Number(anoref.value)
        var an=Number(anonasc.value)
        idade.innerHTML=`<h2>A sua idade em ${ar} será ${ar-an}</h2>`
    }
    if(ar-an>18){
        maiorOuNao.innerHTML=`<h2>E você será maior de idade</h2>`
    }else{
        maiorOuNao.innerHTML=`<h2>E você será menor de idade</h2>`
    }
}


