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

  videoFav(id) {
    return this.connection.query(
      `SELECT ${this.table}.* FROM ${this.table}
      inner JOIN favoris ON ${this.table}.id = favoris.video_id
      inner JOIN user ON user.id = favoris.user_id
      WHERE user.id = ?`,
      [id]
    );
  }
}

module.exports = videoManager;
