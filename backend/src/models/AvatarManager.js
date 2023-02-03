const AbstractManager = require("./AbstractManager");

class avatarManager extends AbstractManager {
  constructor() {
    super({ table: "avatar" });
  }
}

module.exports = avatarManager;
