var btnencriptar = document.querySelector(".btn-encriptar");
var btndesencriptar = document.querySelector(".btn-encriptar");
var muneco = document.querySelector(".muneco");
var contenedor = document.querySelector(".contenedor");
var resultado = document.querySelector(".resultado");

btnencriptar.onclick = encriptar;
btndesencriptar.onlick = desencriptar;

function encriptar(){
    ocultarAdelante();
    var cajatexto = recuperarTexto()
    resultado.textContent = encriptarTexto(cajatexto);
}

function desencriptar(){
    ocultarAdelante();
    var cajatexto = recuperarTexto()
    resultado.textContent = desencriptarTexto(cajatexto);
}

function recuperarTexto(){
    var cajatexto = document.querySelector("cajatexto");
    return cajatexto.value 
}

function ocultarAdelante(){
    muneco.classList.add("ocultar");
    contenedor.classList.add("ocultar");
}

function encriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = ""; 

    for( var i = 0; i < texto.lenght; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "ai"
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "enter"
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "imes"
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "ober"
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "ufat"
        }
        else {
            textoFinal = textoFinal = texto[i]
        }
    } return textoFinal;

}

function desencriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.lenght; i++){
        if (texto[i] == "a"){
            textoFinal = textoFinal + "a"
            i = i+1;
        }

        else  if (texto[i] == "e"){
            textoFinal = textoFinal + "e"
            i = i+4;
        }
        else  if (texto[i] == "i"){
            textoFinal = textoFinal + "i"
            i = i+3;
        }
        else  if (texto[i] == "o"){
            textoFinal = textoFinal + "o"
            i = i+3;
        }
        else  if (texto[i] == "u"){
            textoFinal = textoFinal + "u"
            i = i+3;
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
        
    }

    return textoFinal;

}

function copiartexto() {
    let texto = document.getElementById("texto").value;
    
    // Verificar si el texto está vacío
    if (texto.trim() === '') {
      swal('Advertencia', 'Ingresa un texto antes de copiarlo', 'warning');
      return; // Salir de la función si el texto está vacío
    }
    
    navigator.clipboard.writeText(texto)
      .then(() => {
          swal('Éxito','El texto se copió al portapapeles','success');
      })
      .catch((error) => {
        console.error('Error al copiar el texto:', error);
        swal('Error','No se pudo copiar el texto, vuelve a intentarlo','error');
      });
  }