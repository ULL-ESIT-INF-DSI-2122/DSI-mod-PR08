// import { Reduce } from "../reduce/reduce";

// /**
//  * Clase AddMapReduce que se extiende de Reduce
//  */
// export class AddMapReduce extends Reduce {
//     constructor(protected arrayEntrada: number[]){
//         super(arrayEntrada);
//     }

//     public addMapReduce(): number {
//         let sumatorio: number = 0;
//         this.arrayEntrada.map((el) => {
//             sumatorio += el;
//         });
//         console.log(sumatorio);
//         return sumatorio;
//     }
//     public iniciarLista(): number[] {
//         console.log(`Inticializando vector`);
//         for(let i = 0; i < 7; i++) {
//           this.arrayEntrada.push(i);
//         }
//         return this.arrayEntrada
//     }
//     /**
//      * Hook final de evaluacion
//     */
//     public despuesInicializacion(): void {
//         console.log(`Se ha inicializado el addMapReduce`);
//     }
//     /**
//      * Hook final de evaluacion
//      */
//     protected evaluarValoresDespues() { console.log("\nFin de AddMapReduce"); }
// }

// let array1: number[] = [1,2,3,4,5];
// let result = new AddMapReduce(array1);
// console.log(`\nEvaluando array ${array1}`);
// result.addMapReduce();
// console.log("\nTemplate Method");
// result.run();


