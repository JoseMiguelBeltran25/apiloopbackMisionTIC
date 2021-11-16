import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'Mongo',
  connector: 'mongodb',
  url: 'mongodb://Admin_JoseMiguel25:RBvQb70bOPOJWTBh@misiontic-shard-00-00.nwdzv.mongodb.net:27017,misiontic-shard-00-01.nwdzv.mongodb.net:27017,misiontic-shard-00-02.nwdzv.mongodb.net:27017/test?replicaSet=atlas-cl6qtk-shard-0&ssl=true&authSource=admin',
  host: '',
  port: 0,
  user: '',
  password: '',
  database: '',
  useNewUrlParser: true
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class MongoDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'Mongo';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.Mongo', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
