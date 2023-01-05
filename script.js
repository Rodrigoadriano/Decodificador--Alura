///// DOM ////
let input = document.querySelector('.textarea')
let lupa = document.querySelector('.lupa')
let resultado = document.querySelector('.resultado')
let conjunto = document.querySelector('.conjunto')

function Criptografar(){

    lupa.style.display = 'none'
    conjunto.style.display = 'flex'
    
    let i = input.value.toLowerCase()
    
    let tratado =  i.replaceAll("e","enter").replaceAll("i", "imes").replaceAll("a", "ai").replaceAll("o", "ober").replaceAll("u", "ufat")
    
    
    return  resultado.innerHTML = tratado

}
function descriptografar(){

    lupa.style.display = 'none'
    conjunto.style.display = 'flex'
    
    let i = input.value.toLowerCase()
    
    let tratado =  i.replaceAll("enter","e").replaceAll("imes", "i").replaceAll("ai", "a").replaceAll("ober", "o").replaceAll("ufat", "u")
    
    
    return  resultado.innerHTML = tratado

}

function copiar(){
    navigator.clipboard.writeText(resultado.innerHTML).then(()=> {alert("Mensagemn copiada")}).catch(() => {
        alert("something went wrong");
      });
    
}

