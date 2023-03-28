function generarFormulario() {
    // Crea un formulario HTML
    var formularioHTML = `
      <form id="forma">
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre"><br><br>
        
        <label for="apellido">Apellido:</label>
        <input type="text" id="apellido" name="apellido"><br><br>
        
        <label for="email">Email:</label>
        <input type="email" id="email" name="email"><br><br>
        
        <input type="submit" value="Enviar">
      </form>
    `;
    
    // Inserta el formulario en el elemento con ID "formulario"
    document.getElementById("formulario").innerHTML = formularioHTML;
  }

  function moverImagen() {
    var imagen = document.getElementById("mi-imagen");
    imagen.style.left = "50px"; // cambia la posición horizontal
    imagen.style.top = "100px"; // cambia la posición vertical
  }
  