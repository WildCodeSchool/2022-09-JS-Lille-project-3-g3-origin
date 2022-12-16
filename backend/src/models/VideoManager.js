const AbstractManager = require("./AbstractManager");

class VideoManager extends AbstractManager {
  constructor() {
    super({ table: "video" });
  }

  insert(video) {
    return this.connection.query(
      `insert into ${this.table} (title) values (?)`,
      [video.title]
    );
  }

  update(video) {
    return this.connection.query(
      `update ${this.table} set title = ? where id = ?`,
      [video.title, video.id]
    );
  }
}

module.exports = VideoManager;
