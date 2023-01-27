const models = require("../models");

const like = (req, res) => {
  const { video_id: videoId, user_id: userId } = req.body;
  models.favoris
    .addFav(videoId, userId)
    .then(([resultFav]) => {
      if (resultFav.affectedRows === 0) {
        models.favoris.deleteFav(videoId, userId).then(([resultDel]) => {
          if (resultDel.affectedRows === 0) {
            res.sendStatus(404);
          } else {
            res.sendStatus(204);
          }
        });
      } else {
        res.sendStatus(204);
      }
    })
    .catch(() => {
      return res.status(500);
    });
};

module.exports = {
  like,
};
