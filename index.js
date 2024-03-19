function encriptar() {
  let texto = document.getElementById("texto").value;
  let tituloMensaje = document.getElementById("titulo-mensaje");
  let parrafo = document.getElementById("parrafo");
  let muneco = document.getElementById("muneco");
  
  let textoCifrado = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

  if (texto.length != 0) {
    document.getElementById("texto").value = textoCifrado;
    tituloMensaje.textContent = "Texto encriptado con éxito";
    parrafo.textContent = "";
    muneco.src = "./img/Personaje2.jpg";
  } else {
    muneco.src = "./img/Personaje.jpg";
    tituloMensaje.textContent = "Ningún mensaje fue encontrado";
    parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
    swal("Ooops!", "Debes ingresar un texto", "warning");
  }
}

function desencriptar() {
  let texto = document.getElementById("texto").value;
  let tituloMensaje = document.getElementById("titulo-mensaje");
  let parrafo = document.getElementById("parrafo");
  let muneco = document.getElementById("muneco");

  let textoCifrado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");
  
    if (texto.length != 0) {
      document.getElementById("texto").value = textoCifrado;
      tituloMensaje.textContent = "Texto desencriptado con éxito";
      parrafo.textContent = "";
      muneco.src = "./img/Personaje2.jpg";
    } else {
      muneco.src = "./img/Personaje.jpg";
      tituloMensaje.textContent = "Ningún mensaje fue encontrado";
      parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
      swal("Ooops!", "Debes ingresar un texto", "warning");
    }
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


