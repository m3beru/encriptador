function encriptar() {
    let texto = document.getElementById("texto").value;
    let textoEncriptado = document.getElementById("texto-encriptado");
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
        
    let textoCifrado = texto
      .replace(/e/gi, "enter")
      .replace(/i/gi, "imes")
      .replace(/a/gi, "ai")
      .replace(/o/gi, "ober")
      .replace(/u/gi, "ufat");
  
    if (texto.length != 0) {
      textoEncriptado.value = textoCifrado;
      tituloMensaje.textContent = "Texto encriptado con éxito";
      parrafo.textContent = "";
      
    } else {
      
      tituloMensaje.textContent = "Ningún mensaje fue encontrado";
      parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
      swal("Ooops!", "Debes ingresar un texto", "warning");
    }
  }
  
  function desencriptar() {
    let texto = document.getElementById("texto").value;
    let textoDesencriptado = document.getElementById("texto-encriptado");
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
  
    let textoDescifrado = texto
      .replace(/enter/gi, "e")
      .replace(/imes/gi, "i")
      .replace(/ai/gi, "a")
      .replace(/ober/gi, "o")
      .replace(/ufat/gi, "u");
  
    if (texto.length != 0) {
      textoDesencriptado.value = textoDescifrado;
      tituloMensaje.textContent = "Texto desencriptado con éxito";
      parrafo.textContent = "";
    } else {
      tituloMensaje.textContent = "Ningún mensaje fue encontrado";
      parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
      swal("Ooops!", "Debes ingresar un texto encriptado", "warning");
    }
  }

  function copiartexto(tipo) {
    let texto = '';
    
    if (tipo === 'encriptado') {
      texto = document.getElementById("texto-encriptado").value;
    } else if (tipo === 'desencriptado') {
      texto = document.getElementById("texto").value;
    } else {
      swal('Error', 'Tipo de texto no válido', 'error');
      return;
    }
  
    
    if (texto.trim() === '') {
      swal('Advertencia', 'Ingresa un texto antes de copiarlo', 'warning');
      return; 
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

  