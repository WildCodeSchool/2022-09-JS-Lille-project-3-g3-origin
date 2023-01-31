const models = require("../models");

const like = (req, res) => {
  const { videoID, userID } = req.body;
  models.favoris
    .addFav(videoID, userID)
    .then(([resultFav]) => {
      if (resultFav.affectedRows === 0) {
        models.favoris.deleteFav(videoID, userID).then(([resultDel]) => {
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
