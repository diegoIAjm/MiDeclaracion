document.addEventListener('DOMContentLoaded', function() {
    const envelope = document.getElementById('envelope');
    const carta = document.getElementById('carta');
    const btnSi = document.getElementById('btnSi');
    const btnNo = document.getElementById('btnNo');
    const aceptacion = document.getElementById('aceptacion');
  
    // Al hacer clic en el sobre, se abre la solapa
    envelope.addEventListener('click', function() {
      envelope.classList.add('open');
      setTimeout(() => {
        envelope.style.display = 'none';
        carta.style.display = 'block';
        setTimeout(() => {
          carta.classList.add('show');
        }, 10);
      }, 800);
    });
  
    // Botón "Sí": muestra la sección de aceptación
    btnSi.addEventListener('click', function() {
      aceptacion.style.display = 'block';
    });
  
    // Botón "No": se mueve aleatoriamente
    btnNo.addEventListener('click', function() {
      let randomX = Math.random() * 70 + 15; // entre 15% y 85%
      let randomY = Math.random() * 70 + 15;
      btnNo.style.position = 'relative';
      btnNo.style.left = randomX + '%';
      btnNo.style.top = randomY + '%';
    });
  });
  