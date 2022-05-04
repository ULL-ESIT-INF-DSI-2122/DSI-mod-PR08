import {EventEmitter} from 'events';

/**
 * Clase que se extiende de EventEmitter.
 */
export class CmdEventEmitter extends EventEmitter {
  /**
   * Constructor
   * @param connection Socket
   */
  constructor(connection: EventEmitter) {
    // Constructor extendido de la clase EventEmitter.
    super();
    // Cuando recibe un evento, emite un mensaje para indicar que se ha recibido el mensaje.
    connection.on('data', (data) => {
      const message = JSON.parse(data);
      this.emit('command', message);
    });
  }
}