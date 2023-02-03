const AbstractManager = require("./AbstractManager");

class userManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  insert(user) {
    return this.connection.query(
      `insert into ${this.table} (username, email, hashedpassword, firstname, lastname, city, address, premium) values (?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        user.username,
        user.email,
        user.hashedpassword,
        user.firstname,
        user.lastname,
        user.city,
        user.address,
        user.premium,
      ]
    );
  }

  update(user) {
    return this.connection.query(
      `update ${this.table} set username = ?, firstname = ?, lastname = ?, email = ?, city = ?, address = ?, premium = ?, avatar_id = ? where id = ?`,
      [
        user.username,
        user.firstname,
        user.lastname,
        user.email,
        user.city,
        user.address,
        user.premium,
        user.avatar_id,
        user.id,
      ]
    );
  }

  getUserFromUsername(username) {
    return this.connection.query(
      `SELECT ${this.table}.*, avatar.path FROM ${this.table} LEFT JOIN origin.avatar ON avatar.id=${this.table}.avatar_id where ${this.table}.username=?`,
      [username]
    );
  }
}

module.exports = userManager;
