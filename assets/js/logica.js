$(document).ready(function () {
    // Incremento y decremento de cantidad
    $('.incremento').click(function () {
      let cantidad = $(this).siblings('span');
      cantidad.text(parseInt(cantidad.text()) + 1);
    });
  
    $('.decremento').click(function () {
      let cantidad = $(this).siblings('span');
      let valorActual = parseInt(cantidad.text());
      if (valorActual > 1) {
        cantidad.text(valorActual - 1);
      }
    });
  
    // Aplicar código de descuento
    $('#aplicar-codigo').click(function () {
      let codigo = $('#codigo').val();
      if (codigo === 'JQUERY2222') {
        $('#codigo').css('background-color', 'lightgreen');
      } else {
        $('#codigo').css('background-color', 'lightblue');
      }
    });
  
    // Eventos del botón "Realizar Compra"
    let botonCompra = $('#realizar-compra');
  
    botonCompra.click(function () {
      botonCompra.css({ 'background-color': '#FFA500', color: 'white' });
      botonCompra.text('¿Estás seguro?');
    });
  
    botonCompra.dblclick(function () {
      botonCompra.css({ 'background-color': 'blue', color: 'white' });
      botonCompra.text('¡OK!');
    });
  
    botonCompra.mouseleave(function () {
      botonCompra.css({ 'background-color': '#FFFFFF', color: 'green' });
      botonCompra.text('COMPRADO');
    });
  });
  