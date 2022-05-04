import {spawn} from 'child_process';
import * as net from 'net';
import * as chalk from 'chalk';
// el objeto connection se emite cuando se realiza una nueva conexion.
// Devuelve un objeto server.
net.createServer((connection) => {
  // Informamos que el cliente se ha conectado.
  console.log(chalk.green('Client connected!'));
  // Enviamos un json indicando que se ha conectado.
  connection.write(JSON.stringify({'type': 'connected'}));
  connection.on('data', (data) => {
    // Indicamos el comando a ejecutar.
    console.log('Command: ' + data.toString());
    // Ejecutamos el comado que le pasamos.
    const command = spawn(data.toString(), {shell: true});
    // En caso de éxito lo devolvemos en un json.
    command.stdout.on('data', (dataChunk) => {
      connection.write(JSON.stringify({'type': 'success', 'msg': dataChunk.toString()}));
      connection.end();
    });
    // Por si el comando no existe o hay alguno otro tipo de error.
    // Lo devolvemos en un json.
    command.stderr.on('data', (error) => {
      connection.write(JSON.stringify({'type': 'stderr', 'msg': error.toString()}));
      connection.end();
    });
    // Devolvemos el error en un json.
    command.on('error', (error) => {
      connection.write(JSON.stringify({'type': 'error', 'msg': error.message}));
      connection.end();
    });
  });
  // Desconectamos cliente.
  connection.on('close', () => {
    console.log(chalk.green('Client disconnected.'));
  });
  // Escuchamos por el puerto 60300.
}).listen(60300, () => {
  console.log(chalk.green('Waiting clients...'));
});