import { Mongo } from 'meteor/mongo';

//Esta clase la podrian omitir, creando la coleccion en otro archivo
export default Links = new Mongo.Collection('links');
