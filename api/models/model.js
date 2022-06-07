export default class Model {
  table = undefined;

  database = '';
  hostname = '';
  username = '';
  password = '';

  connectionInstance = undefined;

  constructor(host = undefined, user = undefined, database = undefined, password = undefined) {
    require('dotenv').config()

    this.hostname = host ?? process.env.mysql_hostname;
    this.username = user ?? process.env.mysql_username;
    this.database = database ?? process.env.mysql_database;
    this.password = password ?? process.env.mysql_password;

    this.connectionInstance = require('mysql2').createConnection({
      host: this.hostname,
      user: this.username,
      database: this.database,
      password: this.password
    });
  }

  openDB() {
    this.connectionInstance.connect((err) => {
      if (err) {
        console.log(err)
      } else {
        console.log("Mysql connected!")
        return this.connectionInstance;
      }
    });
  }

  closeDB() {
    this.connectionInstance.end(() => {
      console.log("Mysql disconnected!")
    });
  }

  PromiseQuery(SQL) {
    return new Promise((resolve, reject) => {
      this.connectionInstance.query(SQL, (err, result, fields) => {
        resolve({
          err: err,
          result: result,
          fields: fields
        });
        this.closeDB();
      });
    })
  }

  async all(fields = '*') {
    let Data = await this.PromiseQuery(`select ${fields} from ${this.table}`);
    return Data.result;
  }

  async where(whereField, whereValue, selectFields = '*') {
    let SQL = `select ${selectFields} from ${this.table} where ${whereField} = '${whereValue}'`;
    let Data = await this.PromiseQuery(SQL);
    console.log(Data)
    return Data.result;
  }
}
