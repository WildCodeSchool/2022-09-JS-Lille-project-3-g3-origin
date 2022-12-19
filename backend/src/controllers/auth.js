const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const hashPassword = async (req, res, next) => {
  const hashedPassword = await argon2.hash(req.body.password, {
    type: argon2.argon2id,
    timeCost: 2,
    memoryCost: 2 ** 16,
    parallelism: 1,
  });
  req.body.hashedPassword = hashedPassword;

  delete req.body.password;
  next();
};

const verifyPassword = async (req, res) => {
  const { hashedPassword } = req.user.hashedPassword;
  const clearPassword = req.body.password;
  try {
    if (await argon2.verify(hashedPassword, clearPassword)) {
      const token = jwt.sign(
        { sub: req.user.id },
        process.env.JWT_SECRET,
        { algorithm: "HS256" },
        { expiresIn: "1h" }
      );

      delete req.user.hashedPassword;
      res.send({ token, user: req.user });
    } else {
      res.sendStatus(401);
    }
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

const verifyToken = (req, res, next) => {
  try {
    const headerAuth = req.get("Authorization");
    if (headerAuth === null) {
      throw new Error("Authorization header is missing !");
    }

    const [type, token] = headerAuth.split(" ");

    if (type !== "Bearer") {
      throw new Error("Authorization header has not the 'Bearer' type");
    }
    req.payload = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch (err) {
    console.error(err);
    res.sendStatus(401);
  }
};

module.exports = {
  verifyPassword,
  hashPassword,
  verifyToken,
};
