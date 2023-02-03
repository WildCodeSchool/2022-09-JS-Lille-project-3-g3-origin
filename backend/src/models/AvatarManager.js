const AbstractManager = require("./AbstractManager");

class videoManager extends AbstractManager {
  constructor() {
    super({ table: "avatar" });
  }
}

module.exports = videoManager;
