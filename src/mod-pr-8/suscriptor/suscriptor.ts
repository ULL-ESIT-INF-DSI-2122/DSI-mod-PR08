import { Observable, Observer } from "../observable/observable";
import { Revista } from "../revista/revista";

/**
 * El suscritor reacciona a un evento de revista a la que esta suscrito.
 * @returns Devuelve un string con la informacion del evento.
 */
 export class Suscriptor implements Observer {
  public update(observer: Observable) {
      if (observer instanceof Revista) {
          console.log(`${observer.getName()} ha lanzado un nuevo número.`);
          return `${observer.getName()} ha lanzado un nuevo número.`;
      }
  }
}


const revistaABC = new Revista('ABC');
const suscriptor1 = new Suscriptor();

revistaABC.subscribe(suscriptor1);

const revistaMUNDO = new Revista('Mundo')
const suscriptor2 = new Suscriptor();
revistaMUNDO.subscribe(suscriptor2);

revistaABC.nuevoNumero();
revistaMUNDO.nuevoNumero();