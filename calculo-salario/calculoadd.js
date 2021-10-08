function calcSal(){
    let salarioAtual = document.getElementById('valorsalario')
    let nomeColaborador = document.getElementById('idcolaborador')
    let dependentes = document.getElementById('numerodependentes')
    let novoSalario = document.querySelector('[novoSalario]')

    if(nomeColaborador.value.length=='0' || salarioAtual.value.length==0 || dependentes.value.length==0){
        window.alert('[ERRO] Faltam dados para o cálculo do salário.')
    }else if(salarioAtual.value<0 || dependentes.value<0){
        window.alert('[ERRO] Valores inválidos.')
    }else if(salarioAtual.value>0 && dependentes.value>=0){
        let d = Number(dependentes.value)
        let nC = String(nomeColaborador.value)
        let sA = Number(salarioAtual.value)
        switch(d){
             case 0:
                 novoSalario.innerHTML=`<h2>O novo salário do colaborador <strong>${nC}</strong> é de <strong>R$ ${(sA)+(sA*0.05)},00</strong></h2>`            
                 break
            case 1:
            case 2:
            case 3:        
                novoSalario.innerHTML=`<h2>O novo salário do colaborador <strong>${nC}</strong> é de <strong>R$ ${(sA)+(sA*0.1)},00</strong></h2>`            
                break
            case 4:
            case 5:    
            case 6:
                novoSalario.innerHTML=`<h2>O novo salário do colaborador <strong>${nC}</strong> é de <strong>R$ ${(sA)+(sA*0.15)},00</strong></h2>`            
                break      
            default:
                novoSalario.innerHTML=`<h2>O novo salário do colaborador <strong>${nC}</strong> é de <strong>R$ ${(sA)+(sA*0.18)},00</strong></h2>`            

        }
    }
}