const express = require("express");

const router = express.Router();

const videoControllers = require("./controllers/videoControllers");
const userControllers = require("./controllers/userControllers");
const favorisControllers = require("./controllers/favorisControllers");

const auth = require("./controllers/auth");

router.get("/videos", videoControllers.browse);
router.get("/videos/:id", videoControllers.read);
router.get("/users", userControllers.browse);
router.get("/users/:id", userControllers.read);
router.get("/favoris/:id", videoControllers.videoFav);

router.post("/users", auth.hashPassword, userControllers.add);
router.post(
  "/login",
  userControllers.getUserByUsernameWithPasswordAndPassToNext,
  auth.verifyPassword
);
router.post("/videos", videoControllers.add);

router.delete("/users/:id", userControllers.destroy);
router.delete("/videos/:id", videoControllers.destroy);

router.put("/users/:id", userControllers.edit);
router.put("/videos/:id", videoControllers.edit);
router.put("favoris/:id", favorisControllers.edit);

router.use(auth.verifyToken);

module.exports = router;
