function contagem(){
    let acr = document.getElementById('salto')
    let final = document.getElementById('fim')
    let inicio = document.getElementById('inicio')
    let cont = document.getElementById('cont')
    if(acr.value.length == 0 || final.value.length==0 || inicio.value.length == 0){
        window.alert('[ERRO] Dados insuficientes.')
    }else{
        let v0 = Number(inicio.value)
        let f = Number(final.value)
        let i = Number(acr.value)
        
        cont.innerHTML+=`${v0}`
        while(v0<f){
            v0= v0+i
            cont.innerHTML+=`\u{1F449}${v0} `
        }
       cont.innerHTML+=`\u{1F3C1}`

    }
}