const AbstractManager = require("./AbstractManager");

class videoManager extends AbstractManager {
  constructor() {
    super({ table: "favoris" });
  }

  deleteFav(videoId, userId) {
    return this.connection.query(
      `delete from ${this.table} where video_id= ? AND user_id=?`,
      [videoId, userId]
    );
  }

  addFav(videoId, userId) {
    return this.connection.query(
      `INSERT IGNORE INTO ${this.table} (video_id, user_id) values (?, ?)`,
      [videoId, userId]
    );
  }
}

module.exports = videoManager;
