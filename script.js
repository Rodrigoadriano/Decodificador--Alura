///// DOM ////
let input = document.querySelector('.textarea')
let lupa = document.querySelector('.lupa')
let resultado = document.querySelector('.resultado')
let conjunto = document.querySelector('.conjunto')
let btn3 = document.querySelector('.btn3')

function Criptografar(){

    lupa.style.display = 'none'
    conjunto.style.display = 'flex'
    
    let i = input.value.toLowerCase()
    
    let tratado =  i.replaceAll("e","enter").replaceAll("i", "imes").replaceAll("a", "ai").replaceAll("o", "ober").replaceAll("u", "ufat")
    
    btn3.innerHTML = "Copiar"
    btn3.disabled = false
    
    return  resultado.innerHTML = tratado

}
function descriptografar(){

    lupa.style.display = 'none'
    conjunto.style.display = 'flex'
    
    let i = input.value.toLowerCase()
    
    let tratado =  i.replaceAll("enter","e").replaceAll("imes", "i").replaceAll("ai", "a").replaceAll("ober", "o").replaceAll("ufat", "u")
    
    btn3.innerHTML = "Copiar"
    btn3.disabled = false
    return  resultado.innerHTML = tratado

}

function copiar(){
    navigator.clipboard.writeText(resultado.innerHTML)
    .then(()=> {
        alert("Mensagemn copiada")
        input.value = null
        btn3.innerHTML = "Copiado"
        btn3.disabled = true
    })
    .catch(() => {alert("something went wrong");
      });
    
}

