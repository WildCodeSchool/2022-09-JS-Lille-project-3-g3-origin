const AbstractManager = require("./AbstractManager");

class videoManager extends AbstractManager {
  constructor() {
    super({ table: "video" });
  }

  insert(video) {
    return this.connection.query(
      `insert into ${this.table} (title, synopsis, duration, producer, actor, language, url, genre_id, thumbnail) values (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        video.title,
        video.synopsis,
        video.duration,
        video.producer,
        video.actor,
        video.language,
        video.url,
        video.genre_id,
        video.thumbnail,
      ]
    );
  }

  update(video) {
    return this.connection.query(
      `update ${this.table} set title = ? synopsis = ? duration = ? producer = ? actor = ? language = ? url = ? genre_id = ? tumbnail = ? where id = ?`,
      [
        video.title,
        video.synopsis,
        video.duration,
        video.producer,
        video.actor,
        video.language,
        video.url,
        video.genre_id,
        video.thumbnail,
        video.id,
      ]
    );
  }
}

module.exports = videoManager;
