const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const models = require("../models");
require("dotenv").config();

class AuthController {
  static signup = async (req, res) => {
    const user = req.body;

    user.hashedpassword = await argon2.hash(user.password, {
      type: argon2.argon2id,
      timeCost: 2,
      memoryCost: 2 ** 16,
      parallelism: 1,
    });

    models.user
      .insert(user)
      .then(([result]) => {
        user.id = result.insertId;
        delete user.password;
        const token = jwt.sign(user, process.env.JWT_SECRET);
        delete user.hashedpassword;
        res.status(201).send({ user, token });
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static login = (req, res) => {
    const token = jwt.sign(req.user, process.env.JWT_SECRET);
    delete req.user.hashedpassword;
    res.status(200).json({ user: req.user, token });
  };
}

module.exports = AuthController;
