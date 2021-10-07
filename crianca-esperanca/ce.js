function calculoDoacoes(){
    let valorFloat = document.getElementById('doacao');
    let valorFix = document.getElementById('valordoado')
    let doado = document.querySelector('div#ce')

    if(valorFloat.value.length==0 && valorFix.value.length=='0'){
        window.alert('[ERRO] Não foi identificada nenhuma doação')
    }else if(valorFloat.value.length==0){
        var valorDoacao = String (valorFix.value)
        switch(valorDoacao){
            case valorDoacao='v10':
                let doacao10 = 10;
            doado.innerHTML=`<h4>Muito obrigado, você efetuou uma doação de <strong>R$ ${doacao10},00</strong></h4>`;
            break;
            case valorDoacao='v20':
                let doacao20 = 20;
            doado.innerHTML=`<h4>Muito obrigado, você efetuou uma doação de <strong>R$ ${doacao20},00</strong></h4>`;
            break;
            case valorDoacao='v30':
                let doacao30 = 30;
            doado.innerHTML=`<h4>Muito obrigado, você efetuou uma doação de <strong>R$ ${doacao30},00</strong></h4>`;
            break;
            case valorDoacao='v40':
                let doacao40 = 40;
            doado.innerHTML=`<h4>Muito obrigado, você efetuou uma doação de <strong>R$ ${doacao40},00</strong></h4>`;
            break;
        }
    }else if(valorFloat.value>0){
        let valorEscolhido = Number(valorFloat.value)
        doado.innerHTML=`<h4>Muito obrigado, você efetuou uma doação de <strong>R$ ${valorEscolhido},00</strong></h4>`;

    }else{
        window.alert('[ERRO] Valor indisponível')
    }

}