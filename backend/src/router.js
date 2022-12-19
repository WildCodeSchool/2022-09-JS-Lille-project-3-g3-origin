const express = require("express");

const router = express.Router();

const videoControllers = require("./controllers/videoControllers");
const userControllers = require("./controllers/userControllers");
const auth = require("./controllers/auth");

router.get("/videos", videoControllers.browse);
router.get("/videos/:id", videoControllers.read);
router.post("/users", auth.hashPassword, userControllers.add);
router.get("/users", userControllers.browse);
router.post(
  "/login",
  userControllers.getUserByEmailWithPasswordAndPassToNext,
  auth.verifyPassword
);
router.get("/users/:id", userControllers.read);

router.delete("/users/:id", userControllers.destroy);
router.delete("/videos/:id", videoControllers.destroy);
router.put("/users/:id", userControllers.edit);
router.put("/videos/:id", videoControllers.edit);
router.post("/videos", videoControllers.add);

router.use(auth.verifyToken);

module.exports = router;
