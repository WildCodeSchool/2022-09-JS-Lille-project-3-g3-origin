const express = require("express");
const passport = require("passport");

const router = express.Router();

const Auth = require("./controllers/AuthController");
const videoControllers = require("./controllers/videoControllers");
const userControllers = require("./controllers/userControllers");
const auth = require("./controllers/auth");

router.get("/videos", videoControllers.browse);
router.get("/videos/:id", videoControllers.read);
router.get("/users/:id", userControllers.read);
router.get("/favoris/:id", videoControllers.videoFav);

router.post("/users", Auth.signup);
router.get("/users", userControllers.browse);
// router.post(
//   "/login",
//   userControllers.getUserByUsernameWithPasswordAndPassToNext
//   auth.verifyPassword
// );
router.post(
  "/login",
  passport.authenticate("local", { session: false }),
  Auth.login
);
router.post("/videos", videoControllers.add);

router.delete("/videos/:id", videoControllers.destroy);

router.put("/users/:id", userControllers.edit);
router.put("/videos/:id", videoControllers.edit);

// router.get("/protected");
router.delete("/users/:id", userControllers.destroy);
router.use(passport.authenticate("jwt"), (req, res, next) => {
  delete req.user.hashedPassword;
  next();
  // res.send(`Welcome ${req.user.username}`);
});

router.get("/users/:id", userControllers.read);

router.put("/videos/:id", videoControllers.edit);
router.put("/users/:id", userControllers.edit);
module.exports = router;
