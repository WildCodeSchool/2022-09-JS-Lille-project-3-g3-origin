const AbstractManager = require("./AbstractManager");

class userManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  insert(user) {
    return this.connection.query(
      `insert into ${this.table} (username, email, hashedpassword, firstname, lastname, city, language, address, premium) values (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        user.username,
        user.email,
        user.hashedPassword,
        user.firstname,
        user.lastname,
        user.city,
        user.language,
        user.address,
        user.premium,
      ]
    );
  }

  update(user) {
    return this.connection.query(
      `update ${this.table} set username = ?, firstname = ?, lastname = ?, email = ?, city = ?, language = ?, address = ?, premium = ? where id = ?`,
      [
        user.username,
        user.firstname,
        user.lastname,
        user.email,
        user.city,
        user.language,
        user.address,
        user.premium,
        user.id,
      ]
    );
  }

  getUserFromUsername(username) {
    return this.connection.query(
      `select * from ${this.table} where username = ?`,
      [username]
    );
  }
}

module.exports = userManager;
