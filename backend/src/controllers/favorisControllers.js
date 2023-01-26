const models = require("../models");

const browse = (req, res) => {
  models.favoris
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const read = (req, res) => {
  models.favoris
    .find(req.params.id)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(rows[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const edit = (req, res, next) => {
  const favoris = req.body;

  // TODO validations (length, format...)

  favoris.id = parseInt(req.params.id, 10);

  models.favoris
    .update(favoris)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        next();
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const add = (req, res) => {
  const favoris = req.body;

  // TODO validations (length, format...)

  models.favoris
    .insert(favoris)
    .then(([result]) => {
      res.location(`/favoris/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const destroy = (req, res) => {
  const { videos_id, user_id } = req.body;
  models.favoris
    .deleteFav(videos_id, user_id)
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

const like = (req, res) => {
  const { videos_id, user_id } = req.body;
  models.favoris
    .addFav(videos_id, user_id)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        models.favoris.deleteFav(videos_id, user_id).then(([result]) => {
          if (result.affectedRows === 0) {
            res.sendStatus(404);
          } else {
            res.sendStatus(204);
          }
        });
      } else {
        res.sendStatus(204);
      }
    })
    .catch((error) => {
      return res.status(500);
    });
};

module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
  like,
};
