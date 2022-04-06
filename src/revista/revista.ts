import { Observable, Observer } from "../observable/observable";

/**
 * La Revista notifica a sus suscriptores cuando lanza un nuevo numero.
 */
 export class Revista implements Observable {
    /**
     * @type {Observer[]} Lista de suscriptores.
     */
    private observers: Observer[] = [];

    constructor(private name: string){}

    getName(): string { return this.name; }

    /**
     * 
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

    public nuevoNumero(): void {
        console.log(`** ${this.name} lanzando nuevo número **`);
        this.notify();
    }

    /**
     * Trigger an update in each subscriber.
     */
    public notify(): string {
        console.log('Observable: Notificando suscriptores');
        this.observers.forEach((observer) => observer.update(this));
        return 'Observable: Notificando suscriptores';
    }
}