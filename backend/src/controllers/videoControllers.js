const models = require("../models");

const browse = (req, res) => {
  const categoryId = parseInt(req.query.category_id, 10) || null;
  const needle = req.query.needle || null;
  models.video
    .findAll()
    .then(([rows]) => {
      return rows
        .filter((elt) => {
          if (!categoryId) return true;
          return elt.category_id === categoryId;
        })
        .filter((elt) => {
          if (!needle) return true;
          return elt.title.toLowerCase().includes(needle.toLowerCase());
        });
    })
    .then((movies) => {
      res.send(movies);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const filterAllVideo = (req, res) => {
  models.video
    .filterAllVideo()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const read = (req, res) => {
  models.video
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

const edit = (req, res) => {
  const video = req.body;

  // TODO validations (length, format...)

  video.id = parseInt(req.params.id, 10);

  models.video
    .update(video)
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

const add = (req, res) => {
  const video = req.body;

  // TODO validations (length, format...)

  models.video
    .insert(video)
    .then(([result]) => {
      res.location(`/videos/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const destroy = (req, res) => {
  models.video
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
const videoFav = (req, res) => {
  models.video
    .videoFav(parseInt(req.params.id, 10))
    .then(([result]) => {
      res.send(result);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  browse,
  filterAllVideo,
  read,
  edit,
  add,
  destroy,
  videoFav,
};
