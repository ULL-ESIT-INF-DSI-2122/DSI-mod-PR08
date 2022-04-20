// import { Reduce } from "../reduce/reduce";


// export class SubMapReduce extends Reduce {
//     constructor(protected arrarEntrada: number[]){
//         super(arrarEntrada);
//     }

//     public subMapReduce(): number {
//         let sumatorio: number = 0
//         for(let index: number = 0; index < this.arrarEntrada.length; index++){
//             let valorAnterior = this.arrarEntrada[index-1];
//             let valorActual = this.arrarEntrada[index];
//             sumatorio = valorAnterior - valorActual
//         }
//         console.log(sumatorio);
//         return sumatorio;
//     }
//     /**
//      * Hook final de evaluacion
//      */
//     protected evaluarValoresDespues() { console.log("\nFin de SubMapReduce"); }
// }

// let array1: number[] = [4, 3];
// let result = new SubMapReduce(array1);
// console.log(`\nEvaluando array ${array1}`);
// result.subMapReduce();
// console.log("\nTemplate Method");
// result.run();