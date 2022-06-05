import { DBConnection } from './db.connection';

export class PSQLConnection implements DBConnection {
  private name: string;
  private password: string;
  private database: string;
  private port: number;

  constructor(name: string, password: string, database: string, port: number) {
    this.name = name;
    this.password = password;
    this.database = database;
    this.port = port;
  }

  connect() {
    //Conectarse a la base de datos
  }
}
