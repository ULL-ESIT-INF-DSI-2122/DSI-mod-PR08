
// /**
//  * @class Reduce reduce el array de números en uno solo.
//  * Se trata de una clase abstracta la cual se extiende a otras subclases.
//  */
// export abstract class Reduce {

//     constructor(protected arrayEntrada: number []) {
//         this.arrayEntrada = [];
//     }
//     /**
//      * @method run() este establece los distintos métodos comunes para reducir el número
//      * del array
//      */
//     public run() {
//         this.iniciarLista();
//         this.despuesInicializacion();
//         this.addMapReduce(this.arrayEntrada);
//         // this.subMapReduce(this.arrayEntrada);
//         // this.prodMapReduce(this.arrayEntrada);
//         this.evaluarValoresDespues();
//     }
//     /**
//      * Hooks
//      */
//     protected despuesInicializacion() {}
//     protected evaluarValoresDespues(){}

//     /**
//      * Metodos a implementar en las subclases.
//      * @param arrayEntrada Array de numeros.
//      */
//     protected addMapReduce(arrayEntrada) {}
//     // protected subMapReduce(arrayEntrada) {}
//     // protected prodMapReduce(arrayEntrada) {}

//     protected abstract iniciarLista(): void;

// }