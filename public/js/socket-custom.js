const socket = io();

// Escuchar
socket.on('connect', function () {
  console.log('Conectado al servidor');
});

socket.on('disconnect', function () {
  console.log('Perdimos conexión con el servidor');
});

// Enviar información
socket.emit('enviarMensaje', {
  // usuario: 'Jesus',
  mensaje: 'Hola Mundo'
}, function (resp) {
  console.log('respuesta Server:', resp);
});

// Escuchar información
socket.on('enviarMensaje', function (mensaje) {
  console.log('Servidor', mensaje);
});
