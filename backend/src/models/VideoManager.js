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
      `SELECT ${this.table}.*, genre.label as label_genre, category.label as label_category FROM ${this.table}
      inner JOIN favoris ON ${this.table}.id = favoris.video_id
      inner JOIN user ON user.id = favoris.user_id
      inner JOIN genre ON ${this.table}.genre_id = genre.id
      inner JOIN category ON ${this.table}.category_id = category.id
      WHERE user.id = ?`,
      [id]
    );
  }

  filterAllVideo() {
    return this.connection.query(
      `SELECT ${this.table}.*, category.label as category, genre.label as genre FROM ${this.table}
      INNER JOIN category on ${this.table}.category_id = category.id 
      INNER JOIN genre on  ${this.table}.genre_id = genre.id`
    );
  }
}

module.exports = videoManager;
