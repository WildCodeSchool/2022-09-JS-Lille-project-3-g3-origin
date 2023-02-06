const AbstractManager = require("./AbstractManager");

class userAvatarManager extends AbstractManager {
  constructor() {
    super({ table: "user_avatar" });
  }
}

module.exports = userAvatarManager;
