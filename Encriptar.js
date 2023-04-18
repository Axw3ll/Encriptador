const btnEncriptar = document.getElementById('btnEncriptar')
const btnDesencriptar = document.getElementById('btnDesencriptar')
const btnCopiar  =  document.getElementById('btncopiar')
var mensaje = document.getElementById('textoMensaje')
var MensajeEncriptado = document.getElementById('texto2')


mensaje.addEventListener('input', function(event) {
    mensaje.value = mensaje.value.toLowerCase();
  });
  
  MensajeEncriptado.addEventListener('input', function(event) {
    MensajeEncriptado.value = MensajeEncriptado.value.toLowerCase();
  });



btnEncriptar.onclick =  function(){
    encriptar()
}
btnDesencriptar.onclick = function(){
    desencriptar()
}
btnCopiar.onclick=  function(){
    copiar()
}
function encriptar(){
    // const regex = /^[a-z\s]*$/
    
    // var inputValue = mensaje.value.toLowerCase().trim()
    // if (!regex.test(inputValue)) {
    //     alert('Solo se permiten letras minúsculas y sin acentos.')
    //     return
    // }
    // La letra "e" es convertida para "enter"
    // La letra "i" es convertida para "imes"
    // La letra "a" es convertida para "ai"
    // La letra "o" es convertida para "ober"
    // La letra "u" es convertida para "ufat"
     var inputValue  =  mensaje.value.normalize('NFD').replace(/[\u0300-\u036f]/g, '')   
     if(inputValue.trim()!==''){
       
    inputValue = inputValue.replace(/e/g,'enter')   
    inputValue = inputValue.replace(/i/g,'imes')   
    inputValue = inputValue.replace(/a/g,'ai')   
    inputValue = inputValue.replace(/o/g,'ober')   
    inputValue = inputValue.replace(/u/g,'ufat')   
    MensajeEncriptado.value=inputValue;

    mensaje.value=''
    document.getElementById('imgDer').style.display='none'
    document.getElementById('texto').style.display='none'
    document.getElementById('txp').style.display='none'
    btnCopiar.style.display='show'
    btnCopiar.style.display='inherit'
    MensajeEncriptado.style.display='show'
    MensajeEncriptado.style.display='inherit'
    
    }else{
        alert('Ingrese un texto para encriptar por favor');
    } 
    


    
}
function desencriptar(){
    // const regex = /^[a-z\s]*$/

    // var inputValue = MensajeEncriptado.value.toLowerCase().trim()
    // if (!regex.test(inputValue)) {
    //     alert('Solo se permiten letras minúsculas y sin acentos.')

    //      return
    //  }
    var inputValue  =  mensaje.value.normalize('NFD').replace(/[\u0300-\u036f]/g, '')   
    if(inputValue.trim()!==''){
       inputValue = inputValue.replace(/enter/g,'e')
    inputValue = inputValue.replace(/imes/g,'i')   
    inputValue = inputValue.replace(/ai/g,'a')   
    inputValue = inputValue.replace(/ober/g,'o')   
    inputValue = inputValue.replace(/ufat/g,'u')   
    MensajeEncriptado.value=inputValue.toLowerCase();
     mensaje.value=''   
    document.getElementById('imgDer').style.display='none'
    document.getElementById('texto').style.display='none'
    document.getElementById('txp').style.display='none'
    btnCopiar.style.display='show'
    btnCopiar.style.display='inherit'
    MensajeEncriptado.style.display='show'
    MensajeEncriptado.style.display='inherit' 
    } else{
        alert('Ingrese un texto para desencriptar por favor');
    }
    
}
function copiar(){
    MensajeEncriptado.select()
    document.execCommand('copy');
    alert('Texto Copiado!')
    MensajeEncriptado.value=''
    document.getElementById('imgDer').style.display='block'
    document.getElementById('texto').style.display='block'
    document.getElementById('txp').style.display='block'
    MensajeEncriptado.style.display='none'
    btnCopiar.style.display='none'
    mensaje.focus()

}

