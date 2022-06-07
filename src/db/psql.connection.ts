import { DBConnection } from './db.connection';

export class PSQLConnection implements DBConnection {
  private host: string;
  private name: string;
  private password: string;
  private database: string;
  private port: number;

  public getHost(): string {
    return this.host;
  }

  public getName(): string {
    return this.name;
  }

  public getPassword(): string {
    return this.password;
  }

  public getDatabase(): string {
    return this.database;
  }

  public getPort(): number {
    return this.port;
  }

  //DATOS PARA LA CONEXION A POSTGRESQL
  connect() {
    this.host = 'localhost';
    this.name = 'carlos';
    this.password = 'calejandrolg99';
    this.database = 'desarrollo';
    this.port = 5432;
  }
}
