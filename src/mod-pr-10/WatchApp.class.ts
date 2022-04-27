import * as fs from 'fs';
import * as chalk from 'chalk';
import {spawn} from 'child_process';
/**
 * Clase watchapp.
 */
export class WhatchApp {
  /**
   * Constructor de la clase watch app.
   * @param command 
   * @param argvs 
   * @param path 
   */
  constructor(private command: string, private argvs: string, private path: string) { }

  public watchDirectory() {
    // Lee un directorio
    fs.readdir(this.path, (error, stateBefore) => {
      if (error) {
        console.log(chalk.red(`Error al intentar leer el directorio ${this.path}.`));
        return -1;
      } else {
        /**
         * Watcher
         */
        fs.watch(this.path, (eventType, filename) => {
          if (filename) {
            // Lee un directorio
            fs.readdir(this.path, (error, stateAfter) => {
              if (error) {
                console.log(chalk.red(`El directorio ${this.path} no existe o ha sido eliminado.`));
                return -1;
              } else {
                if (eventType === 'change') {
                  // Mensaje para saber que archivo se ha modificado.
                  console.log(chalk.green(`${filename} se ha modificado!!`));

                  const ls = spawn(`${this.command}`, [`${this.argvs}`, `${this.path}`]);
                  // Donde se almacenará el resultado del comando a ejecutar sobre el fichero.
                  let salida: string = '';
                  ls.stdout.on('data', (data) => salida += data);
                  ls.on('close', () => {
                    console.log(chalk.green(`Realizando ${this.command} ${this.argvs} en ${this.path}`));
                    console.log(chalk.yellow(salida));
                    // Separando por espacios y creando un array.
                    const salidaArray = salida.split(/\s+/);
                    console.log(salidaArray);
                  });
                } else if (eventType === 'rename' && stateBefore.length < stateAfter.length) {
                  console.log(chalk.green(`${filename} se ha añadido!!`));
                } else if (eventType === 'rename') {
                  console.log(chalk.green(`${filename} se ha eliminado!!`));
                }
              }
            });
          } else {
            console.log(chalk.red(`Error: File ???`));
            return -1;
          }
        });
      }
    });
    console.log(chalk.yellow(`Observando ${this.path} ...`));
  }
}
const filename: string = process.argv[2];
const command: string = process.argv[3];
let argv: string = '';
let i = 4;
while (process.argv[i] != null) {
  argv += ' ' + process.argv[i];
  i += 1;
}
console.log(command);
const observer: WhatchApp = new WhatchApp(String(command), String(argv), String(filename));
observer.watchDirectory();
