const connectionString: string =
'mongodb://Jack97:159753ty@ds145289.mlab.com:45289/codercampsdb';

import * as mongodb from 'mongodb';

export default class Database {
  public static db:mongodb.Db;
  public static connect() {

    return mongodb.MongoClient.connect(connectionString).then((db) => {
      this.db = db;
    }).catch((err) => {
      console.error(err);
    });
  }
}
