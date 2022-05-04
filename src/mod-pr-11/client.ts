import * as net from 'net';
import * as chalk from 'chalk';
import {CmdEventEmitter} from './CmdEventEmitter';
// Comprobamos los argumentos de los comandos.
if (process.argv.length < 3) {
  console.log(chalk.red(`Filename??`));
} else {
  const command = process.argv[2];
  // Conectamos el socket.
  const socket = net.connect({port: 60300});
  // Conectamos el cliente.
  const client = new CmdEventEmitter(socket);

  socket.write(command);
  socket.end();

  client.on('command', (message) => {

    if (message.type === 'connected') {
      console.log(chalk.green(`Connected! -> command: ${command}`));
    } else if (message.type === 'success') {
      console.log(chalk.green(`Result: ${message.msg}`));
    } else if (message.type === 'error') {
      console.log(chalk.red(`Error: ${message.msg}`));
    } else if (message.type === 'stderr') {
      console.log(chalk.red(`Error with command: ${message.msg}`));
    } else {
      console.log(chalk.red(`Error: ${message.type} unknown`));
    }
  });

  client.on('end', () => {
    console.log('Connection ended.');
    console.log(command);
  })
}
