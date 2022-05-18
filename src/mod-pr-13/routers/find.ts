import * as mongoose from 'mongoose';
import {Athlete} from '../models/interface';

mongoose.connect('mongodb://localhost:27017/athletes', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
}).then(() => {
  console.log('Connected to the database');
}).catch(() => {
  console.log('Something went wrong when conecting to the database');
});

Athlete.findOne({dni: '123456'}).then((result) => {
  console.log(`Atleta encontrado:`);
  console.log(result);
}).catch((error) => {
  console.log(`Ha ocurrido un error.`);
  console.log(error);
});