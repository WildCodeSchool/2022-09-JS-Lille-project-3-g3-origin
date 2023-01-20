const models = require("../models");

const browse = (req, res) => {
  models.user
    .findAll()
    .then(([rows]) => {
      for (const row of rows) {
        delete row.hashedPassword;
      }
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const read = (req, res) => {
  models.user
    .find(req.params.id)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else {
        for (const row of rows) {
          delete row.hashedPassword;
        }
        res.send(rows[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const edit = (req, res) => {
  const user = req.body;
  // console.log([...user]);
  // const userReq = [...user];

  // if (user.firstname !== undefined) {
  //   userReq.push("firstname");
  // } else if (user.address !== undefined) {
  //   userReq.push("address");
  // } else if (user.city !== undefined) {
  //   userReq.push("city");
  // } else if (user.language !== undefined) {
  //   userReq.push("language");
  // }

  // TODO validations (length, format...)

  user.id = parseInt(req.params.id, 10);

  models.user
    .update(user)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        delete user.hashedPassword;
        res.status(200).send(user);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const add = (req, res) => {
  const user = req.body;

  // TODO validations (length, format...)

  models.user
    .insert(user)
    .then(([result]) => {
      user.id = result.insertId;
      delete user.hashedPassword;
      res.status(201).send(user);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const destroy = (req, res) => {
  models.user
    .delete(req.params.id)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const getUserByUsernameWithPasswordAndPassToNext = (req, res, next) => {
  const { username } = req.body;

  models.user
    .getUserFromUsername(username)
    .then(([users]) => {
      if (users[0] !== null) {
        [req.user] = users;
        next();
      } else {
        res.sendStatus(401);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
};

module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
  getUserByUsernameWithPasswordAndPassToNext,
};
