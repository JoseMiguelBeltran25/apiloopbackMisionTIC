import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Ruta} from './ruta.model';

@model({settings: {strict: false}})
export class Servicio extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  fecha: string;

  @property({
    type: 'string',
    required: true,
  })
  hora_inicio: string;

  @property({
    type: 'string',
    required: true,
  })
  hora_fin: string;

  @property({
    type: 'string',
    required: true,
  })
  placa_vehiculo: string;

  @property({
    type: 'string',
    required: true,
  })
  nombre_conductor: string;

  @property({
    type: 'string',
    required: true,
  })
  dinero_recogido: string;

  @belongsTo(() => Ruta, {name: 'rutaFk'})
  ruta: string;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Servicio>) {
    super(data);
  }
}

export interface ServicioRelations {
  // describe navigational properties here
}

export type ServicioWithRelations = Servicio & ServicioRelations;
