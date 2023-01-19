const AbstractManager = require("./AbstractManager");

class videoManager extends AbstractManager {
  constructor() {
    super({ table: "favoris" });
  }

  // update(favoris) {
  //   return this.connection.query(
  //     `update ${this.table} (video_id, user_id) values (?, ?)`,
  //     [favoris.video_id, favoris.user_id]
  //   );
  // }

  update(favoris) {
    return this.connection.query(
      `INSERT IGNORE INTO ${this.table} (video_id, user_id) values (?, ?)`,
      [favoris.video_id, favoris.user_id]
    );
  }
}

module.exports = videoManager;
