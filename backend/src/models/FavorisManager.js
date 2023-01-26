const AbstractManager = require("./AbstractManager");

class videoManager extends AbstractManager {
  constructor() {
    super({ table: "favoris" });
  }

  deleteFav(videos_id, user_id) {
    return this.connection.query(
      `delete from ${this.table} where video_id= ? AND user_id=?`,
      [videos_id, user_id]
    );
  }

  addFav(videos_id, user_id) {
    return this.connection.query(
      `INSERT IGNORE INTO ${this.table} (video_id, user_id) values (?, ?)`,
      [videos_id, user_id]
    );
  }
}

module.exports = videoManager;
