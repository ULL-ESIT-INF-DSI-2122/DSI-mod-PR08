import * as mongoose from 'mongoose';
import {Document, Schema, model} from 'mongoose';
/**
 * Interfaz que modela la info necesaria por usuario
 */
export interface AthleteInterface extends Document {
    dni: string,
    nombre: string,
    apellidos: string,
    edad: number,
    deporte: string,
    marca: number
}

export const AthleteSchema = new Schema<AthleteInterface>({
  dni: {
    type: String,
    required: true,
    unique: true,
  },
  nombre: {
    type: String,
    required: true,
  },
  apellidos: {
    type: String,
    required: true,
  },
  edad: {
    type: Number,
    default: 0,
  },
  deporte: {
    type: String,
    required: true,
  },
  marca: {
    type: Number,
    require: true,
    default: 0,
  },
});

export const Athlete = model<AthleteInterface>('athletes', AthleteSchema);