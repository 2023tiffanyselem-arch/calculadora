document.addEventListener('DOMContentLoaded', () => {
  const boton = document.getElementById('btn');
  const mensaje = document.getElementById('mensaje');

  boton.addEventListener('click', () => {
    mensaje.textContent = '¡El archivo JavaScript está funcionando correctamente!';
  });
});
