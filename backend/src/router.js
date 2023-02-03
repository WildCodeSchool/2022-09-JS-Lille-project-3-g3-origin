const express = require("express");
const passport = require("passport");

const router = express.Router();

const Auth = require("./controllers/AuthController");
const videoControllers = require("./controllers/videoControllers");
const userControllers = require("./controllers/userControllers");
const favorisControllers = require("./controllers/favorisControllers");
const avatarControllers = require("./controllers/avatarController");

router.get("/videos", videoControllers.browse);
router.get("/videosfilter", videoControllers.filterAllVideo);
router.get("/videos/:id", videoControllers.read);
router.get("/users/:id", userControllers.read);
router.get("/favoris/:id", videoControllers.videoFav);
router.get("/avatars", avatarControllers.browse);

router.post("/users", Auth.signup);
router.get("/users", userControllers.browse);

router.post(
  "/login",
  passport.authenticate("local", { session: false }),
  Auth.login
);
router.post("/videos", videoControllers.add);

router.use(passport.authenticate("jwt"), (req, res, next) => {
  delete req.user.hashedPassword;
  next();
});

router.delete("/videos/:id", videoControllers.destroy);
router.delete("/users/:id", userControllers.destroy);

router.put("/videos/:id", videoControllers.edit);
router.put("/users/:id", userControllers.edit);
router.put("/favoris", favorisControllers.like);

module.exports = router;
