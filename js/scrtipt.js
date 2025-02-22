document.addEventListener('DOMContentLoaded', () => {
  const pantalla = document.querySelector('.pantalla'); // Selecciona la pantalla de la calculadora
  const botones = document.querySelectorAll('.boton'); // Selecciona todos los botones de la calculadora

  // Función para evaluar expresiones matemáticas de manera segura
  function calcularExpresion(expresion) {
    try {
      // Expresión regular para validar que solo contenga números y operadores permitidos
      const regex = /^[0-9+\-*/. ]+$/;
      if (!regex.test(expresion)) {
        throw new Error('Expresión no válida');
      }

      // Usamos eval solo si la expresión es segura
      return (expresion);
    } catch {
      return '¡Error!';
    }
  }

  // Itera sobre cada botón para agregar un evento de clic
  botones.forEach((boton) => {
    boton.addEventListener('click', () => {
      const valorBoton = boton.textContent; // Obtiene el valor del botón presionado

      // Limpiar la pantalla
      if (boton.id === 'limpiar') {
        pantalla.textContent = '0';
        return; // Detiene la ejecución del código
      }

      // Borrar el último carácter
      if (boton.id === 'borrar') {
        if (pantalla.textContent.length === 1 || pantalla.textContent === '¡Error!') {
          pantalla.textContent = '0'; // Si solo hay un carácter o hay un error, reinicia a 0
        } else {
          pantalla.textContent = pantalla.textContent.slice(0, -1); // Elimina el último carácter
        }
        return; // Detiene la ejecución del código
      }

      // Calcular el resultado
      if (boton.id === 'igual') {
        pantalla.textContent = calcularExpresion(pantalla.textContent);
        return; // Detiene la ejecución del código
      }

      // Validar el uso del signo de división (/)
      if (valorBoton === '/') {
        if (pantalla.textContent.endsWith('/')) {
          pantalla.textContent = '¡Error!'; // Muestra un error si se presiona dos veces el signo /
          return; // Detiene la ejecución del código
        }
      }

      // Actualizar el contenido de la pantalla
      if (pantalla.textContent === '0' || pantalla.textContent === '¡Error!') {
        pantalla.textContent = valorBoton; // Reemplaza el contenido si la pantalla
        //  está en 0 o muestra un error
      } else {
        pantalla.textContent += valorBoton; // Concatena el valor del botón al contenido actual
      }
    });
  });
});