import { Observable, Observer } from "../observable/observable";

/**
 * La Revista notifica a sus suscriptores cuando lanza un nuevo numero.
 */
 export class Revista implements Observable {
    /**
     * @type {Observer[]} Lista de suscriptores.
     */
    private observers: Observer[] = [];
    /**
     * Constructor de la clase revista.
     * @param name Nombre de la revista.
     */
    constructor(private name: string){}
    /**
     * Metodo getter.
     * @returns Devuelve el nombre de la revista.
     */
    getName(): string { return this.name; }

    /**
     * Suscribe a un suscritor a la revista.
     * @param observer Nuevo suscriptor y a la vez observador.
     * @returns 
     */
    public subscribe(observer: Observer): void | string {
        const isExist = this.observers.includes(observer);
        if (isExist) {
            console.log('El suscriptor ya está suscrito');
            return 'El suscriptor ya está suscrito';
        }

        console.log(`Suscriptor suscrito correctamente a ${this.name}`);
        this.observers.push(observer);
        return `Suscriptor suscrito correctamente a ${this.name}`;
    }
    /**
     * Desuscribe a un suscriptor de la revista.
     * @param observer Observador para dessuscribir de la revista.
     * @returns Devuelve un string informativo.
     */
    public unsubscribe(observer: Observer): void | string {
        const observerIndex = this.observers.indexOf(observer);
        if (observerIndex === -1) {
            console.log('El suscriptor no se ha suscrito');
            return 'El suscriptor no se ha suscrito';
        }

        this.observers.splice(observerIndex, 1);
        console.log(`Desuscribiendo suscriptor de ${this.name}`);
        return `Desuscribiendo suscriptor de ${this.name}`
    }
    /**
     * Notifica a los suscriptores cuando la revista lanza un nuevo numero.
     */
    public nuevoNumero(): void {
        console.log(`** ${this.name} lanzando nuevo número **`);
        this.notify();
    }

    /**
     * Notifica a cada observador.
     */
    public notify(): void | string {
        console.log('Observable: Notificando suscriptores');
        this.observers.forEach((observer) => observer.update(this));
        return 'Observable: Notificando suscriptores';
    }
}