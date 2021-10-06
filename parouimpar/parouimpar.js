function parOuImpar(){
    let num = document.getElementById('numcheck')
    let checagem = document.querySelector('[check]')
    if(num.value%2==0){
        let n= Number(num.value)
        checagem.innerHTML=`<h2>${n} é par</h2>`
    }else{
        let n= Number(num.value)
        checagem.innerHTML=`<h2>${n} é impar</h2>`
    }

}
